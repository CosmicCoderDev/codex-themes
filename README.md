# Codex 星河计划

面向 Codex 桌面版“设置 > 外观”的完整界面主题包。每组主题都提供浅色和深色分享串：

- `Nebula`：星云深空，靛蓝、紫罗兰与冰蓝。
- `Hacker`：赛博程序员，终端绿、深墨色与少量紫色。
- `Muse`：霓虹人物气质，玫红、粉紫与深莓色；不使用图片背景，保证阅读清晰。

## 桌面版主题导入

1. 打开 Codex 的“设置 > 外观”。
2. 在“浅色主题”或“深色主题”卡片中选择“导入”。
3. 打开 `desktop/share` 中对应的 `.theme.txt` 文件，复制完整的一行分享串并粘贴。
4. 系统模式会根据操作系统外观自动使用已导入的浅色或深色配置。

分享串使用 Codex 当前支持的 `codex-theme-v1:` 协议，包含基础颜色、对比度、透明窗口、代码主题和语义色。UI 与代码字体保持为 `null`，即继续使用你当前的字体设置，避免导入不存在的字体。

## 美女主题皮肤库原型

`preview/index.html` 现在是一套可交互的独立皮肤原型，预置八套虚构人物主题和八套真人照片主题：

- 甜莓粉：草莓、蝴蝶结与柔光人物。
- 星河紫：观星者、紫色星云与银色微光。
- 赛博青：工程师、深色玻璃与青色霓虹。
- 东方红：朱砂服饰、水墨留白与现代东方氛围。
- 午夜黑裙：城市夜景、黑色礼服与暖金轮廓。
- 绯红缎光：红色缎面礼服、暖金灯光与成熟时尚感。
- 午后白衫：白衬衫、现代阁楼与柔和日光。
- 银蓝霓影：银色礼服、午夜蓝与青紫霓虹。
- 刘亦菲：粉色礼服与蓝色盛典光影。
- 章子怡：黑色天鹅绒与电影节质感。
- 周迅：晚礼服、聚光灯与温暖米色留白。
- 范冰冰：象牙白、鎏金与翡翠绿色彩。
- 安妮·海瑟薇：深棕长发、黑色造型与午夜蓝。
- 艾玛·沃森：明亮近景、黑白造型与利落眼神。
- 玛格特·罗比：白色礼服、金色光影与明快笑容。
- 斯嘉丽·约翰逊：银蓝西装、明亮天空与自然笑容。

点击左侧缩略图、弹出的皮肤衣橱或“随心换装”即可切换。选择保存在浏览器 `localStorage`，刷新页面后仍会恢复。八张虚构人物图均为明确成年人物的 AI 原创图；八张真人图片为 Wikimedia Commons 上采用 CC BY 或 CC BY-SA 许可的公开活动照片。生成说明、逐项来源、作者、许可版本、修改说明和人物权利提示见 [`ATTRIBUTION.md`](ATTRIBUTION.md)。真人主题不表示照片人物认可、合作或参与本项目。

这部分是可交互的独立界面原型，不会注入或修改 Codex 安装包。官方 Codex 仍使用上面的 `codex-theme-v1:` 分享串调整颜色和字体。

## 重新生成分享串

源配置位于 `desktop/source`。修改 JSON 后执行：

```powershell
.\scripts\build-desktop-themes.ps1
```

脚本会验证字段、颜色、明暗模式、代码主题 ID 和对比度，再生成 `desktop/share/*.theme.txt`。

## 预览

在浏览器中打开 `preview/index.html`，即可并排查看两套配色。

## CLI/TUI 附属主题

项目早期还包含两套 `.tmTheme`，它们只修改 Codex CLI/TUI 的代码语法颜色，不会修改桌面版界面：

- `themes/codex-nebula.tmTheme`
- `themes/codex-hacker.tmTheme`

如需安装这两个 CLI 主题，在 PowerShell 中执行：

在 PowerShell 中进入项目目录后执行：

```powershell
.\scripts\install.ps1
```

脚本默认把主题复制到：

```text
C:\Users\<你的用户名>\.codex\themes
```

如果目标中已有同名主题，脚本会跳过。确认需要覆盖时执行：

```powershell
.\scripts\install.ps1 -Force
```

安装完成后打开 Codex TUI，输入 `/theme` 预览并保存所选主题。

也可以在 Codex 配置中指定主题名称：

```toml
[tui]
theme = "codex-nebula"
```

## 仅预演安装

安装和卸载脚本支持 PowerShell 的 `-WhatIf`：

```powershell
.\scripts\install.ps1 -WhatIf
.\scripts\uninstall.ps1 -WhatIf
```

## 卸载

```powershell
.\scripts\uninstall.ps1
```

卸载脚本只删除本项目管理的两个主题，不会触碰主题目录中的其他文件。

## 项目结构

```text
codex-themes/
├─ desktop/
│  ├─ source/                 # 可维护的桌面主题 JSON
│  └─ share/                  # 可直接粘贴导入的分享串
├─ themes/
│  ├─ codex-nebula.tmTheme
│  └─ codex-hacker.tmTheme
├─ scripts/
│  ├─ build-desktop-themes.ps1
│  ├─ install.ps1
│  └─ uninstall.ps1
└─ preview/
   └─ index.html
```

## 设计原则

- 主背景保持低亮度，减少长时间阅读的视觉疲劳。
- 关键字、函数、字符串和数字拥有清晰但不过饱和的色彩层级。
- 不使用图片背景；Codex 当前分享协议只接受界面颜色、字体、对比度和语义色等配置。
- 安装和卸载均可回滚，不修改 Codex 程序文件。

## 许可证

- 本仓库自行编写的源代码、脚本、主题配置和文档采用 [MIT License](LICENSE)。
- AI 生成的虚构人物图片在项目作者可授权的范围内采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。
- 真人照片不适用 MIT 或统一的图片许可，必须遵守 [`ATTRIBUTION.md`](ATTRIBUTION.md) 中对应文件的 CC BY / CC BY-SA 许可、署名与相同方式共享要求。
- 照片人物没有认可、合作、参与或赞助本项目。开放版权许可也不自动授予肖像宣传、商业代言或商标权利。
