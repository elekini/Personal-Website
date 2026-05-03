# Tingyu Shi Personal Website Prompt

你是一位兼具审美、交互设计能力和前端实现能力的高级产品设计师。请为 Tingyu Shi 设计并搭建一个高级感个人网站，用于展示工作经历、项目成果、个人照片、联系方式、兴趣爱好和职业气质。

网站整体风格参考 Apple 官网：克制、精致、留白充足、视觉聚焦、动效高级，但不要直接复制 Apple 的页面。

## 创作方向

这个网站不是传统简历页，而是一个个人品牌体验网站。第一屏要建立专业、高级、可信赖的个人形象；滚动过程要像一次有节奏的职业叙事；项目展示要有作品集质感；联系方式要清晰自然。

关键词：Apple-like、极简、高级黑白灰、电影感照片、大字号标题、流畅滚动、轻量玻璃质感、精致微交互、品牌增长、数字营销、内容策略。

## 网站结构

1. Hero 首屏：Tingyu Shi / Digital Marketing Specialist，大幅视觉背景，加载浮现，滚动时标题缩放淡出。
2. About：个人介绍、当前方向、核心能力关键词、所在城市、个人照片。
3. Experience：时间线展示公司、职位、时间、职责和代表成果。
4. Projects：高级作品集展示，包含 sticky scroll 图片切换、项目简介、角色和成果。
5. Skills：用标签云或动态模块展示营销策略、内容系统、社媒、数据分析、投放、GTM、沟通协作和工具栈。
6. Hobbies：摄影、旅行、咖啡、电影、阅读、音乐、徒步等，使用高级图片墙或胶片感布局。
7. Contact：邮箱、LinkedIn、GitHub、简短邀请语和简历入口。

## 视觉要求

使用黑、白、深灰、银灰作为主色，少量冷蓝或香槟金作为强调色。避免廉价渐变、卡通插画、普通简历模板和营销落地页。标题大气，正文清晰，页面有呼吸感。卡片只用于必要的信息承载。

## 动效要求

重点实现滚动交互：首屏加载动画、视差、sticky section、项目图片随滚动切换、内容淡入上移、hover 微交互、移动端动效降级、背景光影缓慢变化。动效应高级克制，不影响阅读。

## 技术建议

优先使用 HTML / CSS / JavaScript，或 React / Next.js + Tailwind CSS + Framer Motion / GSAP ScrollTrigger。页面必须响应式适配桌面、平板和手机，图片比例稳定，文本不溢出，按钮可点击。

## 占位内容

姓名：Tingyu Shi  
职业身份：Digital Marketing Specialist  
城市：Shanghai / Remote  
邮箱：hello@example.com  
LinkedIn：linkedin.com/in/yourname  
GitHub：github.com/yourname

项目示例：AI Portfolio System、Brand Design Platform、Data Dashboard Redesign、Interactive Travel Journal。

## 输出要求

输出网站设计方案、页面结构、视觉风格、交互动效说明、完整可运行代码、响应式适配方案，以及后续如何替换个人内容的说明。最终结果应该像一个高级个人品牌官网，而不是信息堆叠页面。
