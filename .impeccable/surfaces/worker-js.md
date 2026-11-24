---
version: 1
slug: "worker-js"
primary_target: "_worker.js"
related_targets: []
---

# Z-GitHub 变更记录

## 2026-11-24 / 界面 v1.1

- 来源：https://github.com/5121xiaoge/Z-GitHub
- 基线提交：22510199590c98f998dd12d064b98c8a652d2c8e
- 范围：内嵌主页设计、链接校验和页面交互；不修改代理后端，不推送、不部署。
- 用户确认：Vercel 设计参考，企业级，有高级质感，不能过度简洁。
- 本地参考为第三方设计分析，不是 Vercel 官方产品设计规范。
- 图像来源：基线 `_worker.js` 内嵌 favicon，缩小为界面标识，不新增远程图像请求。
- 图标来源：https://github.com/lucide-icons/lucide
- 图标版本：0.468.0 / f12b0de177fbc2a6795e99be065887e72b237123
- 图标采用源 SVG 节点；运行时无 CDN 或第三方脚本依赖。
- Lucide 源文件 SHA256（自算值，仅用于完整性，不作为独立来源证明）：

| 文件 | SHA256 |
| --- | --- |
| link.svg | 4f3237183dcaabfac92f4e94c776a9a9e45c3c5e77a921061a6b34b61eb5413f |
| copy.svg | ea80e566c7a12628a447cb53179b19aea4f60b9143e2becd0d0f20bf260e5718 |
| download.svg | 21ee20839a201a74e612aafe7eaaf56f6ddc095c74aa5fcbb252c51f74a7535c |
| arrow-up-right.svg | 50b2503b9d11881142255466b7e3461d022b919735841c321d72003ac9959fe1 |
| arrow-right.svg | 288397fdb73bb4f783cf9eabb726ff47357df1d4e3f1201dd748090579f108b9 |
| check.svg | 7f33acc9a77a61659531044525fc008edebe215bf4dcf1c789c8674ad3277db0 |
| sun.svg | a3955c8b0425fcc5c9ba12d2bdd77fe53b2cd5dd05e7742a56f342e996fb2ef8 |
| moon.svg | 47503477c9c6848eeaff01c324093e1a04a7d264220f580662d92f229eaa428e |
| terminal.svg | 1ec2382658b6fe0642253ba75d3bbd8f48d03c9aa79c9cdb0dbbc269e112b8a1 |
| clock-3.svg | 21007df4799ad0c90e1833e35abc4fab1a7efe19f8bf7b63bbb61dd63360c405 |
| trash-2.svg | e63698acf757d3043fcb4a9ea6ffceff9dd84708707eafc879c86b34a6ff2786 |
| circle-alert.svg | ce3e98b7a03b78c0071131df42466e4e1ff5187fccad30e739ec9ce951cf685a |
| x.svg | 4a9cdab38fbb96162e7dace28e33f4ca0e49d8963a6162abc3d4691b7d675117 |
| file.svg | f54212286d0c013328f165f342a054f92f494c1598da1beaf33f48b6d46bdbcc |
| package.svg | 399c20ee3a2ef58300e30f4c930b8cfa52bbb8faf19053593b0ab027ffd45903 |
| shield-check.svg | 8d4fcdbde5bba4abb1a2f6fe53e37ceb6343a1d5449a9d88f6f97c1971d26c4e |
| clipboard-paste.svg | 1b6ae38c9a03b6f4587aab3def027f2dd9a87361045a97acc15b0516e272d0e8 |
| chevron-right.svg | 2758143d7b2434e4aa7307dfd34405c87909ff4052f21b5f3f40d45224b4f19b |

## Direction contract

THESIS: A premium working console for generating GitHub proxy links, not a
marketing landing page. The first screen opens directly into the task.

OWN-WORLD: Near-black graphite canvas, stepped dark tool surfaces and hairline
boundaries without tool shadows; 6-8px corners, Chinese system sans and technical
mono. Coral marks the primary command and focus; mint marks validated links.
A light counterpart keeps the same hierarchy and preserves theme choice.

STORY: Choose file or clone, enter a supported source, generate a real URL or
command, then copy or download it. Repository roots generate default-branch
source ZIPs; GitHub SSH repository addresses normalize to HTTPS Clone commands.
Use a mode-specific example to fill the editable input, without auto-generating
or downloading. Inspect resource details only when needed. No project-repository
header link, recent records or static footer.

FIRST VIEWPORT: A compact branded header on continuous graphite canvas, a 26px
task title alongside two mode tabs, and a centered 832px input work area.
Compact bordered example choices sit below the input, followed by the coral
generation command. The header contains the brand and theme control only. There is no empty
result panel or sidebar; generated results appear inline. Resource details
use a native disclosure, closed by default. The page ends after the work area.

FORM: User-pinned Raycast-inspired Operate surface, code-led, superseding the
previous Vercel reference on 2026-11-24. The user approved graphite depth,
coral accents and reduced content. Per mode-operate, this reference lends
palette, type and density, not marketing structure or copied branding.
The signature move remains the click-centered 520ms theme reveal.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance.

## 2026-11-24 / 新风格与内容收敛

- 用户反馈：内容太多、操作太复杂；随后明确要求换风格并确认 Raycast 参考。
- 移除重复实例文案、示例列表、大块等待结果、资源范围侧栏和重复复制命令。
- 详情、原始资源入口和历史仍保留，通过原生折叠区渐进展示。
- 保留 file / clone / history 深链、输入校验、主题、复制、下载和历史恢复。
- 默认深色；保留用户已有主题选择及浅色模式。主操作珊瑚红是用户确认的
  本项目改写，不是 Raycast 官方规范；不复制条纹、品牌或营销界面。
- 不改代理核心、环境变量、内嵌 favicon 或许可证；本轮不推送、不部署。

## 2026-11-24 / 功能补充与移除记录、页脚

- 用户明确要求补充功能，同时不要最近记录和底部信息。
- 完整移除最近记录的 DOM、样式、内存数组和恢复/清空交互，不做隐藏保留。
- 移除静态页脚及说明链接；保留源许可证文件和内嵌版权注释。
- 仓库主页在文件模式转换为 `archive/HEAD.zip`，不假定默认分支名。
- Clone 支持 GitHub 的 `git@github.com:owner/repo.git` 和
  `ssh://git@github.com/owner/repo.git`，仍拒绝凭据、非默认端口与伪造来源。
- 保留两模式输入、复制/下载、折叠详情、主题和键盘操作；中文输入法组合中的
  Enter 不触发生成。旧 `#history` 首次访问回到 `#file`。
- 维持现有 tokens、布局与技术栈，不新增常驻说明区。本轮未推送或部署。

## 2026-11-24 / 示例与按钮精修

- 移除顶部“项目仓库”入口；保留品牌与主题切换。
- 文件模式增加项目文件、源码 ZIP、Raw 文件示例；Clone 模式增加 HTTPS、SSH。
- 示例点击只填入并聚焦输入，清除旧结果，不自动生成或下载。
- 示例采用紧凑细边框按钮，可换行，不恢复历史记录或额外说明区。
- 主命令、次命令、图标与选中 tab 增加静态高光和边缘层次，不给工具加外投影。
- 指针按压采用 160ms ease-out 下沉与 .98 缩放，释放 120ms；状态层只改变 opacity。
- 保留可见键盘焦点；键盘激活与 reduced-motion 不移动控件，禁用工具不响应悬停。
- 保持既有主题、tokens、代理后端、favicon 和许可证，待浏览器验收后更新 GitHub。
