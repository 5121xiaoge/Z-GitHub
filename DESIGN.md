---
name: "Z-GitHub"
description: "Vercel-inspired Operate 工具界面：中性分层、清晰状态、可检查的技术结果。"
colors:
  page: "#fafafa"
  surface: "#fff"
  subtle: "#f3f4f6"
  ink: "#171717"
  body: "#51555d"
  muted: "#656b75"
  line: "#e3e5e8"
  line-strong: "#c4c8cf"
  accent: "#0761d1"
  success: "#147d46"
  success-soft: "#edf8f0"
  error: "#bd2727"
  code: "#191b20"
  code-ink: "#edf0f5"
  primary: "#171717"
  on-primary: "#fff"
  press: "#303237"
  dark-page: "#101113"
  dark-surface: "#17181b"
  dark-subtle: "#212328"
  dark-ink: "#f1f2f4"
  dark-body: "#b4b8c0"
  dark-muted: "#9a9fa9"
  dark-line: "#2c2f35"
  dark-line-strong: "#555b65"
  dark-accent: "#8bb9ff"
  dark-success: "#7ad7a0"
  dark-success-soft: "#152f23"
  dark-error: "#ff9b9b"
  dark-code: "#0b0c0e"
  dark-primary: "#f1f2f4"
  dark-on-primary: "#151619"
  dark-press: "#d0d3d9"
typography:
  headline:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif'
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0"
  title:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif'
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0"
  title-small:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif'
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0"
  body:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  button:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif'
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0"
  tag:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif'
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0"
  mono-source:
    fontFamily: 'ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0"
  mono-output:
    fontFamily: 'ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "0"
  mono-meta:
    fontFamily: 'ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace'
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0"
rounded:
  tag: "4px"
  control: "6px"
  tool: "8px"
spacing:
  "2": "2px"
  "4": "4px"
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "28": "28px"
  "32": "32px"
  "36": "36px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.press}"
  button-primary-dark:
    backgroundColor: "{colors.dark-primary}"
    textColor: "{colors.dark-on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  button-primary-dark-hover:
    backgroundColor: "{colors.dark-press}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  button-secondary-hover:
    backgroundColor: "{colors.subtle}"
  icon-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    rounded: "{rounded.control}"
    height: "40px"
    width: "40px"
  icon-button-flat:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    rounded: "{rounded.control}"
    height: "40px"
    width: "40px"
  source-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.mono-source}"
    rounded: "{rounded.tool}"
    padding: "16px 12px 12px 16px"
  tabs:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
  status-tag:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.success}"
    typography: "{typography.tag}"
    rounded: "{rounded.tag}"
    padding: "3px 8px"
  output-container:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tool}"
  example-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "13px 4px"
---

# Design System: Z-GitHub

## Overview

**Creative North Star: "Operate"**

Z-GitHub 的视觉方向是已确认的 Vercel-inspired 企业级工作界面：清晰、克制且有层次，保留 Z-GitHub 自身标识。高级质感来自细边界、稳定的排版、精确的状态反馈和可检查的技术内容，不来自营销式大标题或装饰性陈列。

浅色以白色工具表面和柔和中性页面区分层级，深色以石墨色保持同样的语义结构。页面保留完整的输入、结果、资源信息和记录密度；有边框的输入与结果工具和未装卡片的辅助信息共同形成工作区。主题切换的点击中心圆形揭示是现有实现的动效特征，其他控件仅有短促的状态反馈。

**Key Characteristics:**
- 白色与石墨色双主题，中性面承载主要信息。
- 中文系统 UI 字体负责操作，等宽字体负责链接、路径和命令。
- 细边框、低幅阴影和紧凑圆角构成精细层级。
- 颜色表达操作与真实状态，不充当服务指标。
- 响应式保留主要命令与信息顺序，不削减为过度简洁的界面。

本记录从 `_worker.js` 的 `githubInterface()` 内嵌 CSS、组件和主题逻辑提取。前置 tokens 为实现值；`dark-*` 记录同名 CSS 变量在深色主题下的值，`code-ink` 在两种主题中相同。`.impeccable/design.json` 的合成 tonal ramps 仅为 display metadata，不是页面实际应用的 tokens。

## Colors

色彩以中性灰建立信息层级，蓝色表达交互，绿色和红色表达已验证的输入状态。准确值由 frontmatter 单一持有。

### Primary

- **Graphite Command / Inverse Command:** `primary`、`on-primary`、`press` 及对应 `dark-*` 用于主要命令、命令文字与悬停表面。主命令是黑白反转，不是蓝色填充按钮。
- **Action Blue:** `accent` 与 `dark-accent` 用于键盘焦点、链接悬停、光标、文本选区和当前路由图标；它保持功能性强调。

### Secondary

- **Validated Green:** `success` 与 `success-soft` 及深色对应项用于有效输入和已生成结果标签。
- **Validation Red:** `error` 与 `dark-error` 用于错误文字与无效输入边界。源码没有为错误表面实际应用背景色 token。

### Neutral

- **Page / Tool / Quiet Surface:** `page`、`surface`、`subtle` 及深色对应项分别承载页面、输入及结果工具、空状态及悬停。
- **Strong / Reading / Supporting Ink:** `ink`、`body`、`muted` 及深色对应项区分标题与资源名、说明、元数据。
- **Fine / Strong Boundary:** `line`、`line-strong` 及深色对应项分别分隔区域与强调输入及控件边界。
- **Technical Output:** `code`、`dark-code` 和共用的 `code-ink` 保持结果代码区为深色可读表面，包括浅色主题下的结果。

### Named Rules

**The Semantic Color Rule.** 黑白承担主命令，蓝色承担交互，绿色承担已验证或已生成状态，红色承担输入错误；这些颜色不代表未经测量的在线率、速度或服务健康。

**The Paired Theme Rule.** 深浅主题切换同一组语义变量，不改变组件的信息层级；不要把某个主题的中性文字值硬写进另一个主题。

## Typography

**UI Font:** frontmatter 的系统中文 sans 栈，用于任务标题、导航、说明和按钮。

**Label/Mono Font:** frontmatter 的技术等宽栈，用于源链接、生成结果、路径和资源元数据。

**Character:** 这是操作界面的清晰层级，不是独立的展示字体系统。字号固定，字距统一为零；没有 viewport-driven 字号缩放。

### Hierarchy

- **Headline:** `headline` 是任务标题，紧凑半粗，不作为营销 hero。
- **Title:** `title` 是工作区标题；字段标签同为固定 16px、字重 600，但继承基础行高 1.6。`title-small` 是较小标题及资源名。
- **Body:** `body` 是基础阅读与导航排版；说明中还实际使用固定的 13px 字号。
- **Label:** `label` 是验证信息和辅助元数据；更小的固定 11px 用于详情名、时间和页脚。
- **Button / Tag:** `button`、`tag` 使用中等字重，在有限控件空间内维持可扫描性。
- **Technical:** `mono-source` 用于源链接；`mono-output` 用于结果；`mono-meta` 用于示例路径和历史来源。资源详情另使用 12px/1.75，导航计数使用 11px/20px 和 tabular numerals。

### Named Rules

**The Task Scale Rule.** 保持任务标题与紧凑面板的字号关系；不要把现有的任务标题扩成展示型 hero。

**The Technical Readability Rule.** 链接、路径与命令采用等宽字体并允许任意位置换行；结果保留可选择文本和有限高度滚动，不用省略号替代实际命令。

## Layout

当前实现以最大 1200px 的居中容器组织内容，桌面两侧使用至少 32px 且兼顾 safe-area 的留白。横向头部与导航是全宽带状区域。工作区是 `minmax(0, 1fr) 276px` 双列，主区右内距 40px，辅助列左内距 28px，由细分隔线连接而非浮动卡片。

重复间距在 frontmatter 的 spacing 中记录；组件的小型光学偏移和不对称内距保留在组件说明及 sidecar，不强行归入等距栅格。桌面头部最小高度 76px，导航最小高度 55px；任务区开头留白 36px/28px，输入至结果间距 32px。

- **At 960px:** 辅助列收至 230px，主区右内距 28px，辅助区左内距 24px；品牌补充文字及其分隔线隐藏。
- **At 760px:** 容器两侧至少 20px，主辅列纵向排列；辅助区内部两列，第一节跨两列，详情也分两列。头部最小高度 66px，图标按钮变为 44px，普通按钮最小高度变为 44px，页脚允许换行。
- **At 400px:** 容器两侧至少 16px，表单底部纵向排列，主命令占满可用宽度；辅助区单列，结果操作纵向排列，历史操作纵向排列。源链接字体改为固定 13px。

输入可纵向调整，高度限制为 88px 至 240px；结果最大高度为 240px。长主机名、路径和元数据允许换行。资源名最多两行，完整技术结果仍保留在代码区。

## Elevation & Depth

深度来自表面色、细分隔线与低幅阴影的组合。输入边界比结果及区域分隔更强，工具保持轻微抬升；通知具有更高的浮层阴影。布局区域没有硬偏移阴影，也不采用多层装饰性模糊背景。

### Shadow Vocabulary

- **Tool, Light:** `0 1px 2px #00000004, 0 4px 8px -4px #00000012`，用于输入和结果工具。
- **Tool, Dark:** `0 1px 2px #00000020, 0 4px 8px -4px #00000040`，在深色主题中保留同一工具层级。
- **Notice:** `0 4px 8px -4px #00000020, 0 12px 24px -8px #00000024`，用于底部状态通知。

### Named Rules

**The Framed Tool Rule.** 用边框容器框住真正的输入与结果工具；辅助信息和页面分区保持未装卡片的布局，不把区域再套进装饰性卡片。

**The Fine Boundary Rule.** 常态区分依赖 1px 边界与低幅阴影；键盘焦点采用蓝色 2px outline，不用增加常态阴影替代可见焦点。

## Shapes

重复的小型标签及计数使用 `rounded.tag`，命令和图标控件使用 `rounded.control`，输入、结果和通知使用 `rounded.tool`。主工作区、导航带与辅助区没有统一的大圆角外壳。图标为内联 Lucide SVG，常见操作图标为 16px 至 20px，使用 currentColor、圆端点和 1.8 描边宽度。

圆形属于主题揭示的遮罩，不属于卡片形状规则；不要因紧凑圆角策略移除现有圆形主题切换。

## Components

### Buttons

主命令采用黑白反转，次命令保持轻边框白色/石墨色表面。两者共享控件圆角、8px/16px 内距、8px 图文间距和中等字重。常态最小高度 40px，移动端最小高度 44px；主生成命令桌面最小宽度 148px。

悬停仅在精细指针设备启用：主命令使用 `press`，次命令使用 `subtle`。按压向下移动 1px，采用 120ms ease-out 的 transform transition。键盘焦点为 2px `accent` outline、4px offset。禁用保持布局，透明度为 .45。

### Icon Buttons

标准图标按钮有细边框，flat 变体无可见常态边框与背景。桌面尺寸 40px，输入内部工具为 34px；760px 及以下两者均为 44px。复制、粘贴、清空、主题等工具保持 SVG 图标、`aria-label` 与原生 `title`。

### Inputs / Fields

源链接字段是一个实际框住的工具，包含等宽 textarea 和右侧工具列。外壳使用较强 1px 边界、工具圆角及工具阴影，内距为 16px 12px 12px 16px。focus-within 使用 2px `accent` outline、2px offset；无效状态边界改为 `error`，并有文字状态反馈。

### Navigation

导航是无填充的文字加图标 tabs，不是圆角分段卡片。选中项字重 600、文字使用 `ink`，底部 2px 同色线定位当前视图；计数使用小型中性标签。导航采用 tablist / tab 语义，支持箭头、Home 和 End 键，选中与焦点分开表达。

### Chips

状态标签使用小圆角、`success-soft` 表面与 `success` 文字，内距 3px/8px、图标间距 4px。它表达有效/已生成结果，不作为可点击筛选器。导航计数为独立的中性标签，不借用成功色。

### Cards / Containers

结果容器使用工具圆角、细边界和低幅阴影；资源摘要、深色技术输出及结果操作构成一个连续容器。摘要桌面内距 18px/20px，操作区为 14px/20px。空状态使用 `subtle`，并保留稳定的最小高度 176px。代码区的可复制文字、图标按钮和原资源入口是实际工作内容，不是装饰性 terminal 图。

### List Rows

示例和历史保持无外层卡片的行结构。示例行内距 13px/4px，历史行内距 18px/0；细线分隔、图标、资源名与等宽来源共同支持扫描。示例 hover 使用 `subtle`，历史工具继续复用图标按钮。

### Theme Reveal

深色切入以点击中心圆形揭示新表面，浅色切回收缩旧深色表面，时长 520ms、ease-out。键盘触发使用主题按钮中心。支持 View Transition 时使用快照圆形 clip-path，否则使用 Web Animations 圆形遮罩；均不要求外部运行库。

切换期间暂停其他 transition。`prefers-reduced-motion` 或页面隐藏时立即切换，不运行圆形揭示；不支持动画的环境也直接切换。连续点击按最新意图串行完成。

### Notice

底部居中通知使用工具圆角、较强边界和通知阴影，内距 12px/18px，最大宽度为视口减 32px，并考虑底部 safe-area。它复用页面主题，不额外建立颜色体系；恢复记录操作使用蓝色文字命令。

## Do's and Don'ts

### Do:

- **Do** 保持黑白主命令、蓝色交互和绿色/红色状态的职责区分。
- **Do** 以细边界、低幅阴影、紧凑圆角和完整信息层级体现高级质感。
- **Do** 保留零字距、固定 UI 字号、等宽技术内容和长文本换行。
- **Do** 在深浅主题中复用语义变量，并保留代码区的深色可读性。
- **Do** 保留移动端主要命令、44px 控件及键盘可见焦点。
- **Do** 保留 520ms ease-out 主题揭示，同时尊重 reduced-motion 与直接切换路径。

### Don't:

- **Don't** 复制 Vercel 品牌、增加营销 hero 或把界面削成过度简洁的陈列。
- **Don't** 用绿色状态、徽章或辅助文字暗示未经测量的服务健康或性能。
- **Don't** 将辅助列、分区和行列表装进嵌套卡片。
- **Don't** 用装饰性大阴影、渐变光斑或扩大圆角替代现有信息层级。
- **Don't** 用字符图标、远程图标字体或无法选择的图像替代实际 SVG 操作与命令文字。
- **Don't** 把仅声明未应用的 `accent-soft`、`error-soft` 或 sidecar 合成 tonal ramps 当作已应用 tokens。
