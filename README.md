# gingerworks.me

Mix Jiang 个人网站。**本仓库是唯一源码仓库,master 即线上**(GitHub Pages)。

## 工作流

- 本地开发:克隆到 iCloud 外目录(如 ~/dev/mix-jiang.github.io),改完 push 即上线
- 实验改动走分支,确认后合入 master
- 加内容:只改 content.json(schema 见文件头 _readme,status=draft 不渲染)
- 本地预览:python3 -m http.server 8000(直接双击 index.html 会被 CORS 拦)

## 上下文

- 规划/决策/内容文案:mixj-myself vault 的 website/ 目录
- 视觉气质约束:mixj-myself/design/DESIGN.md
- 旧 Jekyll 站:legacy-jekyll 分支
- 域名 DNS 切换步骤:DEPLOY.md(切换时需把 CNAME 文件加回来,内容 gingerworks.me)

## Phase 2 注意

上 Astro 等构建工具链时,node_modules 不进 iCloud;content.json 结构可平滑迁移到 content collections。
