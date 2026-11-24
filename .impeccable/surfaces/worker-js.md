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

OWN-WORLD: White and soft neutral surfaces, graphite dark mode, fine borders,
subtle stacked elevation, 6-8px corners, system Chinese sans and technical mono.
Blue marks actions and selection; green marks validated links only.

STORY: Choose file or clone, enter a supported source, inspect the derived
resource, generate a real URL or command, copy or open it, reuse session records.

FIRST VIEWPORT: Compact branded header and navigation, a 28px task title,
a wide input/result work area, and a narrower unframed request-detail column.
The primary generation command stays visible on mobile without a hero.

FORM: User-pinned Vercel-inspired Operate surface, code-led. No concept roll:
the confirmed reference and premium-finish constraint determine the world.
The signature move is a click-centered 520ms circular light/dark reveal.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance.
