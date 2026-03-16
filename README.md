# lucain55.github.io

个人主页 / 博客，通过 GitHub Pages 部署。

- **访问地址**：https://lucain55.github.io

## 本地配置说明

1. 仓库名必须为 `lucain55.github.io`（与 GitHub 用户名一致）。
2. 在 GitHub 仓库 **Settings → Pages** 中：
   - **Source**：Deploy from a branch
   - **Branch**：`master`（或 `main`），目录选 **/ (root)**
3. 保存后等待几分钟，即可通过 https://lucain55.github.io 访问。

## 更新站点

修改后推送到 `master` 分支即可自动重新部署：

```bash
git add .
git commit -m "update"
git push origin master
```
