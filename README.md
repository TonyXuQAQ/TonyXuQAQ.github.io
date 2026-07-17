# 可维护的学术个人主页

这是一个 React + TypeScript + Vite 项目，页面结构参考了经典的学术个人主页：顶部个人信息、研究方向、新闻、论文列表、教育经历和学术服务。

项目不依赖数据库或后台。个人信息集中在一个强类型配置文件中，适合放在 GitHub 上长期维护，并可通过 GitHub Pages 自动部署。

## 你主要编辑的地方

编辑：

```text
src/content/site.ts
```

这个文件包含：

- 姓名、职位、学校、邮箱和个人链接
- 个人简介与研究方向
- 招生或合作通知
- News
- Publications
- Education、Experience 和 Academic Service
- 网站标题、简介、强调色和更新时间

## 页面结构

主页采用独立页面导航，并兼容 GitHub Pages：

- `#/home`：个人主题、News、Selected Publications
- `#/publications`：完整论文列表
- `#/experience`：Education 与 Experience
- `#/service`：Academic Service

右上角菜单由 `src/content/site.ts` 中的 `navigation` 配置生成。路由使用 URL hash，因此直接刷新任意页面不会在 GitHub Pages 上产生 404。

字段结构定义在：

```text
src/types/site.ts
```

TypeScript 会检查填写内容。字段拼错或数据类型不正确时，构建会直接指出位置。

## 图片和视频

把文件放到 `public/`：

```text
public/
└── images/
    ├── profile.jpg
    ├── paper-project-a.jpg
    └── paper-project-b.mp4
```

然后在 `src/content/site.ts` 中填写相对路径：

```ts
photo: "images/profile.jpg"
```

```ts
media: {
  type: "image",
  src: "images/paper-project-a.jpg",
  alt: "Overview of the proposed method",
}
```

不要在路径开头添加 `/`，这样部署到 GitHub 项目子路径时也能正常访问。

## 本地开发

需要 Node.js 22 和 pnpm：

```bash
pnpm install
pnpm dev
```

打开终端显示的本地地址。编辑 `src/content/site.ts` 后页面会自动刷新。

生产构建：

```bash
pnpm build
```

构建结果位于 `dist/`。

## 部署到 GitHub Pages

项目已包含：

```text
.github/workflows/deploy-pages.yml
```

部署步骤：

1. 在 GitHub 新建仓库。
2. 将本项目提交并推送到 `master` 分支。
3. GitHub Actions 会自动构建主页，并仅将 `dist/` 中的静态文件发布到
   `gh-pages` 分支。
4. 仓库的 **Settings → Pages** 保持从 `gh-pages` 分支根目录发布。

`vite.config.ts` 使用相对资源路径，因此既支持 `username.github.io`，也支持 `username.github.io/repository-name/`。

## 自定义域名

如果使用自定义域名，在 `public/` 下创建 `CNAME` 文件，内容只写域名：

```text
your-domain.com
```

同时按 GitHub Pages 的提示配置 DNS。
