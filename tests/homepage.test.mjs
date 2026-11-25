import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../_worker.js', import.meta.url), 'utf8');

async function fixture({ prefix = '/', jsdelivr = false } = {}) {
  const calls = [];
  const context = vm.createContext({
    URL, Request, Response, Headers, Uint8Array, atob,
    fetch: async (url, init) => {
      calls.push({ url, init });
      return new Response('mock resource', { headers: { 'content-type': 'text/plain' } });
    },
  });
  const configured = source.replace("const PREFIX = '/'", 'const PREFIX = ' + JSON.stringify(prefix))
    .replace('jsdelivr: 0', 'jsdelivr: ' + Number(jsdelivr))
    .replace('export default {', 'const worker = {');
  vm.runInContext(configured + '\nglobalThis.worker = worker; globalThis.page = githubInterface;', context);
  const html = await context.page();
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]);
  for (const script of scripts) new vm.Script(script);
  const client = vm.createContext({
    URL, document: { getElementById: () => ({}) },
    location: { origin: 'https://proxy.example' },
  });
  vm.runInContext(scripts.at(-1).split("\n\t\t$('source-form').addEventListener")[0] +
    '\nglobalThis.validateInput = validate; globalThis.patterns = FILE_PATTERNS; globalThis.examples = EXAMPLES;', client);
  return { context, html, client, calls, script: scripts.at(-1) };
}

async function runtimeFixture(hash = '') {
  const { html, script } = await fixture();
  let document;
  class Element {
    value = '';
    hidden = false;
    open = false;
    dataset = {};
    children = [];
    attributes = {};
    listeners = {};
    descendants = new Map();
    style = { setProperty() {} };
    addEventListener(name, listener) { this.listeners[name] = listener; }
    setAttribute(name, value) { this.attributes[name] = value; }
    removeAttribute(name) { delete this.attributes[name]; }
    toggleAttribute(name, value) { if (value) this.attributes[name] = ''; else delete this.attributes[name]; }
    replaceChildren(...children) { this.children = children; }
    append(...children) { this.children.push(...children); }
    contains(element) { return this.children.includes(element); }
    focus() { document.activeElement = this; }
    querySelector(selector) {
      if (!this.descendants.has(selector)) this.descendants.set(selector, new Element());
      return this.descendants.get(selector);
    }
  }
  const elements = new Map([...html.matchAll(/\bid="([^"]+)"/g)].map(match => [match[1], new Element()]));
  const tabs = ['file', 'clone'].map(mode => {
    const tab = elements.get('tab-' + mode);
    tab.dataset.mode = mode;
    return tab;
  });
  const root = new Element();
  root.dataset.theme = 'dark';
  const location = { origin: 'https://proxy.example', hash };
  document = {
    documentElement: root, visibilityState: 'visible', activeElement: null,
    getElementById: id => elements.get(id) ?? null,
    querySelectorAll: () => tabs, querySelector: () => new Element(),
    createElement: () => new Element(), addEventListener() {},
  };
  const copied = [];
  const context = vm.createContext({
    URL, document, location, Intl, Element,
    window: { addEventListener() {} },
    history: { replaceState: (_state, _title, route) => { location.hash = route; } },
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    localStorage: { setItem() {} }, setTimeout: () => 1, clearTimeout() {},
    navigator: { clipboard: { writeText: async text => copied.push(text) } },
  });
  vm.runInContext(script + '\nglobalThis.actions = { selectMode, changed, generate };', context);
  return { elements, context, location, copied, actions: context.actions };
}

test('embedded scripts compile and the homepage is standalone', async () => {
  const { context, html } = await fixture();
  assert.match(html, /<html lang="zh-CN"/);
  assert.match(html, /Z-GitHub/);
  assert.match(html, /Lucide icons 0\.468\.0, ISC License/);
  assert.match(html, /merchantability AND FITNESS/i);
  assert.doesNotMatch(html, /<script[^>]+src=/);
  assert.doesNotMatch(html, /Direction contract|OWN-WORLD|FIRST VIEWPORT/);
  const response = await context.worker.fetch(new Request('https://proxy.example/'), {}, {});
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
});

test('homepage includes accessible navigation and bounded long-content surfaces', async () => {
  const { html } = await fixture();
  assert.match(html, /class="skip-link" href="#main"/);
  assert.match(html, /inputmode="url"/);
  assert.match(html, /#output[^}]*max-height: 240px/);
  assert.match(html, /#detail-path[^}]*max-height: 105px/);
  assert.match(html, /history\.replaceState/);
});

test('focused first view uses progressive disclosure without duplicate actions', async () => {
  const { html } = await fixture();
  assert.equal([...html.matchAll(/<button[^>]*\brole="tab"/g)].length, 2);
  assert.match(html, /id="output-section"[^>]* hidden/);
  assert.match(html, /<details class="disclosure" id="resource-disclosure">/);
  assert.doesNotMatch(html, /history-disclosure|renderHistory|const records|最近记录|恢复记录|<footer|footer-inner|footer-links/);
  assert.doesNotMatch(html, /id="(?:copy-command|output-empty|instance-host|tab-history)"/);
  assert.doesNotMatch(html, /项目仓库|source-link|top-actions/);
  assert.match(html, /class="examples" role="group" aria-label="示例链接"/);
  assert.match(html, /summary:focus-visible/);
});

test('compact examples use public links supported by their active mode', async t => {
  const { client } = await fixture();
  assert.equal(client.examples.file.length, 3);
  assert.equal(client.examples.clone.length, 2);
  for (const kind of ['file', 'clone']) {
    for (const example of client.examples[kind]) {
      await t.test(kind + ': ' + example.label, () => {
        assert.equal(client.validateInput(example.url, kind).error, undefined);
        assert.match(example.url, /^(?:https:\/\/|git@github\.com:)/);
        assert.doesNotMatch(example.url, /5121xiaoge|Z-GitHub/i);
      });
    }
  }
});

test('controls have layered surfaces and gated, accessible press feedback', async () => {
  const { html } = await fixture();
  assert.match(html, /\.example-button\s*\{[^}]*border: 1px solid var\(--line\)[^}]*background: var\(--surface\)/);
  assert.match(html, /\.button\.primary\s*\{[^}]*background-image: linear-gradient[^}]*box-shadow: inset/);
  assert.match(html, /:active:not\(:disabled\):not\(:focus-visible\)[^{]*\{[^}]*translateY\(1px\) scale\(\.98\)/);
  assert.match(html, /@media \(hover: hover\) and \(pointer: fine\)[\s\S]*\.icon-button:hover:not\(:disabled\)/);
  assert.match(html, /@media \(prefers-reduced-motion: reduce\)[\s\S]*transform: none !important/);
  assert.match(html, /a:not\(\.button\):hover/);
  assert.doesNotMatch(html, /transition:\s*all|transition:[^;{}]*(?:box-shadow|background|filter)/);
});

test('example buttons fill editable input without generating or retaining old results', async () => {
  const { elements, actions } = await runtimeFixture();
  const source = elements.get('source');
  const examples = elements.get('examples');
  assert.equal(examples.children.length, 3);
  const fileExample = examples.children[0];
  assert.equal(fileExample.type, 'button');
  assert.equal(fileExample.attributes['aria-label'], '填入项目文件示例');
  fileExample.listeners.click();
  assert.equal(source.value, 'https://github.com/microsoft/vscode/blob/main/README.md');
  assert.equal(elements.get('output-section').hidden, true);
  actions.generate();
  elements.get('resource-disclosure').open = true;
  examples.children[1].listeners.click();
  assert.equal(source.value, 'https://github.com/microsoft/vscode');
  assert.equal(elements.get('output-section').hidden, true);
  assert.equal(elements.get('output').textContent, '');
  assert.equal(elements.get('resource-disclosure').open, false);
  assert.equal(elements.get('clear').disabled, false);
  actions.selectMode('clone');
  assert.equal(examples.children.length, 2);
  assert.equal(examples.children[1].attributes['aria-label'], '填入SSH示例');
  examples.children[1].listeners.click();
  assert.equal(source.value, 'git@github.com:microsoft/vscode.git');
  assert.equal(elements.get('output-section').hidden, true);
  actions.generate();
  assert.equal(elements.get('output').textContent, 'git clone https://proxy.example/https://github.com/microsoft/vscode.git');
  actions.selectMode('file');
  assert.equal(examples.children.length, 3);
  assert.equal(source.value, 'https://github.com/microsoft/vscode');
});

test('removed history deep link falls back to the usable file form', async () => {
  const { elements, location, actions } = await runtimeFixture('#history');
  assert.equal(elements.has('history-disclosure'), false);
  assert.equal(elements.get('source-label').textContent, '源文件链接');
  assert.equal(elements.get('panel-work').hidden, false);
  assert.equal(location.hash, '#file');
  elements.get('source').value = 'https://github.com/o/r/archive/main.zip';
  actions.changed();
  actions.generate();
  assert.equal(elements.get('output-section').hidden, false);
  assert.equal(elements.get('output').textContent, 'https://proxy.example/https://github.com/o/r/archive/main.zip');
});

test('unknown modes preserve results; edits hide stale output and details', async () => {
  const { elements, actions } = await runtimeFixture();
  elements.get('source').value = 'https://github.com/o/r/blob/main/f.txt';
  actions.changed();
  actions.generate();
  const output = elements.get('output').textContent;
  actions.selectMode('history');
  assert.equal(elements.get('output').textContent, output);
  assert.equal(elements.get('output-section').hidden, false);
  elements.get('resource-disclosure').open = true;
  elements.get('source').value = 'https://example.com/unsupported';
  actions.changed();
  assert.equal(elements.get('output-section').hidden, true);
  assert.equal(elements.get('resource-disclosure').open, false);
  assert.equal(elements.get('output').textContent, '');
  assert.equal(elements.get('download').attributes.href, undefined);
});

test('clone shares one copy action and retains separate mode drafts', async () => {
  const { elements, actions, location } = await runtimeFixture();
  const source = elements.get('source');
  source.value = 'https://github.com/o/r/blob/main/f.txt';
  actions.changed();
  actions.selectMode('clone');
  source.value = 'github.com/owner/repo';
  actions.changed();
  actions.generate();
  assert.equal(elements.get('output').textContent, 'git clone https://proxy.example/https://github.com/owner/repo.git');
  assert.equal(elements.get('output-actions').hidden, true);
  assert.equal(elements.get('copy').attributes['aria-label'], '复制克隆命令');
  actions.selectMode('history');
  actions.selectMode('file');
  assert.equal(source.value, 'https://github.com/o/r/blob/main/f.txt');
  assert.equal(location.hash, '#file');
  actions.selectMode('clone');
  assert.equal(source.value, 'github.com/owner/repo');
});

test('repository links generate default-branch source archives without adding records', async () => {
  const { elements, actions } = await runtimeFixture();
  elements.get('source').value = 'https://github.com/o/r';
  actions.changed();
  actions.generate();
  assert.equal(elements.get('output').textContent, 'https://proxy.example/https://github.com/o/r/archive/HEAD.zip');
  assert.equal(elements.get('resource-name').textContent, 'r-HEAD.zip');
  assert.equal(elements.get('detail-type').textContent, '默认分支源码');
  assert.equal(elements.has('history-list'), false);
});

test('IME composition and Shift+Enter do not submit; Enter still generates', async () => {
  const { elements } = await runtimeFixture();
  const source = elements.get('source');
  source.value = 'https://github.com/o/r';
  for (const flags of [{ isComposing: true }, { keyCode: 229 }, { shiftKey: true }]) {
    let prevented = false;
    source.listeners.keydown({ key: 'Enter', ...flags, preventDefault: () => { prevented = true; } });
    assert.equal(prevented, false);
    assert.equal(elements.get('output-section').hidden, true);
  }
  let prevented = false;
  source.listeners.keydown({ key: 'Enter', preventDefault: () => { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(elements.get('output-section').hidden, false);
});

test('repository convenience paths remain public, supported and normalized', async t => {
  const { client } = await fixture();
  for (const value of [
    'github.com/owner/repo', 'https://github.com/owner/repo.git',
    'https://github.com/owner/repo/', 'https://GitHub.com/owner/repo.git/',
  ]) {
    await t.test(value, () => {
      const result = client.validateInput(value, 'file');
      assert.equal(result.error, undefined);
      assert.equal(result.url.href, 'https://github.com/owner/repo/archive/HEAD.zip');
      assert.equal(result.type, '默认分支源码');
      assert.ok(client.patterns.some(pattern => pattern.test(result.url.href)));
    });
  }
  for (const value of [
    'https://github.com/owner/.git', 'https://github.com/owner/repo?tab=readme-ov-file',
    'https://github.com/owner/repo?token=synthetic', 'https://github.com.evil.example/owner/repo',
  ]) {
    await t.test(value, () => assert.ok(client.validateInput(value, 'file').error));
  }
});

test('supported file resource matrix', async t => {
  const { client } = await fixture();
  for (const value of [
    'https://github.com/owner/repo/releases/download/v1/file.zip',
    'github.com/owner/repo/archive/refs/heads/main.zip',
    'https://github.com/owner/repo/blob/main/file.txt',
    'http://github.com/owner/repo/raw/main/file.txt',
    'https://raw.githubusercontent.com/owner/repo/main/file.txt',
    'https://raw.github.com/owner/repo/main/file.txt',
    'https://gist.githubusercontent.com/owner/id/raw/file.txt',
    'https://gist.github.com/owner/id/raw/file.txt',
    'https://github.com/owner/repo/tags',
    'https://github.com/owner/repo/archive/main.zip?download=1',
    'https://GitHub.com/owner/repo/blob/main/file.txt#L10',
  ]) {
    await t.test(value, () => {
      const result = client.validateInput(value, 'file');
      assert.equal(result.error, undefined);
      assert.equal(result.url.hash, '');
      assert.ok(client.patterns.some(pattern => pattern.test(result.url.href)));
    });
  }
});

test('reject unsupported, malformed and credential-bearing inputs', async t => {
  const { client } = await fixture();
  for (const value of [
    '', 'not a url', 'javascript:alert(1)', 'ftp://github.com/o/r/blob/main/f',
    'https://github.com.evil.example/o/r/blob/main/f',
    'https://example.com/o/r/blob/main/f', 'https://github.com:8443/o/r/blob/main/f',
    'https://github.com/o/r/tree/main', 'https://github.com/o/r/suites/123',
    'https://github.com/o', 'https://github.com/o/r/blob/main/file\nother',
    'https://user:fake@github.com/o/r/blob/main/file',
    'https://github.com/o/r/blob/main/file?token=synthetic',
    'https://github.com/o/r/blob/main/file?access_token=synthetic',
    'https://github.com/o/r/blob/main/file?X-Amz-Signature=synthetic',
    'https://github.com/o/r/blob/main/file?sig=synthetic',
    'https://github.com/o/r/blob/main/file?api_key=synthetic',
    'https://github.com/o/r/blob/main/file#access_token=synthetic',
    'https://github.com/o/r/blob/main/' + 'x'.repeat(8200),
  ]) {
    await t.test(value.slice(0, 100), () => assert.ok(client.validateInput(value, 'file').error));
  }
});

test('clone URL normalization and shell-safe repository names', async t => {
  const { client } = await fixture();
  for (const value of [
    'github.com/owner/repo', 'https://github.com/owner/repo.git',
    'https://github.com/owner/repo/', 'https://github.com/owner/repo.git/',
    'git@github.com:owner/repo.git', 'ssh://git@github.com/owner/repo.git',
    'git@GitHub.com:owner/repo', 'ssh://git@github.com/owner/repo/',
  ]) {
    await t.test(value, () => {
      assert.equal(client.validateInput(value, 'clone').url.href, 'https://github.com/owner/repo.git');
    });
  }
  for (const value of [
    'git@github.com.evil.example:owner/repo.git', 'ssh://git:fake@github.com/owner/repo.git',
    'ssh://git@github.com:2222/owner/repo.git', 'git@github.com:owner/repo.git?token=synthetic',
    'git@github.com:owner/repo.git#access_token=synthetic',
    'git@github.com:owner/repo%24%28id%29', 'https://raw.githubusercontent.com/owner/repo/main/file',
    'https://github.com/owner/repo/blob/main/file', 'https://github.com/owner/repo?download=1',
    'https://github.com/owner/repo%24%28id%29', 'https://github.com/owner/.git',
  ]) {
    await t.test(value, () => assert.ok(client.validateInput(value, 'clone').error));
  }
});

test('prefix and jsDelivr settings reach the frontend', async () => {
  const { context, html, client } = await fixture({ prefix: '/gh/', jsdelivr: true });
  assert.match(html, /const PREFIX = "\/gh\/"/);
  assert.match(html, /src="\/gh\/favicon\.ico"/);
  assert.equal(client.validateInput('https://github.com/o/r/raw/main/f', 'file').url.pathname, '/o/r/blob/main/f');
  const response = await context.worker.fetch(new Request('https://proxy.example/gh/favicon.ico'), {}, {});
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-type'), 'image/png');
});

test('existing release, blob, raw and clone proxy routes still work', async t => {
  for (const [path, expected] of [
    ['https://github.com/o/r/releases/download/v1/f.zip', 'https://github.com/o/r/releases/download/v1/f.zip'],
    ['https://github.com/o/r/blob/main/f.txt', 'https://github.com/o/r/raw/main/f.txt'],
    ['https://raw.githubusercontent.com/o/r/main/f.txt', 'https://raw.githubusercontent.com/o/r/main/f.txt'],
    ['https://github.com/o/r.git/info/refs?service=git-upload-pack', 'https://github.com/o/r.git/info/refs?service=git-upload-pack'],
  ]) {
    await t.test(path, async () => {
      const { context, calls } = await fixture();
      const response = await context.worker.fetch(new Request('https://proxy.example/' + path), {}, {});
      assert.equal(response.status, 200);
      assert.equal(calls[0].url, expected);
      assert.equal(response.headers.get('access-control-allow-origin'), '*');
    });
  }
});

test('theme motion includes interruption, reduced motion and fallback', async () => {
  const { html } = await fixture();
  assert.match(html, /520ms ease-out/);
  assert.match(html, /prefers-reduced-motion: reduce/);
  assert.match(html, /activeTransition\?\.skipTransition/);
  assert.match(html, /activeWipe\?\.finish/);
  assert.match(html, /document\.visibilityState === 'hidden'/);
  assert.match(html, /typeof Element\.prototype\.animate === 'function'/);
  assert.ok(html.indexOf("html.dataset.themeTo = theme") < html.indexOf("document.startViewTransition(()"));
});
