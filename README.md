# SafariGoogleRedirect

**SafariGoogleRedirect**（Safari · Google 重定向）是一个 Tampermonkey/Greasemonkey 用户脚本，专为 **Safari 浏览器在中国大陆地区使用 Google 搜索时** 设计，用于**解决 Google 搜索跳 中间层 问题**，提升用户体验。

---

## 功能特性

- **自动重定向**  
  当 iPhone 地区设置为中国大陆, Safari 设置为谷歌搜索时, 自动将访问的 Google 中国搜索页面（`www.google.cn`）或 Safari 搜索跳转产生的中间层页面，重定向到 Google 国际版（`www.google.com`），解决 Safari 大陆地区 Google 搜索先弹出 中间层 确认页的问题。  

- **最小 URL 构造**  
  构造最简洁搜索 URL，仅保留 `q`（搜索关键词）参数，去除多余参数（如 `hl`、`ie`、`oe`、`client` 等），增强隐私安全, 保证搜索 URL 干净、统一。  

- **加载动画改善闪烁体验**  
  在重定向之前，页面显示 **Google Logo + CSS Loading 动画**，减少中间层页面闪烁感，让用户体验更加平滑。  

- **深浅色主题自适应**  
  自动检测 iOS 系统深色/浅色模式，动画颜色和背景色随主题变化：
  - 浅色模式 → 白色背景 + 蓝色加载动画  
  - 深色模式 → 深灰背景 + 亮蓝加载动画  

- **保留搜索词**  
  智能提取并保留原搜索关键词，确保重定向后搜索结果一致、连贯。  

- **轻量高效**  
  无依赖、纯前端脚本，运行在 `document-start` 阶段，执行速度快，用户几乎感觉不到跳转。  

- **兼容性好**  
  支持 HTTP/HTTPS 协议，覆盖 Safari 在大陆地区的所有 Google 搜索页面；也可适配未来可能的 Google CN 中间页 URL。  

- **历史记录友好**  
  使用 `location.replace` 进行重定向，不污染浏览历史，返回键不会回到中间层页面。  

---

## 安装方法

1. 在 iPhone 安装 **Tampermonkey** 或 任意 **提供用户脚本功能** 的 Safari 浏览器扩展, 有收费的, 有免费的自行选择, 任意一个都可以.
2. 在你选择使用的扩展中, 添加脚本, URL为 [https://raw.githubusercontent.com/garinasset/SafariGoogleRedirect/main/SafariGoogleRedirect.user.js](https://raw.githubusercontent.com/garinasset/SafariGoogleRedirect/main/SafariGoogleRedirect.user.js) 
3. 下载添加后, 启用 **Safari · Google 重定向**
4. 在 Safari 中选择 Google 作为搜索引擎, 在地址栏键入关键词, 例如 ‘test’ ,进行搜索时，脚本会自动：
   1. 显示临时中间层（Logo + 动画）  
   2. 自动跳转到最小化 Google 国际版搜索 URL（`https://www.google.com/search?q=test`）  

---

## 使用效果示例

- 输入搜索词 `test`：  

| 原始 URL | 重定向后 URL |
|----------|--------------|
| `https://www.google.cn/search?q=test&hl=zh-CN&client=safari&ie=UTF-8` | `https://www.google.com/search?q=test` |

> ✅ 完全去掉多余参数，只保留搜索关键词 `q`  
> ✅ 避免 Safari 弹出中间层确认页  
> ✅ 中间页显示 Logo + 动画，深浅色主题自适应  
> ✅ 保持搜索结果一致  

---

## 更新与反馈

- GitHub 仓库：[https://github.com/garinasset/SafariGoogleRedirect](https://github.com/garinasset/SafariGoogleRedirect)  
- Issues & Bug 报告：[https://github.com/garinasset/SafariGoogleRedirect/issues](https://github.com/garinasset/SafariGoogleRedirect/issues)  
- 自动更新：脚本内配置了 `@updateURL` 指向 GitHub Raw 文件，Tampermonkey 会自动检查更新  

---

## 许可证

MIT License
