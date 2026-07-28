# Theme Name: 霓虹科技

# Vibe & Description:
简约科技，白色基底，蓝紫渐层与玻璃拟态光晕叠加，营造现代、清爽、前沿的数字科技感。

# Color

- 使用白色作为整体背景基底，推荐 `#ffffff`，辅以极浅冷白 `#f8fafc`，文字使用深色 `#0f172a`、`#475569` 保持层次。
- 主色采用紫色 `#8b5cf6`，搭配蓝色 `#3b82f6` 作为次要强调，整体彩色角色不超过两个，保持简约。
- 视觉重点使用蓝紫渐变：`from-blue-500 via-violet-500 to-purple-500`，仅用于按钮、标题强调、装饰线和关键数字，不大面积铺底。
- 卡片使用半透明白色玻璃效果：`bg-white/70`、`border-slate-200/60`、`backdrop-blur-xl`，文字使用 `text-slate-900`、`text-slate-600`、`text-slate-400` 保持层次。

# Font

- 使用「阿里巴巴普惠体3.0」作为标题字体，突出科技感和信息层级。（https://resource-static.bj.bcebos.com/fonts-skill/AlibabaPuHuiTi_SemiBold.ttf）
- 使用「阿里巴巴普惠体3.0」作为正文字体，保持清晰、现代、易读。（https://resource-static.bj.bcebos.com/fonts-skill/AlibabaPuHuiTi_Regular.ttf）

# Animation

- 点击按钮或卡片时使用轻微缩放反馈：`active:scale-95`，并配合彩色阴影增强，形成明确的触摸响应。
- 元素出现时采用“淡入 + 上移”交错入场效果（按区域延迟 80-120ms），营造层次感。
- 背景光晕球缓慢漂浮（`float`，18-24s 线性循环）与位移漂移，颜色与蓝紫主题一致，不干扰阅读。
- 头像外环呈现旋转渐变光环（`spin-slow`，8s）与呼吸光晕（`pulse-ring`，缩放+透明度），形成视觉焦点。
- 名字渐变文字呈现流动光泽（`gradient-shift`，6s 循环移动背景位置），增强科技感。
- 新聊天气泡出现时淡入上移，打字指示器三点跳动。
- 所有交互保持顺滑：`transition-all duration-300`，避免生硬位移和传统硬边阴影。
- 动效在移动端保持流畅，遵循 `prefers-reduced-motion` 降级。

# Layout

- 页面以白色全屏背景为基础，背景叠加淡蓝紫渐变光晕球，内容以纵向滚动呈现。
- Hero 区域突出大标题、副标题和主 CTA，背景叠加模糊渐变光晕球，形成视觉焦点。
- 功能、数据和评价内容使用玻璃卡片纵向排列，卡片间距充足，整体保持清晰的移动端阅读节奏。

# Elements

- 按钮使用蓝到紫的渐变背景，圆角为 `rounded-2xl`，配合彩色光晕阴影：`shadow-violet-500/30`。
- 卡片使用 `rounded-3xl`、半透明白色背景、细边框和 `backdrop-blur-xl`，呈现悬浮玻璃质感。
- 关键数字与标题使用蓝紫渐变文字效果，图标以蓝、紫点缀。
- 背景装饰使用淡蓝紫模糊光晕球（透明度约 30-40%）与渐变线条，整体保持简约留白，避免喧宾夺主。