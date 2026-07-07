# Deploy Guide

## 目标

把 `mixj-myself/website/` 中确认好的网站版本，发布到：

- `https://github.com/mix-jiang/mix-jiang.github.io`

## 发布原则

- `mixj-myself/website/`：开发源
- `mix-jiang.github.io`：发布目标
- 两者不要混成一个仓库

## 标准发布流程(MVP:纯静态,无构建)

1. 在 `website/site/` 完成开发
2. 本地预览:`cd website/site && python3 -m http.server 8000`(content.json 用 fetch 加载,直接双击 index.html 会被 CORS 拦,必须起本地服务)
3. 拉取 / 更新 `mix-jiang.github.io` 仓库
4. 把 `website/site/` 下所有文件复制到发布仓库根目录(含 CNAME)
5. 提交并推送到 GitHub
6. 检查 GitHub Pages 线上结果

## 域名与 DNS(2026-07-07 确认)

现状:访问 `mix-jiang.github.io` 会跳转到 `gingerworks.me`,而该域名当前 DNS 指向 **GoDaddy Website Builder** 的 "Launching Soon" 占位页——不是 GitHub Pages 在服务。

决策:保留 gingerworks.me,新站上线时切到 GitHub Pages:

1. 发布仓库根目录放 `CNAME` 文件,内容为 `gingerworks.me`
2. 在 GoDaddy DNS 管理中:
   - 删除/停用 Website Builder 的托管
   - A 记录指向 GitHub Pages IP(185.199.108.153 / 109 / 110 / 111,发布时以 GitHub 官方文档为准)
   - `www` CNAME 记录指向 `mix-jiang.github.io`
3. GitHub 仓库 Settings → Pages 中填 custom domain 并开 Enforce HTTPS
4. DNS 生效前旧占位页仍会显示,属正常

> 切 DNS 前先把新站部署好并通过 mix-jiang.github.io 验证,避免域名指向空站。

## 注意事项

- 发布前先确认 CNAME、域名、SEO 文件是否需要保留
- 如果旧站要整体替换，先做一次备份
- 发布动作和开发动作要分开，避免误把实验内容直接上线

## 后续可补充

- 针对最终技术栈写具体命令
- 增加一键发布脚本
- 增加上线前检查清单
