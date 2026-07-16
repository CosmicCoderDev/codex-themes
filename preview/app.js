const themes = {
  berry: {
    name: "甜莓粉",
    image: "assets/sweet-berry.png",
    alt: "甜莓粉主题人物主视觉",
    symbol: "♥",
    kicker: "甜莓灵感站",
    title: "今天想创造什么？",
    description: "让柔软的粉色和草莓香气，陪你把灵感写成可以运行的代码。",
    noteTitle: "Sweet Code",
    noteCopy: "温柔也可以很有力量",
    composer: "与甜莓缪斯一起写代码",
    placeholder: "随心输入，让灵感陪你一起写代码吧……",
    caption: "柔光、草莓与蝴蝶结"
  },
  nebula: {
    name: "星河紫",
    image: "assets/nebula-oracle.png",
    alt: "星河紫主题人物主视觉",
    symbol: "✦",
    kicker: "深空观测站",
    title: "穿越代码星河",
    description: "把复杂系统看成星图，在安静的深空里找到下一条清晰路径。",
    noteTitle: "Nebula Oracle",
    noteCopy: "向未知发出一次优雅调用",
    composer: "与星河观测者一起推演",
    placeholder: "描述目标，我们从星图中找到实现路径……",
    caption: "紫罗兰星云与银色微光"
  },
  cyber: {
    name: "赛博青",
    image: "assets/cyber-engineer.png",
    alt: "赛博青主题人物主视觉",
    symbol: "⌁",
    kicker: "霓虹工程室",
    title: "启动构建协议",
    description: "保持冷静、精准和高速，让每一次修改都留下可以验证的轨迹。",
    noteTitle: "Cyber Engineer",
    noteCopy: "系统在线，开始编译灵感",
    composer: "与霓虹工程师一起构建",
    placeholder: "输入任务，开始扫描、构建和验证……",
    caption: "深黑玻璃与电光青"
  },
  oriental: {
    name: "东方红",
    image: "assets/oriental-muse.png",
    alt: "东方红主题人物主视觉",
    symbol: "◆",
    kicker: "朱砂灵感阁",
    title: "一屏山水，一行新章",
    description: "以克制的留白容纳复杂，以朱砂般清晰的重点推动工作向前。",
    noteTitle: "Oriental Muse",
    noteCopy: "慢一点看清，快一点完成",
    composer: "与东方缪斯一起落笔",
    placeholder: "写下你的构想，让它从一行开始生长……",
    caption: "朱砂、瓷白与水墨留白"
  },
  midnightglamour: {
    name: "午夜黑裙",
    image: "assets/ai-midnight-glamour.jpg",
    alt: "虚构成年女性的午夜露台时尚主视觉",
    symbol: "◇",
    kicker: "午夜露台",
    title: "让灵感在夜色中发光",
    description: "深海蓝、暖金轮廓与黑色礼服构成成熟时尚氛围，把注意力留给真正重要的创作。",
    noteTitle: "Midnight Glamour",
    noteCopy: "虚构成年人物 · AI 原创",
    composer: "与午夜缪斯一起推进任务",
    placeholder: "写下目标，让夜色陪你把它完成……",
    caption: "黑色礼服、城市夜景与暖金轮廓"
  },
  crimsonsatin: {
    name: "绯红缎光",
    image: "assets/ai-crimson-satin.jpg",
    alt: "虚构成年东亚女性的红色礼服时尚主视觉",
    symbol: "◆",
    kicker: "绯红时刻",
    title: "大胆表达，优雅落地",
    description: "浓郁绯红与金色灯光带来成熟魅力，让每个想法都拥有清晰而坚定的表达。",
    noteTitle: "Crimson Satin",
    noteCopy: "虚构成年人物 · AI 原创",
    composer: "与绯红缪斯一起打磨作品",
    placeholder: "输入构想，我们从最有力量的部分开始……",
    caption: "红色缎面、暖金灯光与从容目光"
  },
  lofteditorial: {
    name: "午后白衫",
    image: "assets/ai-loft-editorial.jpg",
    alt: "虚构成年金发女性的现代阁楼时尚主视觉",
    symbol: "○",
    kicker: "午后光线",
    title: "简单，也足够迷人",
    description: "白衬衫、黑色长裤与午后自然光构成松弛空间，让复杂问题重新变得清楚。",
    noteTitle: "Loft Editorial",
    noteCopy: "虚构成年人物 · AI 原创",
    composer: "与午后缪斯一起梳理思路",
    placeholder: "把问题放在这里，我们慢慢拆清楚……",
    caption: "白衬衫、现代阁楼与柔和日光"
  },
  neonsilver: {
    name: "银蓝霓影",
    image: "assets/ai-neon-silver.jpg",
    alt: "虚构成年深发女性的银蓝霓虹时尚主视觉",
    symbol: "✦",
    kicker: "银蓝夜场",
    title: "冷静，也可以有锋芒",
    description: "银色礼服、午夜蓝与青紫霓虹构成未来感界面，让判断保持冷静，让表达足够鲜明。",
    noteTitle: "Neon Silver",
    noteCopy: "虚构成年人物 · AI 原创",
    composer: "与银蓝缪斯一起构建",
    placeholder: "输入任务，开始一次清晰而大胆的构建……",
    caption: "银色礼服、午夜蓝与青紫霓虹"
  },
  liuyifei: {
    name: "刘亦菲",
    image: "assets/celebrity-liu-yifei.jpg",
    alt: "刘亦菲在北京国际电影节公开活动照片",
    portrait: true,
    imagePosition: "right center",
    symbol: "✿",
    kicker: "粉蓝光影",
    title: "清醒地写下灵感",
    description: "以粉色与蓝色构成轻盈界面，让注意力回到当前最重要的任务。",
    noteTitle: "Liu Yifei",
    noteCopy: "公开活动照片主题",
    composer: "在刘亦菲主题中开始创作",
    placeholder: "写下今天最想完成的事情……",
    caption: "粉色礼服与蓝色盛典光影"
  },
  zhangziyi: {
    name: "章子怡",
    image: "assets/celebrity-zhang-ziyi.jpg",
    alt: "章子怡在威尼斯电影节公开活动照片",
    editorial: true,
    imagePosition: "58% center",
    symbol: "◆",
    kicker: "黑银电影感",
    title: "把复杂变成确定",
    description: "用克制的黑、银和暖金收敛选择，抓住真正值得推进的关键路径。",
    noteTitle: "Zhang Ziyi",
    noteCopy: "公开活动照片主题",
    composer: "在章子怡主题中推进任务",
    placeholder: "输入目标、约束和截止时间……",
    caption: "黑色天鹅绒与电影节光影"
  },
  zhouxun: {
    name: "周迅",
    image: "assets/celebrity-zhou-xun.jpg",
    alt: "周迅在公开颁奖活动照片",
    editorial: true,
    imagePosition: "72% center",
    symbol: "○",
    kicker: "经典留白",
    title: "用简洁容纳锋芒",
    description: "黑白与米色构成安静背景，让想法保持轻盈，也保持鲜明。",
    noteTitle: "Zhou Xun",
    noteCopy: "公开活动照片主题",
    composer: "在周迅主题中整理灵感",
    placeholder: "写下想法，我们把它整理成清晰作品……",
    caption: "经典黑白与温暖米色"
  },
  fanbingbing: {
    name: "范冰冰",
    image: "assets/celebrity-fan-bingbing.jpg",
    alt: "范冰冰在柏林国际电影节公开活动照片",
    editorial: true,
    imagePosition: "54% center",
    symbol: "✦",
    kicker: "白金翡翠",
    title: "让细节成为表达",
    description: "象牙白、鎏金和翡翠绿组成精致界面，把每一步推进到可见结果。",
    noteTitle: "Fan Bingbing",
    noteCopy: "公开活动照片主题",
    composer: "在范冰冰主题中打磨作品",
    placeholder: "告诉我目标，我们从关键细节开始……",
    caption: "象牙白、鎏金与翡翠绿"
  },
  annehathaway: {
    name: "安妮·海瑟薇",
    image: "assets/celebrity-anne-hathaway.jpg",
    alt: "安妮·海瑟薇在柏林国际电影节公开活动照片",
    portrait: true,
    imagePosition: "center 18%",
    symbol: "A",
    kicker: "午夜蓝调",
    title: "让灵感自然生长",
    description: "深棕长发、黑色造型与午夜蓝背景构成优雅空间，把复杂想法整理成清晰表达。",
    noteTitle: "Anne Hathaway",
    noteCopy: "公开活动照片主题",
    composer: "在安妮·海瑟薇主题中开始创作",
    placeholder: "描述你的构想，我们从清晰框架开始……",
    caption: "深棕长发、黑色造型与午夜蓝"
  },
  emmawatson: {
    name: "艾玛·沃森",
    image: "assets/celebrity-emma-watson.jpg",
    alt: "艾玛·沃森在翠贝卡电影节公开活动照片",
    portrait: true,
    imagePosition: "center 18%",
    symbol: "E",
    kicker: "黑白锋芒",
    title: "理性也可以很优雅",
    description: "干净的黑白造型与明亮近景带来利落气质，让思考、判断与表达彼此连贯。",
    noteTitle: "Emma Watson",
    noteCopy: "公开活动照片主题",
    composer: "在艾玛·沃森主题中梳理思路",
    placeholder: "写下问题，我们把它拆成可以验证的步骤……",
    caption: "明亮近景、黑白造型与利落眼神"
  },
  margotrobbie: {
    name: "玛格特·罗比",
    image: "assets/celebrity-margot-robbie.jpg",
    alt: "玛格特·罗比在电影首映公开活动照片",
    portrait: true,
    imagePosition: "center 18%",
    symbol: "M",
    kicker: "白色蕾丝",
    title: "把大胆想法变成作品",
    description: "白色礼服、金色光影和自然笑容带来明快气质，让创意快速进入可执行状态。",
    noteTitle: "Margot Robbie",
    noteCopy: "公开活动照片主题",
    composer: "在玛格特·罗比主题中推进创意",
    placeholder: "输入大胆想法，我们把它推进到可见成果……",
    caption: "白色礼服、金色光影与明快笑容"
  },
  scarlettjohansson: {
    name: "斯嘉丽·约翰逊",
    image: "assets/celebrity-scarlett-johansson.jpg",
    alt: "斯嘉丽·约翰逊在戛纳电影节 WikiPortraits 公开活动照片",
    editorial: true,
    imagePosition: "64% center",
    symbol: "S",
    kicker: "海风银蓝",
    title: "保持冷静，精准推进",
    description: "银蓝西装、明亮天空与自然笑容构成清爽界面，让判断聚焦在真正重要的部分。",
    noteTitle: "Scarlett Johansson",
    noteCopy: "公开活动照片主题",
    composer: "在斯嘉丽·约翰逊主题中完成任务",
    placeholder: "告诉我目标和约束，我们直接处理关键问题……",
    caption: "银蓝西装、明亮天空与自然笑容"
  }
};

const themeCopyEn = {
  berry: {
    name: "Sweet Berry", alt: "Sweet Berry theme hero portrait", kicker: "Berry Inspiration Studio",
    title: "What would you like to create today?", description: "Let soft pink tones and strawberry sweetness turn your inspiration into working code.",
    noteCopy: "Gentleness can be powerful", composer: "Code with the Sweet Berry muse", placeholder: "Share an idea and let inspiration code beside you…", caption: "Soft light, strawberries, and bows"
  },
  nebula: {
    name: "Nebula Violet", alt: "Nebula Violet theme hero portrait", kicker: "Deep Space Observatory",
    title: "Travel through a galaxy of code", description: "See complex systems as star maps and find the next clear path in the quiet of deep space.",
    noteCopy: "Send an elegant call into the unknown", composer: "Explore with the nebula observer", placeholder: "Describe the goal and we will chart a path through the stars…", caption: "Violet nebula and silver starlight"
  },
  cyber: {
    name: "Cyber Cyan", alt: "Cyber Cyan theme hero portrait", kicker: "Neon Engineering Lab",
    title: "Initiate the build protocol", description: "Stay calm, precise, and fast, with a verifiable trail behind every change.",
    noteCopy: "System online — compiling inspiration", composer: "Build with the neon engineer", placeholder: "Enter a task to begin scanning, building, and validating…", caption: "Dark glass and electric cyan"
  },
  oriental: {
    name: "Oriental Red", alt: "Oriental Red theme hero portrait", kicker: "Cinnabar Inspiration Studio",
    title: "A landscape on screen, a new chapter in code", description: "Use thoughtful space to hold complexity and cinnabar clarity to move the work forward.",
    noteCopy: "Slow down to see; speed up to finish", composer: "Write with the Oriental muse", placeholder: "Write down your vision and let it grow from one line…", caption: "Cinnabar, porcelain white, and ink wash"
  },
  midnightglamour: {
    name: "Midnight Glamour", alt: "Fashion hero image of a fictional adult woman on a midnight terrace", kicker: "Midnight Terrace",
    title: "Let inspiration glow after dark", description: "Deep ocean blue, warm gold edges, and a black gown create a mature editorial mood that keeps attention on the work.",
    noteCopy: "Fictional adult · AI-generated", composer: "Move the task forward with the midnight muse", placeholder: "Set the goal and let the night help you finish it…", caption: "Black gown, city lights, and warm gold"
  },
  crimsonsatin: {
    name: "Crimson Satin", alt: "Fashion hero image of a fictional adult East Asian woman in a red gown", kicker: "Crimson Hour",
    title: "Express boldly, deliver elegantly", description: "Rich crimson and warm golden light bring confident sophistication to every clear and decisive idea.",
    noteCopy: "Fictional adult · AI-generated", composer: "Refine the work with the crimson muse", placeholder: "Share your concept and we will begin with its strongest idea…", caption: "Red satin, warm gold, and quiet confidence"
  },
  lofteditorial: {
    name: "Afternoon Loft", alt: "Fashion hero image of a fictional adult blonde woman in a modern loft", kicker: "Afternoon Light",
    title: "Simple can still be captivating", description: "A white shirt, black trousers, and natural afternoon light make complex problems feel clear again.",
    noteCopy: "Fictional adult · AI-generated", composer: "Clarify ideas with the afternoon muse", placeholder: "Leave the problem here and we will untangle it step by step…", caption: "White shirt, modern loft, and soft daylight"
  },
  neonsilver: {
    name: "Neon Silver", alt: "Fashion hero image of a fictional adult dark-haired woman in silver-blue neon", kicker: "Silver-Blue Night",
    title: "Stay calm and keep your edge", description: "Silver, midnight blue, and cyan-violet neon create a futuristic space for clear judgment and vivid expression.",
    noteCopy: "Fictional adult · AI-generated", composer: "Build with the silver-blue muse", placeholder: "Enter a task and begin a clear, confident build…", caption: "Silver dress, midnight blue, and neon"
  },
  liuyifei: {
    name: "Liu Yifei", alt: "Liu Yifei at a public Beijing International Film Festival event", kicker: "Pink and Blue Light",
    title: "Write inspiration with clarity", description: "A light pink-and-blue interface brings your focus back to the task that matters most.",
    noteCopy: "Open-licensed event photo theme", composer: "Create in the Liu Yifei theme", placeholder: "Write down the one thing you most want to finish today…", caption: "Pink gown and blue festival light"
  },
  zhangziyi: {
    name: "Zhang Ziyi", alt: "Zhang Ziyi at a public Venice Film Festival event", kicker: "Black-Silver Cinema",
    title: "Turn complexity into certainty", description: "Restrained black, silver, and warm gold narrow the choices to the path worth pursuing.",
    noteCopy: "Open-licensed event photo theme", composer: "Move the task forward in the Zhang Ziyi theme", placeholder: "Enter the goal, constraints, and deadline…", caption: "Black velvet and festival light"
  },
  zhouxun: {
    name: "Zhou Xun", alt: "Zhou Xun at a public awards event", kicker: "Classic Negative Space",
    title: "Make room for a sharp idea", description: "Black, white, and warm beige create a quiet background where ideas stay light and distinctive.",
    noteCopy: "Open-licensed event photo theme", composer: "Organize inspiration in the Zhou Xun theme", placeholder: "Write down the idea and we will shape it into a clear piece…", caption: "Classic monochrome and warm beige"
  },
  fanbingbing: {
    name: "Fan Bingbing", alt: "Fan Bingbing at a public Berlin International Film Festival event", kicker: "Ivory, Gold, and Emerald",
    title: "Let detail become expression", description: "Ivory, gilded gold, and emerald create a polished space that turns each step into a visible result.",
    noteCopy: "Open-licensed event photo theme", composer: "Refine the work in the Fan Bingbing theme", placeholder: "Tell me the goal and we will begin with the key details…", caption: "Ivory, gilded gold, and emerald"
  },
  annehathaway: {
    name: "Anne Hathaway", alt: "Anne Hathaway at a public Berlin International Film Festival event", kicker: "Midnight Blue",
    title: "Let inspiration grow naturally", description: "Dark hair, black styling, and midnight blue create an elegant space for turning complex thoughts into clear expression.",
    noteCopy: "Open-licensed event photo theme", composer: "Create in the Anne Hathaway theme", placeholder: "Describe your idea and we will begin with a clear structure…", caption: "Dark hair, black styling, and midnight blue"
  },
  emmawatson: {
    name: "Emma Watson", alt: "Emma Watson at a public Tribeca Film Festival event", kicker: "Monochrome Edge",
    title: "Reason can be elegant", description: "Clean monochrome styling and a bright close-up keep thought, judgment, and expression connected.",
    noteCopy: "Open-licensed event photo theme", composer: "Clarify ideas in the Emma Watson theme", placeholder: "Write down the problem and we will turn it into verifiable steps…", caption: "Bright close-up and crisp monochrome styling"
  },
  margotrobbie: {
    name: "Margot Robbie", alt: "Margot Robbie at a public film premiere event", kicker: "White Lace",
    title: "Turn bold ideas into finished work", description: "A white gown, golden light, and a natural smile bring bright energy that moves ideas into action.",
    noteCopy: "Open-licensed event photo theme", composer: "Advance the idea in the Margot Robbie theme", placeholder: "Enter a bold idea and we will move it toward a visible result…", caption: "White gown, golden light, and a bright smile"
  },
  scarlettjohansson: {
    name: "Scarlett Johansson", alt: "Scarlett Johansson at a public Cannes WikiPortraits event", kicker: "Silver-Blue Sea Breeze",
    title: "Stay calm and move with precision", description: "Silver-blue tailoring, bright sky, and a natural smile create a fresh interface focused on what matters.",
    noteCopy: "Open-licensed event photo theme", composer: "Complete the task in the Scarlett Johansson theme", placeholder: "Share the goal and constraints, and we will address the key issue…", caption: "Silver-blue tailoring, bright sky, and a natural smile"
  }
};

const uiCopy = {
  zh: {
    pageTitle: "Codex Muse · 美女主题皮肤库", brandSubtitle: "灵感皮肤库", mainNavLabel: "主导航",
    newTask: "新建任务", scheduled: "已安排", favorites: "主题收藏", codeLab: "代码实验室",
    themeCloset: "皮肤衣橱", chooseThemeLabel: "选择人物主题", onlineLabel: "在线", workspace: "主题工作台",
    randomTheme: "随心换装", startTask: "开始新任务", browseThemes: "浏览全部皮肤", featuresLabel: "快捷能力",
    exploreCode: "探索代码", exploreCodeDesc: "理解陌生项目和复杂逻辑", buildFeatures: "构建功能", buildFeaturesDesc: "把想法变成应用或工具",
    reviewChanges: "审查改动", reviewChangesDesc: "发现风险并给出清晰建议", fixIssues: "修复问题", fixIssuesDesc: "定位根因并完成可靠验证",
    taskInputLabel: "任务输入", addAttachmentLabel: "添加附件", fullAccess: "♡ 完全访问⌄", sendLabel: "发送",
    sourceNote: "新增时尚主题均为明确成年、虚构人物的 AI 原创图；真人主题使用 Wikimedia Commons 开放许可照片。",
    sourceLink: "查看图片来源、生成说明和许可信息", drawerTitle: "挑选今天的灵感缪斯", closeLabel: "关闭",
    enabled: "已启用", saved: "已自动保存", restored: "已恢复上次选择", applied: "本次选择已生效", languageSaved: "语言偏好已保存", ready: "准备就绪"
  },
  en: {
    pageTitle: "Codex Muse · Theme Gallery", brandSubtitle: "INSPIRATION THEMES", mainNavLabel: "Main navigation",
    newTask: "New task", scheduled: "Scheduled", favorites: "Theme favorites", codeLab: "Code lab",
    themeCloset: "Theme closet", chooseThemeLabel: "Choose a portrait theme", onlineLabel: "Online", workspace: "Theme workspace",
    randomTheme: "Surprise me", startTask: "Start a new task", browseThemes: "Browse all themes", featuresLabel: "Quick capabilities",
    exploreCode: "Explore code", exploreCodeDesc: "Understand unfamiliar projects and complex logic", buildFeatures: "Build features", buildFeaturesDesc: "Turn ideas into apps and tools",
    reviewChanges: "Review changes", reviewChangesDesc: "Find risks and suggest clear improvements", fixIssues: "Fix issues", fixIssuesDesc: "Find root causes and verify the result",
    taskInputLabel: "Task input", addAttachmentLabel: "Add attachment", fullAccess: "♡ Full access⌄", sendLabel: "Send",
    sourceNote: "New fashion themes use AI-generated images of fictional adults; celebrity themes use open-licensed Wikimedia Commons event photographs.",
    sourceLink: "View image sources, generation notes, and licenses", drawerTitle: "Choose today's inspiration muse", closeLabel: "Close",
    enabled: "enabled", saved: "Automatically saved", restored: "Previous choice restored", applied: "Applied for this session", languageSaved: "Language preference saved", ready: "Ready"
  }
};

const storageKey = "codex-muse-theme";
const languageStorageKey = "codex-muse-language";
let currentLanguage = "zh";
const hero = document.querySelector(".hero");
const themeChoices = [...document.querySelectorAll("[data-theme-choice]")];
const drawer = document.querySelector("#theme-drawer");
const drawerGrid = document.querySelector("#drawer-grid");
const ids = ["hero-image", "theme-symbol", "hero-kicker", "hero-title", "hero-description", "note-title", "note-copy", "composer-heading", "composer", "topbar-title", "current-theme-label", "saved-state"];
const elements = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
const languageToggle = document.querySelector("#language-toggle");

function getThemeCopy(key) {
  return currentLanguage === "en" ? { ...themes[key], ...themeCopyEn[key] } : themes[key];
}

function translateStaticUi() {
  const copy = uiCopy[currentLanguage];
  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", copy[element.dataset.i18nAriaLabel]);
  });
  languageToggle.textContent = currentLanguage === "en" ? "中文" : "EN";
  languageToggle.setAttribute("aria-label", currentLanguage === "en" ? "切换到中文" : "Switch to English");
}

function applyTheme(key, { persist = true, status = persist ? "saved" : "restored" } = {}) {
  const resolvedKey = themes[key] ? key : "berry";
  const theme = getThemeCopy(resolvedKey);
  const copy = uiCopy[currentLanguage];
  hero.classList.add("is-changing");
  hero.classList.toggle("portrait-theme", Boolean(theme.portrait));
  hero.classList.toggle("editorial-theme", Boolean(theme.editorial));
  hero.style.setProperty("--portrait-image", `url("${theme.image}")`);
  hero.style.setProperty("--image-position", theme.imagePosition || "center");
  document.body.dataset.theme = resolvedKey;

  elements["hero-image"].src = theme.image;
  elements["hero-image"].alt = theme.alt;
  elements["theme-symbol"].textContent = theme.symbol;
  elements["hero-kicker"].textContent = theme.kicker;
  elements["hero-title"].textContent = theme.title;
  elements["hero-description"].textContent = theme.description;
  elements["note-title"].textContent = theme.noteTitle;
  elements["note-copy"].textContent = theme.noteCopy;
  elements["composer-heading"].textContent = theme.composer;
  elements.composer.placeholder = theme.placeholder;
  elements["topbar-title"].textContent = theme.name;
  elements["current-theme-label"].textContent = currentLanguage === "en" ? `${theme.name} ${copy.enabled}` : `${theme.name}${copy.enabled}`;
  elements["saved-state"].textContent = copy[status];

  themeChoices.forEach((button) => {
    const buttonTheme = getThemeCopy(button.dataset.themeChoice);
    const active = button.dataset.themeChoice === resolvedKey;
    button.querySelector("img").alt = buttonTheme.alt;
    button.querySelector("strong").textContent = buttonTheme.name;
    button.querySelector("small").textContent = buttonTheme.caption;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-drawer-theme]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.drawerTheme === resolvedKey));
  });

  if (persist) {
    try {
      localStorage.setItem(storageKey, resolvedKey);
    } catch {
      elements["saved-state"].textContent = copy.applied;
    }
  }
  window.setTimeout(() => hero.classList.remove("is-changing"), 220);
}

function buildDrawer() {
  drawerGrid.replaceChildren(...Object.keys(themes).map((key) => {
    const theme = getThemeCopy(key);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "drawer-theme";
    button.dataset.drawerTheme = key;
    button.style.backgroundImage = `url("${theme.image}")`;
    button.setAttribute("aria-label", `${theme.name}: ${theme.caption}`);
    button.innerHTML = `<span><strong>${theme.name}</strong><small>${theme.caption}</small></span>`;
    button.addEventListener("click", () => {
      applyTheme(key);
      drawer.close();
    });
    return button;
  }));
}

function applyLanguage(language, { persist = true } = {}) {
  currentLanguage = language === "en" ? "en" : "zh";
  translateStaticUi();
  buildDrawer();
  applyTheme(document.body.dataset.theme || "berry", { persist: false, status: persist ? "languageSaved" : "ready" });
  if (persist) {
    try {
      localStorage.setItem(languageStorageKey, currentLanguage);
    } catch {
      elements["saved-state"].textContent = uiCopy[currentLanguage].applied;
    }
  }
}

themeChoices.forEach((button) => button.addEventListener("click", () => applyTheme(button.dataset.themeChoice)));
document.querySelector("#open-drawer").addEventListener("click", () => drawer.showModal());
languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "zh" ? "en" : "zh"));
document.querySelector("#random-theme").addEventListener("click", () => {
  const keys = Object.keys(themes);
  const currentIndex = keys.indexOf(document.body.dataset.theme);
  const offset = 1 + Math.floor(Math.random() * (keys.length - 1));
  applyTheme(keys[(currentIndex + offset) % keys.length]);
});

let savedTheme = null;
let savedLanguage = null;
try {
  savedTheme = localStorage.getItem(storageKey);
  savedLanguage = localStorage.getItem(languageStorageKey);
} catch {
  savedTheme = null;
  savedLanguage = null;
}
currentLanguage = savedLanguage === "en" ? "en" : "zh";
translateStaticUi();
buildDrawer();
applyTheme(themes[savedTheme] ? savedTheme : "berry", { persist: false, status: savedTheme ? "restored" : "ready" });
