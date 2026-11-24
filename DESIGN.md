---
name: "Z-GitHub"
description: "Raycast-inspired Operate 工具界面：石墨层次、珊瑚命令、按需展开的技术信息。"
colors:
  page: "#f5f6f8"
  surface: "#fff"
  subtle: "#eceef2"
  ink: "#191b20"
  body: "#4e545f"
  muted: "#666d79"
  line: "#dfe2e8"
  line-strong: "#b4bac5"
  accent: "#be353b"
  success: "#147d46"
  success-soft: "#e8f6ee"
  error: "#b4232c"
  code: "#111317"
  code-ink: "#edf0f5"
  primary: "#be353b"
  on-primary: "#fff"
  press: "#a32931"
  dark-page: "#0b0c0f"
  dark-surface: "#14161a"
  dark-subtle: "#202329"
  dark-ink: "#f4f4f6"
  dark-body: "#c5c8d0"
  dark-muted: "#969ca8"
  dark-line: "#292d35"
  dark-line-strong: "#505763"
  dark-accent: "#ff747a"
  dark-success: "#59d499"
  dark-success-soft: "#132c23"
  dark-error: "#ff9c9f"
  dark-code: "#090b0e"
  dark-primary: "#ff747a"
  dark-on-primary: "#250b10"
  dark-press: "#ff8c91"
typography:
  headline:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif'
    fontSize: "26px"
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
  "32": "32px"
  "48": "48px"
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
    padding: "20px 12px 16px 20px"
  tabs:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    rounded: "{rounded.tool}"
    padding: "4px"
  tab-selected:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.ink}"
    typography: "{typography.title-small}"
    rounded: "{rounded.control}"
    padding: "0 14px"
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
  disclosure-summary:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
  history-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "18px 0"
---

# Design System: Z-GitHub

## Overview

**Creative North Star: "Operate"**

Z-GitHub 的视觉方向是已确认的 Raycast-inspired 工作界面：精炼、清晰且有高级质感，保留 Z-GitHub 自身标识。石墨色表面、珊瑚色命令、细边界与稳定排版构成层次，不借用参考品牌或营销结构。

默认深色，保留用户已有主题选择及浅色对应。主要工作流保持单列，结果在生成后出现，资源详情和最近记录按需展开。内容精简但实际命令、技术文本和状态反馈仍完整；点击中心圆形主题揭示延续已有动效约定。

**Key Characteristics:**
- 默认石墨深色与浅色对应，同一组语义变量维持层次。
- 中文系统 UI 字体负责操作，等宽字体负责链接、路径和命令。
- 细边框、阶梯表面色和紧凑圆角构成层级，工具不使用阴影。
- 颜色表达操作与真实状态，不充当服务指标。
- 单列输入与生成后结果，原生折叠区收纳次要信息。

本记录从 `_worker.js` 的 `githubInterface()` 内嵌 CSS、组件和主题逻辑提取。前置 tokens 为实现值；`dark-*` 记录同名 CSS 变量在深色主题下的值，`code-ink` 在两种主题中相同。`.impeccable/design.json` 的合成 tonal ramps 仅为 display metadata，不是页面实际应用的 tokens。

## Colors

石墨与中性灰建立信息层级，珊瑚色表达主命令和交互，mint 表达有效状态。准确值由 frontmatter 单一持有。

### Primary

- **Coral Command:** `primary`、`on-primary`、`press` 及对应 `dark-*` 用于珊瑚色主命令、命令文字与悬停表面；深色主题的文字采用深色反衬。
- **Coral Focus:** `accent` 与 `dark-accent` 用于键盘焦点、链接悬停、光标、页面选区和路由图标。代码区保留自己的浅蓝选区，不将其升格为全局交互色。

### Secondary

- **Validated Mint:** `success` 与 `success-soft` 及深色对应项用于有效输入和已生成结果标签，浅色对应为可读的绿色。
- **Validation Red:** `error` 与 `dark-error` 用于错误文字与无效输入边界。源码没有为错误表面实际应用背景色 token。

### Neutral

- **Page / Tool / Quiet Surface:** `page`、`surface`、`subtle` 及深色对应项分别承载页面、输入及结果工具、选中 tab 及悬停。
- **Strong / Reading / Supporting Ink:** `ink`、`body`、`muted` 及深色对应项区分标题与资源名、说明、元数据。
- **Fine / Strong Boundary:** `line`、`line-strong` 及深色对应项分别分隔区域与强调输入及控件边界。
- **Technical Output:** `code`、`dark-code` 和共用的 `code-ink` 保持结果代码区为深色可读表面，包括浅色主题下的结果。

### Named Rules

**The Semantic Color Rule.** 珊瑚色承担主命令与交互，mint/绿色承担已验证或已生成状态，错误色承担输入错误；这些颜色不代表未经测量的在线率、速度或服务健康。

**The Paired Theme Rule.** 深浅主题切换同一组语义变量，不改变组件的信息层级；不要把某个主题的中性文字值硬写进另一个主题。

## Typography

**UI Font:** frontmatter 的系统中文 sans 栈，用于任务标题、导航、说明和按钮。

**Label/Mono Font:** frontmatter 的技术等宽栈，用于源链接、生成结果、路径和资源元数据。

**Character:** 这是操作界面的清晰层级，不是独立的展示字体系统。字号固定，字距统一为零；没有 viewport-driven 字号缩放。

### Hierarchy

- **Headline:** `headline` 是任务标题，紧凑半粗，不作为营销 hero。
- **Title:** `title` 是结果标题；`title-small` 用于资源名和选中 tab。字段标签为固定 14px、字重 500，继承基础行高 1.6。
- **Body:** `body` 是基础阅读与导航排版；说明中还实际使用固定的 13px 字号。
- **Label:** `label` 是验证信息和辅助元数据；更小的固定 11px 用于详情名、时间和页脚。
- **Button / Tag:** `button`、`tag` 使用中等字重，在有限控件空间内维持可扫描性。
- **Technical:** `mono-source` 用于源链接；`mono-output` 用于结果；`mono-meta` 用于历史来源。资源详情另使用 12px/1.75，折叠区计数使用 11px/20px 和 tabular numerals。

### Named Rules

**The Task Scale Rule.** 保持任务标题与紧凑面板的字号关系；不要把现有的任务标题扩成展示型 hero。

**The Technical Readability Rule.** 链接、路径与命令采用等宽字体并允许任意位置换行；结果保留可选择文本和有限高度滚动，不用省略号替代实际命令。

## Layout

当前实现是居中单列工作区。主容器最大宽度 896px，桌面两侧至少 32px 且兼顾 safe-area；常规桌面可用内容宽度为 832px。头部与页脚沿用最大 1200px 的容器，延续页面底色和细横线边界。

重复间距在 frontmatter 的 spacing 中记录，光学偏移与不对称内距保留在组件说明及 sidecar。桌面头部最小高度 72px，任务标题与两模式 tabs 并列，任务区留白 48px/32px。主生成命令在输入下方，结果仅生成后显示，输入至结果间距 32px。

- **At 760px:** 容器两侧至少 20px，标题与 tabs 纵向排列，tabs 占满可用宽度、两个模式等分。头部最小高度 66px，tab、按钮和图标工具最小操作尺寸增为 44px，页脚允许换行。
- **At 400px:** 容器两侧至少 16px，表单底部纵向排列，主命令占满可用宽度；资源详情由两列改为一列，结果及历史操作纵向排列。源链接字体改为固定 13px。

输入可纵向调整，高度限制为 88px 至 240px；结果最大高度为 240px。长主机名、路径和元数据允许换行。资源名最多两行，完整技术结果仍保留在代码区。

## Elevation & Depth

工具不使用阴影。深度来自页面、工具与选中状态的阶梯表面色以及 1px 边界；输入边界比结果及折叠区分隔更强。仅底部状态通知保留浮层阴影，不把它复用到常态工作工具。

### Shadow Vocabulary

- **Notice:** `0 4px 8px -4px #00000020, 0 12px 24px -8px #00000024`，用于底部状态通知。

### Named Rules

**The Framed Tool Rule.** 用边框容器框住真正的输入与结果工具；次要信息放在原生折叠区，不把区域再套进装饰性卡片。

**The Fine Boundary Rule.** 常态区分依赖 1px 边界与表面色，不添加工具阴影；键盘焦点采用珊瑚色 2px outline，不用阴影替代可见焦点。

## Shapes

重复的小型标签及计数使用 `rounded.tag`，命令、图标控件和单个 tab 使用 `rounded.control`，输入、结果、tabs 外框和通知使用 `rounded.tool`。主工作区与折叠信息没有大圆角外壳。图标为内联 Lucide SVG，常见操作图标为 16px 至 20px，使用 currentColor、圆端点和 1.8 描边宽度。

圆形属于主题揭示的遮罩，不属于卡片形状规则；不要因紧凑圆角策略移除现有圆形主题切换。

## Components

### Buttons

主命令采用珊瑚填充，次命令保持轻边框工具表面。两者共享控件圆角、8px/16px 内距、8px 图文间距和中等字重。常态最小高度 40px，移动端最小高度 44px；主生成命令桌面最小宽度 148px。

悬停仅在精细指针设备启用：主命令使用 `press`，次命令使用 `subtle`。按压向下移动 1px，采用 120ms ease-out 的 transform transition。键盘焦点为 2px `accent` outline、4px offset。禁用保持布局，透明度为 .45。

### Icon Buttons

标准图标按钮有细边框，flat 变体无可见常态边框与背景。桌面尺寸 40px，输入内部工具为 34px；760px 及以下两者均为 44px。复制、粘贴、清空、主题等工具保持 SVG 图标、`aria-label` 与原生 `title`。

### Inputs / Fields

源链接字段包含等宽 textarea 和右侧工具列。外壳使用较强 1px 边界和工具圆角，无阴影，内距为 20px 12px 16px 20px。focus-within 使用 2px `accent` outline、2px offset；无效状态边界改为 `error`，并有文字状态反馈。空输入的验证文字隐藏但保留行高，不新增常驻说明。

### Navigation

模式导航是两项文字加 SVG 的分段 tabs。外框为工具圆角、1px 边界和 4px 内距，单项控件圆角、常态最小高度 40px、0/14px 内距。选中项采用 `subtle` 填充、`ink` 文字与字重 600，不再使用底部选中线。保留 tablist / tab 语义、箭头、Home 和 End 键；最近记录不是第三个 tab。

### Chips

状态标签使用小圆角、`success-soft` 表面与 `success` 文字，内距 3px/8px、图标间距 4px。它表达有效/已生成结果，不作为可点击筛选器。历史折叠区计数为中性标签，不借用成功色。

### Cards / Containers

结果容器使用工具圆角与细边界，无阴影。生成后资源摘要、深色技术输出及下载操作构成一个连续工具；摘要桌面内距 18px/20px，操作区为 14px/20px、向末端对齐。未生成时不显示结果区，不保留大块等待面板。代码区保留可选择文字和复制图标，原始资源入口收纳在详情折叠区。

### Disclosures / List Rows

资源详情和最近记录使用原生 `details` / `summary`，默认关闭。summary 最小高度 56px，图标间距 10px，末端 chevron 在展开时旋转 90deg，采用 160ms ease-out；hover 改变文字而不添加阴影。内容底内距 24px，历史行内距 18px/0，细线、资源名、等宽来源和图标工具支持扫描。没有示例列表。

### Theme Reveal

深色切入以点击中心圆形揭示新表面，浅色切回收缩旧深色表面，时长 520ms、ease-out。键盘触发使用主题按钮中心。支持 View Transition 时使用快照圆形 clip-path，否则使用 Web Animations 圆形遮罩；均不要求外部运行库。

切换期间暂停其他 transition。`prefers-reduced-motion` 或页面隐藏时立即切换，不运行圆形揭示；不支持动画的环境也直接切换。连续点击按最新意图串行完成。

### Notice

底部居中通知使用工具圆角、较强边界和通知阴影，内距 12px/18px，最大宽度为视口减 32px，并考虑底部 safe-area。它复用页面主题，不额外建立颜色体系；恢复记录操作使用珊瑚色文字命令。

## Do's and Don'ts

### Do:

- **Do** 保持珊瑚主命令/交互与 mint/绿色有效状态的职责区分。
- **Do** 以阶梯表面色、细边界、紧凑圆角和精简内容体现高级质感，不添加工具阴影。
- **Do** 保留零字距、固定 UI 字号、等宽技术内容和长文本换行。
- **Do** 在深浅主题中复用语义变量，并保留代码区的深色可读性。
- **Do** 保留移动端主要命令、44px 控件及键盘可见焦点。
- **Do** 保留 520ms ease-out 主题揭示，同时尊重 reduced-motion 与直接切换路径。
- **Do** 用原生折叠区按需展示详情和历史，保留其键盘焦点与状态语义。

### Don't:

- **Don't** 复制 Raycast 品牌或营销结构，也不增加营销 hero 与无关内容。
- **Don't** 用绿色状态、徽章或辅助文字暗示未经测量的服务健康或性能。
- **Don't** 将折叠信息、分区和行列表装进嵌套卡片。
- **Don't** 用装饰性大阴影、渐变光斑或扩大圆角替代现有信息层级。
- **Don't** 用字符图标、远程图标字体或无法选择的图像替代实际 SVG 操作与命令文字。
- **Don't** 把 sidecar 合成 tonal ramps 当作已应用 tokens，或恢复已移除的示例、第三个 tab 和等待结果面板。
