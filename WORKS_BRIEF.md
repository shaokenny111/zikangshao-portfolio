# Portfolio 作品集大改 — 完整文案与执行规范

这是一份完整的项目改造文档。请你按文档逐条录入，不要改写文案，不要省略任何 i18n key。如有歧义，先问我再动手。

---

## 0. 任务范围

1. 重写 `projects.html`
2. 同步修改 `index.html` 的 Selected Works 区
3. 新建 `/projects/` 文件夹与 6 个独立子页
4. 创建 `/reports/` 与 `/images/` 资源目录
5. 删除旧 Modal 弹窗逻辑与旧 i18n key
6. 全部沿用现有 Tailwind 风格与 i18n 体系，不引入新 CSS

---

## 1. i18n key 命名规则

```
projects.*    → 卡片层文案（首页 Selected Works + projects.html 共用）
cs.*          → 独立子页文案（case study 详情页）
```

---

## 2. projects.html 主页文案

主标题只有 H1，无副标题，无 section 描述文字。

| key | EN | ZH |
|---|---|---|
| projects.title | Projects | 作品集 |
| projects.products.heading | Products | 产品 |
| projects.research.heading | Research | 研究 |

布局：
- H1 "Projects" 顶部
- Section A "Products"：3 张卡（Copilot / Agent / ML）
- Section B "Research"：3 张卡（Guoyuan / Take-Two / Robotics）
- 桌面端 md:grid-cols-3，移动端 grid-cols-1

---

## 3. 6 张卡片文案

### Card 1 · AI Job Search Copilot

| key | EN | ZH |
|---|---|---|
| projects.copilot.title | AI Job Search Copilot | AI 求职助手 |
| projects.copilot.tagline | LLM-based assistant that scores resume-JD match in real time. | 基于 LLM 的求职助手，实时计算简历与岗位匹配度。 |
| projects.copilot.tag1 | LLM | LLM |
| projects.copilot.tag2 | Prompt Engineering | Prompt Engineering |
| projects.copilot.tag3 | Web App | Web App |
| projects.copilot.badge | 2026 | 2026 |

Link: `/projects/ai-job-search-copilot.html`

### Card 2 · AI Investment Research Agent

| key | EN | ZH |
|---|---|---|
| projects.agent.title | AI Investment Research Agent | AI 投研 Agent |
| projects.agent.tagline | Precision aggregation engine for investment research workflows. | 面向投研流程的精准信息聚合 Agent。 |
| projects.agent.tag1 | Coze | Coze |
| projects.agent.tag2 | DeepSeek | DeepSeek |
| projects.agent.tag3 | RAG | RAG |
| projects.agent.badge | 2026 | 2026 |

Link: `/projects/ai-investment-research-agent.html`

### Card 3 · ML-Driven Backtesting in R

| key | EN | ZH |
|---|---|---|
| projects.ml.title | ML-Driven Backtesting in R | 机器学习驱动的投资回测（R） |
| projects.ml.tagline | End-to-end pipeline from financial-terminal data to backtested portfolio. | 从金融终端数据到组合回测的端到端机器学习流程。 |
| projects.ml.tag1 | R | R |
| projects.ml.tag2 | Time Series | 时间序列 |
| projects.ml.tag3 | Backtesting | 回测 |
| projects.ml.badge | Top 5% | Top 5% |

Link: `/projects/ml-backtesting-in-r.html`

### Card 4 · Guoyuan Auto Sector Research

| key | EN | ZH |
|---|---|---|
| projects.guoyuan.title | Guoyuan Auto Sector Research | 国元证券 · 汽车行业研究 |
| projects.guoyuan.tagline | Sell-side coverage of the automotive sector and its supply chain. | 汽车行业及供应链的卖方研究覆盖。 |
| projects.guoyuan.tag1 | Equity Research | 卖方研究 |
| projects.guoyuan.tag2 | Auto Sector | 汽车行业 |
| projects.guoyuan.badge | Sell-side | 卖方 |

Link: `/projects/guoyuan-auto-research.html`

### Card 5 · Take-Two Interactive Company Research

| key | EN | ZH |
|---|---|---|
| projects.taketwo.title | Take-Two Interactive Company Research | Take-Two Interactive 公司研究 |
| projects.taketwo.tagline | Independent equity research on Take-Two Interactive (NASDAQ: TTWO). | Take-Two Interactive (NASDAQ: TTWO) 独立公司研究。 |
| projects.taketwo.tag1 | Equity Research | 公司研究 |
| projects.taketwo.tag2 | Gaming | 游戏行业 |
| projects.taketwo.badge | 2025 | 2025 |

Link: `/projects/take-two-interactive-research.html`

### Card 6 · Robotics Industry Research

| key | EN | ZH |
|---|---|---|
| projects.robotics.title | Robotics Industry Research | 机器人行业研究 |
| projects.robotics.tagline | Industry deep-dive on the robotics sector — market structure, players, and outlook. | 机器人行业深度研究——市场结构、玩家与前景。 |
| projects.robotics.tag1 | Industry Research | 行业研究 |
| projects.robotics.tag2 | Robotics | 机器人 |
| projects.robotics.badge | 2025 | 2025 |

Link: `/projects/robotics-industry-research.html`

---

## 4. 首页 Selected Works 区调整

首页只显示 4 张卡片（不是 6 张）：
1. AI Job Search Copilot（复用 projects.copilot.*）
2. AI Investment Research Agent（复用 projects.agent.*）
3. ML-Driven Backtesting in R（复用 projects.ml.*）
4. Guoyuan Auto Sector Research（复用 projects.guoyuan.*）

删除：
- 原首页的 UBS M&A 卡片
- 原首页的 Muyuan Co. 卡片
- 所有 4 张原卡片的 Modal 弹窗 HTML + JS
- 所有相关 `modal.*` i18n key

保留：
- "View All →" 按钮，链接到 `/projects.html`

新行为：
- 卡片点击直接跳转到对应子页（不弹 Modal）

---

## 5. 卡片样式规范（首页与 projects.html 共用）

每张卡片结构（基于现有网站 Tailwind token）：
- 外框 `rounded-xl border border-border bg-card p-6`
- hover：`-translate-y-1 shadow-lg border-foreground/30`，`transition-all duration-300`
- 封面图 `aspect-[16/10] rounded-lg overflow-hidden mb-4`
- 图片 hover：`scale-105 transition-transform duration-500`
- 标签行 `text-xs text-muted-foreground`，标签之间用 `·` 分隔
- 标题 `text-lg font-semibold mb-2`
- Tagline `text-sm text-muted-foreground mb-4`
- 底部 badge：`text-xs px-2 py-1 rounded-full border border-border text-muted-foreground`
- 底部右侧 hover 出现 `View →`，`opacity-0 group-hover:opacity-100 transition-opacity`

整张卡片是一个 `<a>` 元素（不要嵌套按钮），用 `group` 类配合 hover 效果。

---

## 6. 独立子页通用文案

| key | EN | ZH |
|---|---|---|
| cs.back | Back to Projects | 返回作品集 |
| cs.section.about | About this project | 项目简介 |
| cs.section.highlights | Key highlights | 亮点 |
| cs.section.preview | Preview | 预览 |
| cs.nav.prev | Previous | 上一个 |
| cs.nav.next | Next | 下一个 |

---

## 7. 子页统一模板结构

每个子页结构（所有 6 个子页统一）：

1. 复用 index.html 的 nav 和 footer（直接复制粘贴或 include）
2. 主内容区 `<main class="max-w-3xl mx-auto px-6 py-16">`
3. 顶部：`← Back to Projects` 链接（i18n: cs.back）
4. Hero block：
   - 年份 + 标签行（用 · 分隔）
   - H1 标题
   - Tagline
5. Cover image（`<img class="w-full rounded-xl">`）
6. Primary CTA 按钮（不同项目不同，见每个子页规范）
7. About section（H2 + 一段 paragraph）
8. Key highlights section（H2 + ul，4 条 li）
9. Preview section（H2 + 嵌入内容：iframe / PDF.js / 图片轮播）
10. 底部 prev / next 导航（border-t 分隔，左右两侧）

---

## 8. 6 个子页详情文案

### 子页 1 · AI Job Search Copilot
文件：`/projects/ai-job-search-copilot.html`
命名空间：`cs.copilot.*`

| key | EN | ZH |
|---|---|---|
| cs.copilot.title | AI Job Search Copilot | AI 求职助手 |
| cs.copilot.tagline | An LLM-based assistant that scores resume-JD match in real time and suggests improvements. | 基于 LLM 的求职助手——实时计算简历与岗位匹配度，并给出针对性修改建议。 |
| cs.copilot.year | 2026 | 2026 |
| cs.copilot.tag1 | LLM | LLM |
| cs.copilot.tag2 | Prompt Engineering | Prompt Engineering |
| cs.copilot.tag3 | Web App | Web App |
| cs.copilot.cta | Try Live Demo | 立即体验 |
| cs.copilot.about | A copilot for job seekers navigating fragmented job descriptions and uncertain resume fit. The user pastes a JD and a resume; the system returns a match score, a breakdown of strengths and gaps, and concrete suggestions for tailoring the resume. Built end-to-end as a solo project, from prompt design to deployment. | 一款帮助求职者应对碎片化 JD 与简历适配难题的 Copilot。用户粘贴 JD 与简历，系统返回匹配评分、优劣势拆解，以及具体的修改建议。从 Prompt 设计到上线部署，独立完成。 |
| cs.copilot.h1 | Real-time resume-JD matching using LLM-based reasoning | 基于 LLM 推理的实时简历-岗位匹配 |
| cs.copilot.h2 | Structured output: match score, strengths, gaps, suggested edits | 结构化输出：匹配评分、优势、不足、修改建议 |
| cs.copilot.h3 | Built with prompt engineering and lightweight web stack | Prompt 工程 + 轻量 Web 技术栈 |
| cs.copilot.h4 | Deployed publicly on Cloudflare Pages | 部署于 Cloudflare Pages，已公开上线 |

Primary CTA URL: `https://ai-career-copilot.pages.dev/`
Preview type: iframe 嵌入 demo URL，aspect-[16/10]，含 sandbox 属性
Cover image: `/images/work-copilot.png`

### 子页 2 · AI Investment Research Agent
文件：`/projects/ai-investment-research-agent.html`
命名空间：`cs.agent.*`

| key | EN | ZH |
|---|---|---|
| cs.agent.title | AI Investment Research Agent | AI 投研 Agent |
| cs.agent.tagline | A precision aggregation engine that turns fragmented investment research workflows into one structured output. | 面向投研流程的精准信息聚合引擎——把散落的多源工作流整合为结构化输出。 |
| cs.agent.year | 2026 | 2026 |
| cs.agent.tag1 | Coze | Coze |
| cs.agent.tag2 | DeepSeek | DeepSeek |
| cs.agent.tag3 | RAG | RAG |
| cs.agent.cta | Try Demo | 立即体验 |
| cs.agent.about | An internal research aggregation engine built on Coze and DeepSeek. The workflow combines knowledge-base retrieval with live web search to address the fragmentation problem in early-stage investment research — where analysts spend disproportionate time gathering and reconciling sources before any analysis begins. | 基于 Coze 与 DeepSeek 搭建的内部研究聚合引擎。工作流结合知识库检索与实时网页搜索，解决投研早期"信息散落多源、收集整理耗时远大于分析本身"的核心痛点。 |
| cs.agent.h1 | Agent workflow: intelligent search → multi-source aggregation → refined output | Agent 工作流：智能检索 → 多源聚合 → 精炼输出 |
| cs.agent.h2 | Combines internal knowledge-base retrieval with live web search | 内部知识库检索 + 实时 Web Search 双轨 |
| cs.agent.h3 | Built on Coze platform with DeepSeek as the reasoning model | Coze 平台搭建，DeepSeek 作为推理模型 |
| cs.agent.h4 | Targets ~50% efficiency lift on internal search, ~60% on external aggregation | 目标：内部检索效率提升约 50%，外部聚合效率提升约 60% |

Primary CTA URL: `https://code.coze.cn/web-sdk/7629357356765167662`
Preview type: iframe 嵌入 Coze 分享链接，aspect-[16/10]，含 sandbox 属性
Cover image: `/images/work-agent.png`

### 子页 3 · ML-Driven Backtesting in R
文件：`/projects/ml-backtesting-in-r.html`
命名空间：`cs.ml.*`

| key | EN | ZH |
|---|---|---|
| cs.ml.title | ML-Driven Backtesting in R | 机器学习驱动的投资回测（R） |
| cs.ml.tagline | An end-to-end pipeline from financial-terminal data to a backtested portfolio strategy. | 从金融终端数据到组合回测的端到端机器学习流程。 |
| cs.ml.year | 2024 | 2024 |
| cs.ml.tag1 | R | R |
| cs.ml.tag2 | Time Series | 时间序列 |
| cs.ml.tag3 | Backtesting | 回测 |
| cs.ml.cta | Read Full Report | 阅读完整报告 |
| cs.ml.about | Independent final project for the Machine Learning course in the MSc Finance program at emlyon. From raw financial-terminal data to a backtested portfolio, the project covers data cleansing, exploratory analysis, regression and time-series modeling, simulated investment decisions, and a full performance report. Ranked top 5% of the class. | emlyon 金融硕士机器学习课程的独立期末项目。从金融终端原始数据出发，经过数据清洗、探索性分析、回归与时间序列建模、模拟投资决策，最终形成组合回测报告。项目排名班级前 5%。 |
| cs.ml.h1 | End-to-end pipeline: ingestion → cleansing → EDA → modeling → backtesting | 端到端流程：数据导入 → 清洗 → EDA → 建模 → 回测 |
| cs.ml.h2 | Applied regression and time-series methods to validate investment strategies | 应用回归与时间序列方法验证投资策略 |
| cs.ml.h3 | Independently executed from data preparation through reporting | 从数据准备到报告独立完成 |
| cs.ml.h4 | Course final ranked top 5%; overall course grade top 10% | 期末项目班级前 5%；课程总成绩前 10% |

Primary CTA: 锚点跳到下方 PDF viewer (`#preview`)
Preview type: PDF.js viewer，路径 `/reports/ml-backtesting.pdf`
Cover image: `/images/work-ml.png`

### 子页 4 · Guoyuan Auto Sector Research
文件：`/projects/guoyuan-auto-research.html`
命名空间：`cs.guoyuan.*`

| key | EN | ZH |
|---|---|---|
| cs.guoyuan.title | Guoyuan Auto Sector Research | 国元证券 · 汽车行业研究 |
| cs.guoyuan.tagline | Sell-side coverage of the automotive sector and its supply chain at Guoyuan Securities. | 国元证券实习期间，汽车行业及供应链的卖方研究覆盖。 |
| cs.guoyuan.year | 2024 | 2024 |
| cs.guoyuan.tag1 | Equity Research | 卖方研究 |
| cs.guoyuan.tag2 | Auto Sector | 汽车行业 |
| cs.guoyuan.cta | View Sample Pages | 查看样张 |
| cs.guoyuan.about | Contributed to 5 in-depth research reports on the automotive sector and its supply chain during the analyst role at Guoyuan Securities. Work covered industry trends, business-model deconstruction, competitive landscape analysis, and company fundamentals — supporting investment narratives across the coverage universe. | 在国元证券汽车组实习期间，参与 5 份汽车行业及供应链研究报告，涵盖行业趋势分析、商业模式拆解、竞争格局评估、公司基本面研究——为覆盖范围内的投资判断提供支撑。 |
| cs.guoyuan.h1 | Contributed to 5 sector and company research reports | 参与 5 份行业与公司研究报告 |
| cs.guoyuan.h2 | Industry trend analysis and supply-chain mapping | 行业趋势分析与供应链梳理 |
| cs.guoyuan.h3 | Financial analysis: revenue, margin, cash-flow drivers | 财务分析：收入、毛利、现金流驱动因子 |
| cs.guoyuan.h4 | Industry database setup and ongoing maintenance | 建立并维护行业数据库 |

Primary CTA: 锚点跳到下方图片轮播 (`#preview`)
Preview type: 图片轮播，路径 `/reports/guoyuan/01.png` ~ `05.png`
Cover image: `/images/work-guoyuan.png`

### 子页 5 · Take-Two Interactive Company Research
文件：`/projects/take-two-interactive-research.html`
命名空间：`cs.taketwo.*`

| key | EN | ZH |
|---|---|---|
| cs.taketwo.title | Take-Two Interactive Company Research | Take-Two Interactive 公司研究 |
| cs.taketwo.tagline | Independent equity research on Take-Two Interactive (NASDAQ: TTWO). | Take-Two Interactive (NASDAQ: TTWO) 独立公司研究。 |
| cs.taketwo.year | 2025 | 2025 |
| cs.taketwo.tag1 | Equity Research | 公司研究 |
| cs.taketwo.tag2 | Gaming Sector | 游戏行业 |
| cs.taketwo.cta | View Sample Pages | 查看样张 |
| cs.taketwo.about | An independent company research project on Take-Two Interactive, covering business segments, key franchises (Grand Theft Auto, NBA 2K, Red Dead Redemption), financial performance, and competitive positioning within the global gaming industry. | Take-Two Interactive 独立公司研究项目，涵盖业务板块、核心 IP（GTA、NBA 2K、Red Dead Redemption）、财务表现，以及在全球游戏行业中的竞争定位。 |
| cs.taketwo.h1 | Company overview: business segments and revenue mix | 公司概览：业务板块与收入结构 |
| cs.taketwo.h2 | Franchise analysis: GTA, NBA 2K, Red Dead Redemption | 核心 IP 分析：GTA、NBA 2K、Red Dead Redemption |
| cs.taketwo.h3 | Financial deep-dive: revenue drivers and margin structure | 财务深度分析：收入驱动与利润结构 |
| cs.taketwo.h4 | Competitive positioning within the gaming sector | 游戏行业内的竞争定位 |

Primary CTA: 锚点跳到下方图片轮播 (`#preview`)
Preview type: 图片轮播，路径 `/reports/take-two/01.png` ~ `05.png`
Cover image: `/images/work-taketwo.png`

### 子页 6 · Robotics Industry Research
文件：`/projects/robotics-industry-research.html`
命名空间：`cs.robotics.*`

| key | EN | ZH |
|---|---|---|
| cs.robotics.title | Robotics Industry Research | 机器人行业研究 |
| cs.robotics.tagline | Industry deep-dive on the robotics sector — market structure, players, and outlook. | 机器人行业深度研究——市场结构、玩家与前景。 |
| cs.robotics.year | 2025 | 2025 |
| cs.robotics.tag1 | Industry Research | 行业研究 |
| cs.robotics.tag2 | Robotics | 机器人 |
| cs.robotics.cta | View Sample Pages | 查看样张 |
| cs.robotics.about | An independent industry research project on the global robotics sector. Covers market structure across industrial, service, and humanoid segments; key players and competitive dynamics; technology trends; and forward-looking outlook on growth drivers. | 全球机器人行业独立研究项目，覆盖工业、服务、人形三大细分赛道的市场结构；关键玩家与竞争格局；技术趋势；以及对增长驱动因子的前瞻判断。 |
| cs.robotics.h1 | Market segmentation: industrial, service, humanoid robotics | 市场细分：工业、服务、人形机器人 |
| cs.robotics.h2 | Competitive landscape and key players mapping | 竞争格局与关键玩家梳理 |
| cs.robotics.h3 | Technology trend analysis: AI integration, sensors, actuators | 技术趋势分析：AI 融合、传感器、执行器 |
| cs.robotics.h4 | Forward-looking outlook on growth drivers and risks | 增长驱动与风险的前瞻判断 |

Primary CTA: 锚点跳到下方图片轮播 (`#preview`)
Preview type: 图片轮播，路径 `/reports/robotics/01.png` ~ `05.png`
Cover image: `/images/work-robotics.png`

---

## 9. 子页 prev / next 循环顺序

```
ai-job-search-copilot         prev: robotics-industry-research        next: ai-investment-research-agent
ai-investment-research-agent  prev: ai-job-search-copilot             next: ml-backtesting-in-r
ml-backtesting-in-r           prev: ai-investment-research-agent      next: guoyuan-auto-research
guoyuan-auto-research         prev: ml-backtesting-in-r               next: take-two-interactive-research
take-two-interactive-research prev: guoyuan-auto-research             next: robotics-industry-research
robotics-industry-research    prev: take-two-interactive-research     next: ai-job-search-copilot
```

---

## 10. 三种 Preview 组件实现

### 10.1 iframe demo embed（Copilot / Agent）

```html
<div class="aspect-[16/10] rounded-xl overflow-hidden border border-border">
  <iframe src="[DEMO_URL]"
          class="w-full h-full"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms">
  </iframe>
</div>
```

### 10.2 PDF.js viewer（ML）

通过 CDN 引入 pdfjs 4.x：
- worker: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs`
- main: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs`

要求：
- canvas 渲染
- prev / next 翻页按钮 + 页码显示
- `oncontextmenu="return false"` 禁右键
- `user-select: none` 禁文本选择
- 容器 `rounded-xl border border-border overflow-hidden bg-card`

### 10.3 图片轮播（3 份研报）

要求：
- 通过 `data-images='[...]'` 属性传入图片数组
- prev / next 按钮 + `n / N` 指示
- `oncontextmenu="return false"` 禁右键
- `draggable="false"` 禁拖拽
- 右下角半透明水印 "© Zikang Shao — Research Sample"
- `user-select: none`
- 容器 `rounded-xl border border-border overflow-hidden bg-card`，图片区 `aspect-[16/10] object-contain`

---

## 11. 资源目录与占位

新建目录：
```
/projects/      （6 个子页放这里）
/images/        （作品封面图）
/reports/       （PDF + 截图）
  ml-backtesting.pdf            （我后续上传）
  guoyuan/01.png ~ 05.png       （我后续上传）
  take-two/01.png ~ 05.png      （我后续上传）
  robotics/01.png ~ 05.png      （我后续上传）
```

封面图 `/images/work-*.png` 暂时用 SVG 占位：
- 1200 × 750 深灰底（#0A0A0A 或匹配现有 bg-card token）
- 中心放项目英文标题（白色 64px 字体）
- 我后续替换为 Figma 真图

---

## 12. 要删除的旧内容

index.html 中删除：
- UBS M&A 卡片 + 对应 Modal
- Muyuan Co. 卡片 + 对应 Modal
- 原 4 张卡片的所有 Modal 弹窗 HTML 与 JS
- 所有 status badge（Live / Prototype / In Progress）相关样式

i18n 文件中删除：
- `modal.ubs.*` 全部
- `modal.muyuan.*` 全部
- 所有 `status.*` 状态类 key

---

## 13. 技术约束

1. 全部用 Tailwind utility class，不写新 CSS 文件
2. 不引入新依赖（除了 PDF.js CDN）
3. iframe 用 `sandbox` 属性 + `loading="lazy"`
4. 所有外链 `target="_blank"` + `rel="noopener"`
5. 移动端 `grid-cols-1` 单列堆叠；桌面端 `md:grid-cols-3` 三列
6. 子页主内容区 `max-w-3xl mx-auto`（适合阅读）
7. 防下载：`oncontextmenu="return false"` + `user-select: none`
8. 子页要复用 index.html 的 nav 和 footer（直接复制结构 + 共用 i18n key）

---

## 14. 执行步骤

1. 改 index.html（删除旧 cards/modals，新建 4 张卡片）
2. 改 i18n 文件（添加新 key、删除旧 key）
3. 完全重写 projects.html
4. 创建 `/projects/` 文件夹与 6 个子页
5. 创建 `/images/` 和 `/reports/` 占位文件夹
6. 提交：
```
   git add -A
   git commit -m "feat(works): rebuild projects with 6 case study pages, demo embeds, and PDF viewer"
   git push
```
7. 进度 2 行总结，列出新建文件与修改文件，不要解释设计意图

---

## 15. 遇到歧义时的处理

如果在执行过程中遇到以下情况，停下来问我，不要擅自决定：
- 现有 Tailwind token / color palette 不明确
- 现有 i18n.js 是否支持嵌套 key
- 现有 nav / footer 结构无法直接复用
- 任何文案的中英对应关系存疑