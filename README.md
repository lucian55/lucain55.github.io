# lucain55.github.io

个人博客，使用 React + Vite + Tailwind + antd 构建，通过 GitHub Pages 部署。文档源文件在 **file** 分支。

- **访问地址**：https://lucain55.github.io  
- **关于 / 赞助**：https://lucain55.github.io/about/

## 赞助 / 打赏

如果博文或小工具对你有帮助，欢迎请我喝杯咖啡 ☕

| 微信 | 支付宝 |
|------|--------|
| ![微信收款码](img/wechat.jpg) | ![支付宝收款码](img/alipay.jpg) |

---

## 本地开发与部署

- **源码**：`site/` 目录（React + TypeScript + Vite + Tailwind + antd）
- **文档源**：`file` 分支下的 `.md` 文件，文章内容从该分支的 raw 地址动态加载。

```bash
cd site
npm install
npm run dev    # 开发
npm run build # 构建，产物在 dist/
```

部署到仓库根目录（供 GitHub Pages 使用）：

```bash
cd site && npm run build
cd .. && rm -rf assets img index.html 404.html favicon.svg icons.svg
cp -r site/dist/* .
# 保留 404 与 index 一致以便 SPA 路由
cp index.html 404.html
git add -A && git commit -m "deploy" && git push origin master
```

GitHub Pages：Settings → Pages → Source 选 **Deploy from a branch**，Branch 选 **master**，Folder 选 **/ (root)**。
