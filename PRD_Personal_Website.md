# PRD · 个人作品集网站

**项目名称**：Zikang Shao — Personal Portfolio Website
**版本**：v1.0
**最后更新**：2026-05-03
**用途**：作为 Google Stitch（UI 设计稿）+ Claude Code（前端实现）的统一规格输入

---

## 0. 文档使用说明

本 PRD 一份文档对应两件事：

1. **设计阶段** → 将本文档（或第 10.1 节的 prompt）输入 **Google Stitch**，生成 desktop + mobile 高保真稿。
2. **实现阶段** → 将本文档（或第 10.2 节的 prompt）输入 **Claude Code**，生成可部署的代码仓库。

设计与实现都必须遵守第 3 节《设计系统》和第 5 节《页面规格》的硬性要求。第 6 节《内容》是已经从简历提炼好的最终文案，**不要再次改写**——直接使用。

---

## 1. 项目背景与目标

### 1.1 背景
邵子康（Zikang Shao）拥有金融硕士背景（emlyon business school MSc Finance, 2025）+ 实操 AI 产品构建经验，目前在海晟融资租赁担任项目经理助理，同时在做一个内部 AI 投研工具。需要一个个人网站作为**求职门面**与**专业品牌载体**。

### 1.2 项目目标（按优先级）

| 优先级 | 目标 | 衡量方式 |
|---|---|---|
| P0 | 招聘者 5 秒内理解：他是谁、能解决什么问题 | Hero 区清晰度 |
| P1 | 展示项目深度（不只是堆经历） | Project 区是否讲得出 Why / What / Impact |
| P2 | 建立专业品牌印象："Finance × AI Product" | 全站调性一致 |
| P3 | 留下联系入口 | Contact CTA 可达 |

### 1.3 目标受众
- **主要**：金融服务、Fintech、AI 产品方向的招聘者 / hiring manager
- **次要**：未来合作者、客户、同行
- **设备分布预估**：桌面 65% / 移动 35%

### 1.4 非目标（明确不做）
- 不做博客（v1）
- 不做暗色模式（v1）
- 不做花哨动画 / 视差滚动
- 不做多语言切换（默认英文，因为简历就是英文）

---

## 2. 设计参考与风格基调

### 2.1 参考一：落地页风格（用户上传图片）

观察到的视觉特征（直接来自图片）：

- **顶部**：一条极细的水平浅灰分隔线
- **标题**："Freelance Portfolio" 大号 serif，加粗，深近黑
- **Hero H1**：极大字号 serif（约 50–56px），换行使用破折号 `—`
- **段落**：同一 serif 字体，行距宽松；关键短语 inline bold 强调（"businesses and creators"、"optimize communication"…）
- **CTA 按钮**：白底 / 浅灰 1px 描边 / 圆角小（≈4px）/ 深色 serif 文字
- **Blockquote**：italic serif + 左侧一条粗黑竖线
- **右侧人像**：方裁切肖像，无阴影、无装饰
- **整体**：纯白背景、左对齐、文档化、克制

### 2.2 参考二：整体页面风格（Maya Zhang Notion 页面）

`*.notion.site` 公开页面的典型设计语言（我们要继承的部分）：

- 单列、最大宽度约 720–780px 的**文档式**滚动结构
- 章节用 H2 + 一条细分割线区隔
- 左对齐、几乎无栅格
- 列表 / Toggle / Callout 是主要结构件
- 几乎无饱和色，无装饰图形
- 链接低调下划线
- 页面感觉像"会动的简历"

### 2.3 综合风格定位

> **"Editorial Serif × Notion Document"** — 像一份精心排版的杂志专栏，又像一份会跟随你滚动的 Notion 简历。

风格关键词：Editorial / Quiet Luxury / Document-like / Confident Minimalism

⚠️ **一致性硬要求**：Hero 区（来自图片）和后续章节（Notion 风格）必须**视觉无缝**。具体落实方式是：**全站使用同一套 Design Tokens**（字体、配色、间距、分割线），Hero 只是该系统下的一个"放大版"区块，而不是另一种风格。

---

## 3. 设计系统（Design System）

### 3.1 配色

| Token | Hex | 用途 |
|---|---|---|
| `--color-bg` | `#FBFAF7` | 页面背景（暖白，避免纯白刺眼） |
| `--color-bg-alt` | `#F4F2EC` | Callout / 区块替换背景 |
| `--color-ink` | `#1A1A1A` | 主要文字 |
| `--color-ink-soft` | `#5C5852` | 次要文字 / metadata |
| `--color-line` | `#E5E2DA` | 分割线 / 边框 |
| `--color-accent` | `#6B4F2C` | 链接 hover、引用条（深咖色，呼应西装人像） |
| `--color-accent-soft` | `#EFE8DC` | 标签底色 |

**对比度自检**：
- `#1A1A1A` on `#FBFAF7` → 16.4:1 ✅ AAA
- `#5C5852` on `#FBFAF7` → 6.7:1 ✅ AA Large

### 3.2 字体

| 角色 | 字体 | 来源 | Fallback |
|---|---|---|---|
| Display & Body Serif | **Newsreader** | Google Fonts | Source Serif 4, Lora, Georgia, serif |
| UI Sans（小字标签 / 导航） | **Inter** | Google Fonts | -apple-system, "SF Pro Text", system-ui |
| Mono（可选） | **JetBrains Mono** | Google Fonts | ui-monospace, Menlo |

> **为什么选 Newsreader**：免费、Lyon-like 的当代衬线、有完整字重、抗锯齿优秀，最接近图片中的字体观感。

### 3.3 字号刻度（基于 1.25 比例）

| Token | Desktop | Mobile | line-height | font-weight |
|---|---|---|---|---|
| `--fs-display` | 56px | 36px | 1.10 | 600 |
| `--fs-h1` | 44px | 30px | 1.15 | 600 |
| `--fs-h2` | 32px | 24px | 1.20 | 600 |
| `--fs-h3` | 22px | 19px | 1.30 | 600 |
| `--fs-body-lg` | 19px | 17px | 1.65 | 400 |
| `--fs-body` | 17px | 16px | 1.70 | 400 |
| `--fs-small` | 14px | 13px | 1.50 | 400 |
| `--fs-eyebrow` | 12px | 12px | 1.20 | 500（letter-spacing 0.12em，UPPERCASE） |

### 3.4 间距系统（基于 4px 网格）

`--space-1`=4 / `--space-2`=8 / `--space-3`=12 / `--space-4`=16 / `--space-6`=24 / `--space-8`=32 / `--space-12`=48 / `--space-16`=64 / `--space-24`=96 / `--space-32`=128

- 章节之间：96px (desktop) / 64px (mobile)
- 段落之间：24px
- 行内 inline-bold 不需要额外间距

### 3.5 容器与栅格

- 内容容器最大宽度 **760px**（除了 Hero）
- Hero 容器 **1080px**（容纳照片并排）
- 移动端两侧 padding：24px
- 桌面两侧 padding：32px

### 3.6 圆角、边框、阴影

- 圆角：统一 `4px`（按钮 `2px`、图片 `4px`、标签 `4px`）
- 边框：统一 `1px solid var(--color-line)`
- **不使用 box-shadow**——所有层级关系靠边框 + 间距实现

### 3.7 关键组件规格

**A. CTA Button（Primary）**
```
height: 44px
padding: 12px 20px
background: transparent
border: 1px solid var(--color-line)
font: Newsreader 16px / 500
color: var(--color-ink)
border-radius: 2px

hover:
  background: var(--color-bg-alt)
  border-color: var(--color-ink)
  transition: 150ms ease
```

**B. CTA Button（Secondary, 仅文字）**
- 无边框，文字下划线（`text-decoration-thickness: 1px`，`underline-offset: 4px`）
- 颜色 `--color-ink`，hover 变 `--color-accent`

**C. Blockquote**
```
border-left: 3px solid var(--color-ink)
padding-left: 20px
font: Newsreader italic, var(--fs-body-lg)
color: var(--color-ink-soft)
margin: 32px 0
```

**D. Section Divider**
```
height: 1px
background: var(--color-line)
margin: 96px 0  (mobile: 64px)
```

**E. Inline Bold Phrase**
- `font-weight: 600`、颜色不变（仍为 `--color-ink`）
- 用于段落中关键语义高亮

**F. Skill / Tag Pill**
```
padding: 4px 10px
background: var(--color-accent-soft)
color: var(--color-accent)
font: Inter 13px / 500
border-radius: 4px
```

**G. Project Card**
```
padding: 24px
border: 1px solid var(--color-line)
border-radius: 4px
background: var(--color-bg)
```
内部结构：H3 标题 → 时间元信息（small, ink-soft）→ 段落 → 标签 → "Read more →"

**H. Eyebrow Label（小字标签）**
```
font: Inter 12px / 500
text-transform: uppercase
letter-spacing: 0.12em
color: var(--color-ink-soft)
```

---

## 4. 信息架构

### 4.1 站点结构

**单页（single-page）滚动 + 锚点导航**。后续可选扩展项目深度子页。

```
/                       (Home, single page)
├─ #intro               Hero
├─ #about               About / Personal Summary
├─ #experience          Professional Experience
├─ #projects            Selected Projects
├─ #education           Education
├─ #skills              Toolbox
└─ #contact             Get in touch

/projects/ai-research-tool   (v1.1 可选：深度页)
/projects/ml-backtesting     (v1.1 可选)
```

### 4.2 Sticky Nav

- 桌面：左侧站点标识 "Zikang Shao"（serif 16px），右侧 5 个锚点链接 + "Resume" 下载按钮
- 滚动 200px 后：从透明 → 半透明白 (`rgba(251,250,247,0.85)` + `backdrop-filter: blur(8px)`) + 1px 底边
- 移动：折叠为汉堡菜单，点击展开为全屏 overlay

---

## 5. 页面规格（逐区块）

### 5.1 Hero / Intro `#intro`

> ⚠️ 这一区是与上传图片**视觉同源**的区块。除了内容替换为 Zikang 自己的，结构必须严格对齐图片。

#### 桌面布局（≥1024px）
```
┌────────────────────────────────────────────────────────┐
│  ─────────────────────────────────────────────────     │ 顶部细线
│                                                         │
│  PORTFOLIO · 2026                                       │ eyebrow
│                                                         │
│  ┌───────────────────────┐  ┌────────────────┐         │
│  │ Hi, I'm Zikang Shao   │  │                │         │
│  │ — Finance × AI        │  │   [Portrait]   │         │
│  │ Product Builder.      │  │   360 × 480    │         │
│  │                       │  │                │         │
│  │ I'm a finance         │  │                │         │
│  │ graduate from emlyon… │  │                │         │
│  │                       │  │                │         │
│  │ Today I work in       │  │                │         │
│  │ financial leasing…    │  │                │         │
│  │                       │  │                │         │
│  │ [Download CV]  Get    │  │                │         │
│  │                in     │  │                │         │
│  │              touch ↓  │  │                │         │
│  └───────────────────────┘  └────────────────┘         │
│                                                         │
│  ┃ "My mission is to translate financial complexity…"  │ blockquote
│                                                         │
└────────────────────────────────────────────────────────┘
```

- 容器最大宽度 1080px
- 两栏比例 60 / 40，gap 64px
- Hero 区上下 padding：80px

#### 移动布局（<1024px）
顺序变为单列：eyebrow → 头像（240×320）→ H1 → 两段正文 → CTA → blockquote

#### 内容（最终文案）

```
[eyebrow]
PORTFOLIO · 2026

[H1 / display]
Hi, I'm Zikang Shao —
Finance × AI Product Builder.

[Body paragraph 1 (body-lg)]
I'm a finance graduate from emlyon business school
(MSc Finance, 2025) who builds AI tools that make
investment research faster, sharper, and more honest.
I bridge **business problems** and **data-informed
solutions**.

[Body paragraph 2 (body-lg)]
Today I work in **financial leasing due diligence**
while shipping an internal **AI research engine** that
cuts cross-platform information retrieval time by ~50%.
I'm comfortable in ambiguity, and I turn fragmented
information into structured outcomes.

[CTA group, 16px gap]
[Primary] Download my CV (PDF)    [Secondary] Get in touch ↓

[Blockquote, italic]
"My mission is to translate financial complexity into
clarity — for investors, for teams, for the AI tools
they'll work alongside."
```

#### 头像规格
- 尺寸：360×480 (desktop) / 240×320 (mobile)
- 圆角：4px
- 无阴影、无边框、无滤镜
- 占位文件路径：`/public/portrait.jpg`
- alt：`"Portrait of Zikang Shao"`

---

### 5.2 About `#about`

#### 布局
```
[H2] About
[Lead paragraph, body-lg, ink-soft]

[4-item grid, 2 列 (desktop) / 1 列 (mobile)]
01 Dual Expertise — Finance × AI Product
   A finance graduate with hands-on…
02 Problem-Solver — Efficiency & Execution
03 Strong Analytical Foundation
04 Cross-Functional Driver in Ambiguity
```

每个 item 左侧大数字（serif 32px, ink-soft）+ 右侧标题（H3）+ 段落（body）。

#### 内容（来自简历 Personal Summary）

> **Lead**: A finance graduate with hands-on experience in investment analysis and a proven ability to build practical AI solutions. Effectively bridges business problems with data-informed, systematic approaches.

**01 — Dual Expertise: Finance & AI Product Development**
A finance graduate with hands-on experience in investment analysis and a proven ability to build practical AI solutions. I bridge business problems with data-informed, systematic approaches.

**02 — Problem-Solver Focused on Efficiency & Execution**
I identify inefficiencies in research and decision-making workflows and translate them into structured solutions — most recently designing an internal AI tool that streamlined multi-source data synthesis and boosted research productivity.

**03 — Strong Analytical Foundation in Finance & Data**
Solid grounding in due diligence, industry research, and financial modeling — used to translate fragmented information into actionable insights.

**04 — Cross-Functional Driver in Ambiguous Environments**
Comfortable with uncertainty. I drive execution across functions and turn incomplete or complex information into clear, results-oriented outcomes.

---

### 5.3 Experience `#experience`

#### 布局：垂直时间轴

```
[H2] Experience

08/2025 — Now      Project Manager Assistant
                   Haisheng Financial Leasing · Foshan, China
                   [总结段落]
                   · bullet 1
                   · bullet 2
                   · bullet 3

[─── 1px hairline, 48px vertical space ───]

07/2024 — 11/2024  Automotive Group Analyst
                   Guoyuan Securities Company Limited · Shanghai
                   …
```

桌面：左列 200px 显示日期（mono 或 small caps），右列内容；移动：日期堆在标题上方。

#### 内容

**1) Haisheng Financial Leasing — Project Manager Assistant**
*Foshan, China · 08/2025 – Present*

Led 10+ client due diligence engagements in financial leasing — running industry, business model, operational, and financial deep-dives via desk research and on-site visits. Identified cash flow volatility and asset quality risks; drafted DD reports that fed approval decisions and deal structuring.

- Reconstructed client financial profiles from fragmented data to unblock negotiations and structure transactions
- Cross-functional alignment with Compliance, Risk, Finance, and Asset Management to advance project workflows
- Tracked milestones and consolidated stakeholder updates to keep internal approvals on schedule

**2) Guoyuan Securities Company Limited — Automotive Group Analyst**
*Shanghai, China · 07/2024 – 11/2024*

Contributed to 5 in-depth industry and company research reports on the automotive sector and its supply chain. Analyzed industry trends, deconstructed business models, evaluated competitive landscape and company fundamentals to support investment conclusions.

- Performed full fundamental + valuation analysis: revenue / margin / cash flow drivers, peer comps, model refinement
- Built and maintained an industry database tracking policy, market dynamics, and competitor moves
- Summarized key analytical takeaways to lift the efficiency of subsequent team research

**3) HSBC — Financial Service Clerk**
*Foshan, China · 01/2023 – 06/2023*

Joined the fund NAV automation project: daily / monthly / quarterly NAV calculation, procedure verification, and reporting that supported the department's valuation and accounting tasks.

- Diagnosed failure points in automated workflows; co-redesigned process logic with Risk and IT, reducing operational error rates by ~20%
- Worked in a fully English environment with cross-region colleagues, organizing reports and market data
- Improved cross-team execution efficiency on financial reporting tasks

---

### 5.4 Projects `#projects`

#### 布局

**Featured Project**（占整行宽度，与其他卡片有视觉差异）：
- 标题区：H3 + tag row
- 内容区：左侧介绍段落（60%），右侧 3 个 metric 数字（40%）
- 底部：Tech stack pills + "Read full case study →"

**Other Projects**（2 列网格 desktop / 1 列 mobile）：
- 4 个标准 Project Card

#### 内容

**Featured: AI Product for Investment Research Efficiency**
*Personal product · 01/2026 – Now*

Identified high-value pain points in investment-research workflows — fragmented sources, slow compilation — and built a precision internal **information aggregation engine**. Designed the workflow as **search → multi-source aggregation → refined output** on top of Coze, integrating DeepSeek, knowledge-base retrieval, and a Web Search plugin. Output is structured, traceable, and contextual.

| Metric | Value |
|---|---|
| Internal knowledge search efficiency | **~50% improvement** |
| External data collection & integration efficiency | **~60% improvement** |
| Internal tool shipped | **1** |

Stack: `Coze` `DeepSeek` `RAG` `Web Search` `Prompt Engineering`

**[Read full case study →]** (链接到 `/projects/ai-research-tool`，v1.1 实现)

---

**Other Projects**（卡片 grid）：

**Machine Learning & Investment Backtesting with R**
*Course final, MSc Finance · 02/2024 – 05/2024 · Top 5% of class*

End-to-end pipeline in R: data ingestion from financial terminals, cleansing, EDA, regression and time-series modeling, simulated investment decisions, and portfolio backtesting. Independently delivered the full analytical cycle.

`R` `Time Series` `Regression` `Backtesting`

---

**UBS M&A Research**
*Course group project, Strategic Analysis · 10/2023 – 12/2023 · 2nd place*

Strategic analysis of a UBS M&A case — external environment, internal challenges, strategic objectives, implementation pathway. Coordinated team deliverables and integrated AI tools into research, lifting efficiency ~30% vs. peer projects.

`M&A` `Strategy` `AI-Assisted Research`

---

**Greater Bay Area Finance Challenge — Muyuan Co.**
*National campus finance challenge · 09/2021 – 12/2021 · University 2nd prize*

Equity research on Muyuan Co. using Porter's Five Forces and SWOT, with an independently built financial model. Owned research direction, content integration, and final presentation; advanced to next round.

`Equity Research` `Financial Modeling` `Strategy`

---

**Huangshang Rural Revitalization — Dengshan Village**
*College-led initiative · 09/2021 – 09/2022*

Funding mobilization, on-site research, and industrialization support for the local black-olive industry. Linked government, institutions, enterprises, and the university; supported the project's transition from research to execution.

`Stakeholder Engagement` `Field Research` `Industrialization`

---

### 5.5 Education `#education`

同 Experience 的时间轴样式。

**emlyon business school — MSc in Finance**
*Lyon, France · 09/2023 – 03/2025*
*2026 QS Finance Master Rank #26*

Strategy Analysis · Global Asset Allocation · Commodity Pricing · Negotiation Techniques

**Huashang College, Guangdong University of Finance & Economics — BA in Financial Engineering**
*Guangzhou, China · 09/2019 – 06/2023*

Financial Metrology · Economics · Financial Statement Analysis · Corporate Finance

---

### 5.6 Skills `#skills`

H2 "Toolbox"

3 个分组，每组以 horizontal pill tag 排布（自动换行）：

**Languages**
`Cantonese (native)` `Mandarin (native)` `English (fluent)`

**Certifications**
`CFA Level I (Passed)` `Securities Analyst Practitioner Qualification`

**Analytical Tools**
`Wind` `Bloomberg` `R` `Python` `SQL` `Microsoft Office` `Codex` `Claude Code`

---

### 5.7 Contact `#contact`

H2 "Get in touch"

桌面：两栏（左 60% 邀请文字 / 右 40% 联系列表）；移动：单列。

**Left**：
> I'm currently exploring roles at the intersection of **finance and AI product** — investment research, fintech product, AI tooling for analysts. If that sounds like a fit, I'd love to hear from you.

**Right**：
- Email · `847919752@QQ.com` (mailto link)
- Phone · `+86 191 2063 6983`
- Location · `Foshan, Guangdong, China`
- LinkedIn · `[添加你的链接]`
- GitHub · `[可选，添加链接]`

#### Footer
单行 small：

`© 2026 Zikang Shao · Built with Astro · Last updated [auto date]`

---

## 6. 内容索引（已在第 5 节内嵌，此处仅作清单）

- [x] Hero H1 / 两段正文 / blockquote
- [x] About lead + 4 个特点
- [x] 3 段 Experience（Haisheng / Guoyuan / HSBC）
- [x] 1 个 Featured Project（AI 产品）+ 4 个其他项目
- [x] 2 段 Education
- [x] Skills 3 组 pills
- [x] Contact 邀请语 + 4 项联系方式

---

## 7. 交互与动效

**总原则**：少即是多。Notion-portfolio 不该有花哨动效。

允许：
1. **Sticky Nav 出现**：滚动 200px 后 fade-in（200ms ease）
2. **Section fade-in**：进入视口时 `opacity 0 → 1`, `translateY 8px → 0`（400ms ease-out, IntersectionObserver, threshold 0.15）
3. **Link / Button hover**：颜色或背景变化（150ms ease）
4. **Image hover**（仅 project card）：极轻微 `scale(1.01)`（300ms）

禁止：
- 视差滚动（parallax）
- 大幅 hover 跳动
- 自动播放视频或音频
- 侵入式弹窗
- Loading splash

**降级**：当 `prefers-reduced-motion: reduce` 时，所有 fade-in 直接显示，所有 transition 设为 0。

---

## 8. 响应式断点

| 断点 | 宽度 | 关键变化 |
|---|---|---|
| Mobile | < 640px | 单列、nav 折叠、hero 头像在文字上方、字号降至 mobile column |
| Tablet | 640 – 1023px | 单列内容，保留 sticky nav，字号开始线性插值 |
| Desktop | 1024 – 1439px | Hero 双栏、project grid 双列 |
| Wide | ≥ 1440px | 容器锁定 max-width 1080，两侧空白增加 |

---

## 9. 技术规格

### 9.1 推荐技术栈
- **框架**：Astro 4.x（极简、零 JS by default、最适合内容网站）
- **样式**：Tailwind CSS 3.x + CSS Variables（用于 design tokens）
- **字体**：`@fontsource/newsreader` + `@fontsource/inter`（self-host，避免 Google Fonts CLS）
- **图标**：Lucide Icons（极简线性，Astro `astro-icon` 集成）
- **托管**：Vercel / Netlify / Cloudflare Pages
- **域名建议**：`zikangshao.com` / `shaozikang.com`

### 9.2 性能预算
- LCP ≤ 2.5s（4G / Moto G4 模拟）
- CLS ≤ 0.05
- INP ≤ 200ms
- 总 JS bundle ≤ 50KB（Astro 默认零运行时；只有 nav toggle 和 IO observer 用 JS）
- 图片：WebP / AVIF；肖像 ≤ 120KB

### 9.3 SEO
- `<title>`: `Zikang Shao — Finance × AI Product Builder`
- `<meta description>`: `MSc Finance from emlyon business school. I build AI tools for investment research and bridge business problems with data-informed solutions.`
- Open Graph 图：1200×630, 含姓名 + tagline + 一条 hairline 装饰
- Schema.org `Person` JSON-LD
- `sitemap.xml` + `robots.txt`
- 自定义 `og:image` 用 Astro 的 `@vercel/og` 或静态生成

### 9.4 可访问性（必须达到 WCAG AA）
- 颜色对比度 ≥ 4.5:1（正文）、3:1（大字号）
- 全键盘可导航（Tab order = 视觉顺序）
- 所有图片有 alt 文本
- `prefers-reduced-motion` 全局响应
- 语义化 HTML：`<header> <nav> <main> <section> <article> <footer>`
- Skip-to-content link

### 9.5 推荐文件结构
```
zikangshao-portfolio/
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects/[slug].astro      (v1.1)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── ExperienceItem.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── FeaturedProject.astro
│   │   ├── Education.astro
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── styles/
│   │   ├── tokens.css                 (CSS variables)
│   │   └── global.css
│   ├── content/
│   │   ├── config.ts                  (Astro content collections)
│   │   ├── experiences.json
│   │   └── projects.json
│   └── assets/
│       └── (无 — 图片在 public)
├── public/
│   ├── portrait.jpg                   (待替换)
│   ├── cv.pdf                         (待替换)
│   ├── og.png
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

---

## 10. 给 AI 工具的 Prompt（可直接复制）

### 10.1 Google Stitch — UI 设计稿生成 prompt（英文）

```
Design a personal portfolio website for Zikang Shao — a finance + AI
product builder seeking jobs in financial services / fintech / AI
product roles. Deliver one full desktop mockup (1440px wide) and one
full mobile mockup (375px wide).

DESIGN DIRECTION:
"Editorial Serif × Notion Document" — like a magazine column that
behaves like a Notion page. Minimalist, confident, document-feeling.
Lyon-Display vibe + warm white background + lots of breathing room.
No shadows, no gradients, no decorative graphics.

EXACT COLORS (use only these):
- Background  #FBFAF7  (warm off-white)
- Section alt #F4F2EC
- Ink         #1A1A1A
- Ink soft    #5C5852
- Line        #E5E2DA
- Accent      #6B4F2C  (used for hover states + the blockquote bar)
- Accent soft #EFE8DC  (skill pill background)

TYPOGRAPHY:
- Display & body: Newsreader (Google Fonts), 600 for headings, 400 for
  body. Body 17–19px. H1 display 56px desktop / 36px mobile.
- UI labels and small captions: Inter, 12–14px. UPPERCASE eyebrow
  labels with letter-spacing 0.12em.

LANDING / HERO (must match this layout exactly — it mirrors a reference
image the user provided):
- Top: a 1px horizontal hairline divider in #E5E2DA spanning the full
  container width.
- Just below: a small uppercase eyebrow label "PORTFOLIO · 2026" in
  Inter 12px, ink-soft, letter-spaced.
- Two-column hero, 60/40 split, max-width 1080px, gap 64px:
  - LEFT column:
      H1 (Newsreader 56px / 600 / line-height 1.1):
        "Hi, I'm Zikang Shao —
         Finance × AI Product Builder."
      (the em-dash break is visual, keep two visual lines)
      Body paragraph (Newsreader 19px / 400 / 1.65):
        "I'm a finance graduate from emlyon business school
        (MSc Finance, 2025) who builds AI tools that make investment
        research faster, sharper, and more honest. I bridge
        BUSINESS PROBLEMS and DATA-INFORMED SOLUTIONS."
        — phrases in CAPS above should be rendered as inline bold
        (font-weight 600), same color as the body.
      Second body paragraph:
        "Today I work in FINANCIAL LEASING DUE DILIGENCE while
        shipping an internal AI RESEARCH ENGINE that cuts
        cross-platform information retrieval time by ~50%. I'm
        comfortable in ambiguity, and I turn fragmented information
        into structured outcomes."
      Two CTAs side by side, 16px gap:
        - Primary button: "Download my CV (PDF)" — 44px tall,
          12px×20px padding, transparent background, 1px solid
          #E5E2DA border, 2px corner radius, Newsreader 16px / 500.
        - Secondary: "Get in touch ↓" — plain text with a thin
          underline, no border, same font.
  - RIGHT column:
      A 360×480 portrait photo, 4px corner radius, no shadow, no
      filter. Use a placeholder of a professional young Asian man in
      smart-casual or business attire.

  Below the two-column row (still inside the hero block), a blockquote:
    Left bar: 3px solid #1A1A1A
    Padding-left: 20px
    Style: Newsreader italic 19px, color #5C5852
    Text: "My mission is to translate financial complexity into
    clarity — for investors, for teams, for the AI tools they'll work
    alongside."

REMAINING SECTIONS (each separated from the previous by a 1px hairline
divider in #E5E2DA + 96px vertical space). Container max-width drops
to 760px for these sections (centered).

1. ABOUT
   H2 "About". A lead paragraph in body-lg ink-soft. Then a 2×2 grid
   on desktop (single column on mobile) of four points. Each point
   has a large serif number 01/02/03/04 (32px, ink-soft) on the left
   and a stack of "H3 title + body paragraph" on the right.
   Titles: "Dual Expertise — Finance × AI Product",
   "Problem-Solver Focused on Efficiency & Execution",
   "Strong Analytical Foundation in Finance & Data",
   "Cross-Functional Driver in Ambiguous Environments".

2. EXPERIENCE
   H2 "Experience". A vertical list of three entries. Each entry has
   a left column (200px wide, date in small caps Inter) and a right
   column (role H3 + company/location small ink-soft + summary
   paragraph + 3 bullet points using a "·" marker, not a dot).
   Entries (top→bottom, newest first):
   - 08/2025 – Now : Project Manager Assistant, Haisheng Financial
     Leasing, Foshan
   - 07/2024 – 11/2024 : Automotive Group Analyst, Guoyuan Securities,
     Shanghai
   - 01/2023 – 06/2023 : Financial Service Clerk, HSBC, Foshan
   Between entries: 48px vertical space (no divider line between them
   — only at section boundaries).

3. PROJECTS
   H2 "Selected Projects".
   First, a FEATURED PROJECT block, full container width, with 1px
   border #E5E2DA, 4px radius, 32px padding:
     Title H3 "AI Product for Investment Research Efficiency"
     Tagline ink-soft "Personal product · 01/2026 – Now"
     Body paragraph (left 60% on desktop) + a metrics block (right
     40%) showing three rows:
       "~50%" — Internal knowledge search efficiency
       "~60%" — External data collection efficiency
       "1"    — Internal tool shipped
     Below: pill tags "Coze" "DeepSeek" "RAG" "Web Search"
     "Prompt Engineering" — pills in #EFE8DC bg, #6B4F2C text, Inter
     13px, 4px×10px padding, 4px radius.
     Bottom-right link "Read full case study →".

   Then a 2-column grid (1 column on mobile) of FOUR smaller project
   cards, each with the same border + radius treatment:
   - "Machine Learning & Investment Backtesting with R" (02–05/2024,
     Top 5% of class). Tags: R, Time Series, Regression, Backtesting.
   - "UBS M&A Research" (10–12/2023, 2nd place). Tags: M&A, Strategy,
     AI-Assisted Research.
   - "Greater Bay Area Finance Challenge — Muyuan Co." (09–12/2021,
     University 2nd prize). Tags: Equity Research, Financial Modeling,
     Strategy.
   - "Huangshang Rural Revitalization — Dengshan Village" (09/2021 –
     09/2022). Tags: Stakeholder Engagement, Field Research,
     Industrialization.

4. EDUCATION
   H2 "Education". Same timeline pattern as Experience.
   - 09/2023 – 03/2025 : MSc in Finance, emlyon business school, Lyon
     France. Subline: "2026 QS Finance Master Rank #26". Then a
     single line of dot-separated courses.
   - 09/2019 – 06/2023 : BA in Financial Engineering, Huashang College
     of Guangdong University of Finance & Economics, Guangzhou. Then
     a line of courses.

5. TOOLBOX (Skills)
   H2 "Toolbox". Three labeled rows, each a horizontal flex of pills
   (wrapping). Labels in eyebrow style above each row:
   - LANGUAGES: Cantonese (native), Mandarin (native), English (fluent)
   - CERTIFICATIONS: CFA Level I (Passed), Securities Analyst
     Practitioner Qualification
   - ANALYTICAL TOOLS: Wind, Bloomberg, R, Python, SQL, Microsoft
     Office, Codex, Claude Code

6. GET IN TOUCH
   H2 "Get in touch". Two columns (1 on mobile):
   - Left (60%): one paragraph in body-lg saying he's exploring roles
     at the intersection of finance and AI product.
   - Right (40%): vertical stack of contact rows. Each row is a small
     uppercase eyebrow label on top and the value below in body
     (Email / Phone / Location / LinkedIn / GitHub).

7. FOOTER
   Single centered small line: "© 2026 Zikang Shao · Built with
   Astro · Last updated May 2026".

NAV (fixed top, full width):
- Left: "Zikang Shao" in Newsreader 16px / 500.
- Right: anchor links "About" "Experience" "Projects" "Education"
  "Contact" + a primary button "Resume" linking to /cv.pdf.
- Initially transparent over the hero. After scrolling 200px, gain a
  rgba(251,250,247,0.85) background with backdrop-blur(8px) and a 1px
  bottom border in #E5E2DA.
- On mobile: collapses to a hamburger that opens a full-screen
  overlay with the same links stacked.

OVERALL FEEL: a Notion public page (notion.site) — single column,
document-like scroll, generous whitespace. The page should feel like
a beautifully typeset CV that came alive.
```

### 10.2 Claude Code — 代码实现 prompt（英文）

```
Build a personal portfolio website for Zikang Shao using Astro 4 and
Tailwind CSS. The complete spec lives in PRD_Personal_Website.md
(this file is in the project root). Implement EVERY section per
Section 5 of the PRD using the content provided there VERBATIM —
do not paraphrase or invent copy.

SETUP
1. `npm create astro@latest zikangshao-portfolio -- --template minimal --typescript strict --tailwind --no-install --skip-houston`, then `cd zikangshao-portfolio && npm install`.
2. Add: `@fontsource/newsreader` `@fontsource/inter` `astro-icon`
   `@iconify-json/lucide` `@astrojs/sitemap`.
3. Configure tailwind.config.mjs to extend the theme with the design
   tokens (colors, font families, font sizes, spacing) from PRD §3.
4. Create src/styles/tokens.css with CSS variables matching PRD §3.1
   and §3.4. Import in BaseLayout.

IMPLEMENT (file structure per PRD §9.5)
5. BaseLayout.astro: <head> with title, meta description, OG, Twitter
   card, schema.org Person JSON-LD, favicon, font preloads.
6. Nav.astro: sticky, transparent → blurred white after 200px scroll
   (use IntersectionObserver on a sentinel div, NOT scroll listeners).
   Mobile: hamburger → full-screen overlay.
7. Hero.astro: must match PRD §5.1 EXACTLY. Two-column 60/40 grid on
   ≥1024, single column below. Eyebrow → H1 (with em-dash break) →
   two body paragraphs with <strong> wrapping the bolded phrases →
   CTA group (primary outlined + secondary underlined) → portrait
   img → blockquote with 3px left border. Portrait at
   /public/portrait.jpg with a placeholder + a clear comment showing
   how to swap.
8. About.astro: H2 + lead + 2×2 grid (1 col mobile) of four numbered
   points. Numbers in serif, ink-soft.
9. Experience.astro + ExperienceItem.astro: render from a typed
   content collection in src/content/experiences.json. Each item:
   { period, role, company, location, summary, bullets[] }.
10. Projects.astro + FeaturedProject.astro + ProjectCard.astro:
    Featured first (full width, with 3-row metric block), then a
    2-col grid of 4 cards. Data from src/content/projects.json with a
    boolean `featured` field.
11. Education.astro: same timeline as Experience but inline (only 2
    items).
12. Skills.astro: three labeled rows of pill tags.
13. Contact.astro: two-column invitation + contact list.
14. Footer.astro: single line with auto-updated date via
    `import.meta.env`.

DESIGN TOKENS (apply rigorously)
15. Colors, type scale, spacing, radii from PRD §3. NO box-shadow
    anywhere. All borders 1px var(--color-line). All radii 4px (2px
    on buttons).
16. Section dividers: 1px hairlines #E5E2DA between sections,
    96px vertical space (64 on mobile).
17. Inline bold phrases inside body paragraphs use <strong> with
    font-weight 600 — color does NOT change.

BEHAVIOR
18. IntersectionObserver-driven section fade-in (opacity 0 → 1,
    translateY 8px → 0, 400ms ease-out, threshold 0.15). Add a
    `prefers-reduced-motion: reduce` media query that disables
    transitions and shows everything immediately.
19. Anchor links: smooth scroll with `scroll-behavior: smooth` AND a
    JS fallback that respects reduced motion.
20. Mobile nav toggle: vanilla JS, ~20 lines, no framework.

CONTENT — populate from PRD §5 word-for-word:
- Hero copy (eyebrow, H1 with the em-dash, both paragraphs with the
  exact bolded phrases, both CTAs, blockquote)
- About lead + 4 points (titles + bodies)
- 3 Experience entries
- 1 Featured project + 4 other projects (titles, dates, summaries,
  metrics, tags)
- 2 Education entries
- 3 Skills rows
- Contact paragraph + 5 contact rows
- Footer line

FILES TO LEAVE AS PLACEHOLDERS (clearly commented):
- /public/portrait.jpg (replace with a real portrait)
- /public/cv.pdf (replace with the latest CV)
- /public/og.png (1200×630 OG image)

QUALITY GATES (must pass before considering done):
- Lighthouse: Performance ≥ 95, Accessibility ≥ 95, SEO 100
- No console errors in dev or prod build
- No CLS > 0.05 on hero (preload fonts, set image dimensions)
- Tab order matches visual order
- All images have alt text
- All links have :focus-visible styles
- Mobile (375px) has no horizontal scroll
- Hero matches the reference: thin top hairline, eyebrow label, big
  serif H1 with em-dash break, two body paragraphs with inline
  bolds, two CTAs, portrait on right (above text on mobile),
  blockquote with 3px left bar

DELIVERABLE: a working repo I can `npm install && npm run dev` and
view at localhost:4321 — fully styled, fully content-populated, zero
placeholder text outside of the portrait/CV/og files.

PROCESS:
- First, read PRD_Personal_Website.md end-to-end.
- Second, propose the full file tree and confirm the design tokens.
- Third, implement in this order: tokens → BaseLayout → Nav → Hero →
  About → Experience → Projects → Education → Skills → Contact →
  Footer → README.
- Fourth, run a Lighthouse check and report scores.

Add a README.md at the end with: prerequisites, install, dev, build,
how to swap portrait.jpg / cv.pdf, how to edit content collections,
and how to deploy to Vercel.
```

---

## 11. 验收 Checklist

设计稿验收（Stitch 输出）：

- [ ] Hero 区与上传图片的视觉骨架对齐（顶部细线 / 标签 / 大 serif H1 / 双段落带 inline bold / 双 CTA / 右侧人像 / 底部 blockquote）
- [ ] 全站使用同一套字体、配色、间距 token
- [ ] 桌面 + 移动两版交付
- [ ] 所有内容来自第 5 节，无 lorem ipsum

代码实现验收（Claude Code 输出）：

- [ ] `npm install && npm run dev` 可直接启动
- [ ] 7 个章节内容完整
- [ ] CV PDF 下载链接可用（即使 cv.pdf 是占位）
- [ ] 邮箱 mailto: 可点击
- [ ] Lighthouse Performance ≥ 95, A11y ≥ 95, SEO = 100
- [ ] 移动端无横向滚动
- [ ] `prefers-reduced-motion` 时动画全部禁用
- [ ] README 包含部署说明

---

## 12. 后续迭代

**v1.1**
- 项目深度子页（每个 Featured Project 一个 case study 页面：问题陈述 / 方案 / 过程图 / 结果数据）
- 集成 Plausible 或 Umami（隐私友好的访问统计）
- 中英双语切换

**v2**
- 轻量博客 / Notes（思考笔记）
- AI Project 的可交互 Demo（嵌入 iframe 或独立子域）
- 暗色模式（手动切换）

---

**文档结束。**
