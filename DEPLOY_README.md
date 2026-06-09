# 部署操作清单（按顺序做）

这次重写共生成 19 个文件。下面是把它们放到本地仓库 + 推上线的完整步骤。

## 一、文件总览

```
i18n.js                            ← 替换（改了一行，fetch 用绝对路径）
i18n.json                          ← 替换（加了 cs.viewer 和 cs.notes 两小节）
projects.html                      ← 替换（完整重写，6 张卡片 + 无 Modal）

projects/                          ← 新建文件夹（6 个子页）
  ai-job-search-copilot.html
  ai-investment-research-agent.html
  ml-backtesting-in-r.html
  guoyuan-auto-research.html
  take-two-interactive-research.html
  robotics-industry-research.html

images/                            ← 已存在，添加 6 张占位封面 SVG
  work-copilot.svg
  work-agent.svg
  work-ml.svg
  work-guoyuan.svg
  work-taketwo.svg
  work-robotics.svg

reports/                           ← 新建文件夹（你上传 PDF + 截图）
  README.md                        ← 上传说明
  guoyuan/.gitkeep                 ← 空文件夹占位
  take-two/.gitkeep
  robotics/.gitkeep
```

**index.html 不需要改动**——Claude Code 之前已经改好了，Selected Works 4 张卡片完美对接新结构。

---

## 二、本地操作（按顺序）

### Step 1 · 把所有文件放到本地仓库

把下载的 19 个文件按上面的目录结构，放到 `C:\Users\hp\Desktop\personal website\` 下：

- 根目录 3 个文件：`i18n.js`, `i18n.json`, `projects.html` → **覆盖原文件**
- 新建文件夹 `projects/`，把 6 个 .html 放进去
- `images/` 文件夹下放 6 个 .svg
- 新建文件夹 `reports/`，把 README.md + 3 个子文件夹（含 .gitkeep）放进去

### Step 2 · VS Code 终端验证一下

```bash
cd "C:\Users\hp\Desktop\personal website"
git status
```

应该看到：
- `modified: i18n.js`、`i18n.json`、`projects.html`
- `Untracked files: projects/`、`images/work-*.svg`、`reports/`

### Step 3 · （可选）本地预览验证

如果想先本地看看再 push，VS Code 装 Live Server 插件 → 右下角 "Go Live"：
- 打开 `http://127.0.0.1:5500/projects.html` 看 6 张卡片
- 点任一卡片 → 跳到子页 → 看到 hero / about / highlights / preview
- 注意：子页里 iframe 嵌入的 Coze demo 可能因为 CSP 拒绝在 iframe 加载——这是正常的，访客点 "Try Demo →" 大按钮就行

### Step 4 · 提交 & push

```bash
git add -A
git commit -m "feat(works): complete projects.html rewrite with 6 case study subpages"
git push
```

等 Cloudflare Workers 自动部署完毕（30 秒-2 分钟）。

### Step 5 · 线上验证

打开 `https://zikangshao.space/projects.html`，验证 7 件事：

1. **页面标题**显示 "Projects"（无副标题）
2. **两个 Section**：上方 Products（3 张卡片），下方 Research（3 张卡片）
3. **6 张卡片封面图**正常显示（深灰底 + 标题文字）
4. **点任一卡片**跳转到对应子页（URL 形如 `/projects/ai-job-search-copilot.html`）
5. **子页 hero**显示项目名、tagline、标签、年份
6. **子页 CTA 按钮**：
   - Copilot / Agent → "Try Demo →" 跳到外部 URL
   - 其他 4 个 → "View ↓" 滚到下方 Preview
7. **语言切换**：右上角 EN / 中 切换，文字全部同步

### Step 6 · ML 子页 PDF（最重要）

你说 ML Backtesting PDF 本地有 374 KB——把它命名为 `ml-backtesting.pdf` 放到 `reports/` 文件夹：

```
reports/
├── ml-backtesting.pdf       ← 你放这里
├── README.md
├── guoyuan/.gitkeep
├── take-two/.gitkeep
└── robotics/.gitkeep
```

然后再 push 一次。

```bash
git add reports/ml-backtesting.pdf
git commit -m "chore(reports): add ML backtesting PDF"
git push
```

打开 `https://zikangshao.space/projects/ml-backtesting-in-r.html`，往下滚到 Preview 区，应该看到 PDF.js viewer 正常渲染。

### Step 7 · 3 份研报截图（之后做）

按照之前讨论的截图作战手册：
- 每份研报截 4-5 张关键页（封面 / 目录 / 关键图表 / 结论页）
- 用 [tinypng.com](https://tinypng.com) 压到 < 500KB 每张
- 命名 `01.png` `02.png` `03.png` `04.png` `05.png`（必须两位数零填充）
- 分别放到 `reports/guoyuan/`、`reports/take-two/`、`reports/robotics/`

子页里的轮播会**自动发现** `01` ~ `12` 之间存在的图片（找到第一个缺失就停止）。所以你 4 张就放 4 张，5 张就放 5 张，不用改代码。

```bash
git add reports/
git commit -m "feat(reports): add research sample pages"
git push
```

---

## 三、Anatomy: 这次重写做了什么

### 关键修复

1. **i18n.js fetch 路径**：原 `./i18n.json` → `/i18n.json`（绝对路径），让子页能加载
2. **CV download 路径**：原 `./Zikang_Shao_CV_*.pdf` → `/Zikang_Shao_CV_*.pdf`（同上）

### projects.html 结构

- 顶部 nav 与 index.html 风格一致（含 "Selected Works" 高亮态）
- H1 "Projects"，无副标题，无 section 描述
- 2 个 section：Products（3 卡）+ Research（3 卡）
- 桌面 3 列网格，移动单列堆叠
- 卡片是 `<a>` 元素直接跳转子页，无 Modal、无 onclick
- 卡片样式完全复用 index.html 中 Selected Works 的 Tailwind class

### 子页统一结构

```
[nav]
[← Back to Projects]
[Hero: tags + H1 + tagline]
[Cover image (16:10)]
[Primary CTA button]
[About this project — H2 + paragraph]
[Key highlights — H2 + 4 bullets]
[Preview — H2 + viewer (iframe / PDF.js / carousel)]
[← Previous     Next →]
[footer]
```

### Preview 实现

- **iframe**（Copilot / Agent）：sandbox + lazy-load + 16:10 容器 + fallback 提示
- **PDF.js**（ML）：CDN 加载 pdfjs 4.0.379 + canvas 渲染 + prev/next 翻页 + 禁右键 + 禁选中
- **图片轮播**（3 份研报）：自动发现 `01` ~ `12` 序列 + prev/next + 禁右键 + 禁拖拽 + 半透明水印

### prev/next 循环顺序

```
Copilot → Agent → ML → Guoyuan → Take-Two → Robotics → (回到 Copilot)
```

### i18n 增量

只加了 2 个小节：
- `cs.viewer.page` = "Page" / "第"
- `cs.notes.iframeFallback` = iframe 加载失败提示文案

其他 key 已经齐了，不需要改动。

---

## 四、潜在问题与排查

### Q1: 子页打不开（404）

检查 `projects/` 文件夹名小写、6 个子页文件名拼写正确，URL 大小写敏感（Cloudflare 服务器是 Linux）。

### Q2: 子页打开了但 i18n 不工作（文本是英文 fallback）

打开浏览器开发者工具 → Network → 看是否有 `/i18n.json` 请求 + 状态码。
如果是 404 → 说明 i18n.js 路径还是相对的，确认 `i18n.js` 文件里第 68 行附近是 `fetch('/i18n.json')`。

### Q3: Copilot / Agent 子页 iframe 显示空白

正常情况——很多网站设置了 `X-Frame-Options: DENY`，浏览器会拒绝嵌入。访客需要点 "Try Demo →" 按钮跳到新标签页。下方已经放了一行提示文字（cs.notes.iframeFallback）解释这一点。

### Q4: ML 子页 PDF 不显示

- 检查 `reports/ml-backtesting.pdf` 文件存在
- 检查文件名小写（不是 `ML-backtesting.pdf` 或 `ml-backtesting.PDF`）
- 看 Network 面板有没有 404
- 看 Console 面板有没有 PDF.js 报错

### Q5: 轮播显示 "Sample pages are not available yet"

正常——你还没上传截图。上传完 `01.png` 起步、命名规范的截图后会自动出现。

### Q6: Cloudflare 部署失败

GitHub Actions 或 Cloudflare dashboard 看构建日志。最常见原因是 JSON 语法错误（多了/少了逗号）——用 [jsonlint.com](https://jsonlint.com) 校验 `i18n.json`。

---

## 五、下一步

部署上线后，对照 [Bryan Chiang](https://bryanchiang.com)、[Brittany Chiang](https://brittanychiang.com) 等顶级 portfolio，你的网站结构现在已经是同一档了。后续优化方向（不急）：

1. 把 6 张占位 SVG 封面图换成 Figma 自制的真实视觉
2. 上传研报截图，让 3 份 Research 子页的 carousel 跑起来
3. 把 ML PDF 放上去，让 PDF.js viewer 跑起来
4. Google Search Console 验证 + 提交 sitemap.xml
5. AI Job Search Copilot 上线后写一篇 Medium / LinkedIn 文章，链回这个 case study 页
