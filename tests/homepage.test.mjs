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
    '\nglobalThis.validateInput = validate; globalThis.patterns = FILE_PATTERNS;', client);
  return { context, html, client, calls };
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
  assert.match(html, /恢复记录/);
  assert.match(html, /history\.replaceState/);
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
    'https://github.com/o/r', 'https://github.com/o/r/blob/main/file\nother',
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
  ]) {
    await t.test(value, () => {
      assert.equal(client.validateInput(value, 'clone').url.href, 'https://github.com/owner/repo.git');
    });
  }
  for (const value of [
    'git@github.com:owner/repo.git', 'https://raw.githubusercontent.com/owner/repo/main/file',
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
