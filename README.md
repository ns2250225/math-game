# Math Rush 算术冲刺

一款以心算速度和反应能力为核心的纯前端街机风算术游戏。

玩家通过正确回答加、减、乘、除题目延长剩余时间；答对题目越多，时间流逝速度越快。游戏支持多种玩法、动态难度、特殊事件、本地成就、成绩卡片和同题挑战，并且无需服务器即可离线运行。

## 功能特性

- 五种游戏模式：经典生存、百题竞速、极限一命、闪现记忆、每日挑战
- 加减乘除随机题目，除法始终整除，默认减法不会产生负数
- 基于正确题数、答题速度和近期表现的动态难度
- 动态时间流速、时间奖励和连击得分倍率
- 幸运题、炸弹题、冰冻题、双倍题和 Boss 题
- 连击阶段、Fever 状态和街机反馈效果
- 可复现的随机题目种子和同题挑战链接
- 本机历史记录、模式筛选和多维成绩排序
- 本地成就系统与最高纪录
- 游戏规则、音画、震动和分享隐私设置
- Canvas 成绩卡片、PNG 保存和 Web Share API
- 标准可扫描 QR Code 挑战二维码
- 桌面端、移动端和平板响应式适配
- 键盘 Enter/空格提交，iOS 数字键盘场景提供触控提交按钮
- PWA 安装、离线启动和本地数据持久化

## 技术方案

项目采用原生 Web 技术实现，不依赖后端服务：

- HTML、CSS、JavaScript
- Canvas API
- Web Audio API
- Web Share API
- LocalStorage
- Service Worker 与 Web App Manifest
- `qrcode-generator`（构建时已本地化至 `vendor`）

所有游戏数据和设置默认只保存在当前浏览器中，不会上传到服务器。

## 本地运行

环境要求：

- Node.js 18 或更高版本
- npm
- Python 3（仅用于本地静态服务器）

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

访问：

```text
http://127.0.0.1:4173/
```

## 生产构建

执行：

```bash
npm run build
```

构建产物会生成到 `dist/` 目录。

本地预览生产版本：

```bash
npm run preview
```

## 部署

`dist/` 是完整的静态站点，可以部署到 GitHub Pages、Cloudflare Pages、Netlify、Vercel 或任意静态文件服务器。

部署时需要确保：

- 站点通过 HTTPS 提供服务，以启用 Service Worker 和系统分享能力。
- `sw.js` 位于站点部署目录的根路径。
- 分享链接使用可被好友访问的正式站点域名。

## 项目结构

```text
math-game/
├── index.html              # 页面入口
├── app.js                  # 游戏、页面、存储及分享逻辑
├── style.css               # 响应式界面与动画样式
├── sw.js                   # PWA 离线缓存
├── manifest.webmanifest    # PWA 应用配置
├── icon.svg                # 应用图标
├── vendor/
│   └── qrcode.js           # 本地二维码编码器
├── build.mjs               # 生产构建脚本
├── package.json            # npm 命令和依赖
└── prd.md                  # 产品需求文档
```

## 可用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 在 4173 端口启动开发服务器 |
| `npm run build` | 生成生产版本到 `dist/` |
| `npm run preview` | 预览 `dist/` 中的生产版本 |

## 数据与隐私

- 不需要注册或登录。
- 不收集手机号、邮箱等个人信息。
- 成绩、设置和成就仅保存在本机浏览器。
- 成绩图片完全在浏览器中生成。
- 清除浏览器站点数据后，本地记录将无法恢复。

## 浏览器兼容性

推荐使用最新版 Chrome、Edge、Safari 或 Firefox。

Web Share、文件分享、震动和 PWA 安装能力会根据浏览器支持情况自动降级，不影响核心游戏功能。

## 开源许可

当前仓库未指定开源许可证。未经仓库所有者明确授权，请勿将项目用于再分发或商业用途。
