# gingerworks.me

Mix Jiang 个人网站,Astro 构建。**本仓库是唯一源码仓库**,push master 后 GitHub Actions 自动构建发布。

## 日常维护(无需本地 Node)

- 加/改项目:编辑 `src/content/projects/*.md`,push 即上线
- 加/改文章:编辑 `src/content/posts/*.md`
- frontmatter: title / date(YYYY-MM) / summary / tags / draft(true 不发布)
- 图片:放 `public/images/`,md 里用 `/images/xxx.png` 引用

## 本地开发(可选)

```bash
npm install && npm run dev    # 预览
npm run build                 # 构建到 dist/
```

## 上下文

- 规划/决策:mixj-myself vault 的 website/ 目录;视觉约束:design/DESIGN.md
- 旧站备份:legacy-jekyll(Jekyll)、mvp-static(纯静态 MVP)分支
- 域名切换:见 DEPLOY.md;切 DNS 时在 `public/` 加 CNAME 文件(内容 gingerworks.me)

## 待办

- Merchant Promotion 案例图片仍热链 framerusercontent,待下载替换为 `public/images/` 自托管

## 案例页(case study)md 约定

frontmatter 含 `toc` 数组即启用侧边目录+scroll-spy 版式(见 merchant-promotion-revamp.md):

- 每节包在 `<div class="sec" id="sN">…</div>` 中,N 与 toc 顺序对应
- 节首行 `<div class="sec-kicker">01 · SECTION NAME</div>`,随后空行,之后正常写 markdown
- 结论块:`<div class="conclusion"><span class="conclusion-tag">CONCLUSION n </span><br/>text</div>`
- 无 `toc` 的项目/文章走简单文章版式

设计规则源:mixj-myself/design + design_handoff_gingerworks_redesign(深色+姜黄 token,2026-07-09)
