const STORAGE_KEY = "nw_lang";

const dict = {
  en: {
    nav: { services: "Services", about: "About", contact: "Contact", quote: "Get a quote" },
    hero: {
      pill: "Digital Agency • UI/UX • Web Development",
      title: "Build a clean, fast and modern web presence for your business.",
      desc: "NovaWave helps startups and small teams launch high-quality websites — focused on clarity, performance, and conversion.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View services",
      stat1: { value: "+48%", label: "avg. conversion uplift" },
      stat2: { value: "2–3 weeks", label: "delivery for MVP sites" },
      stat3: { value: "90+", label: "performance score focus" },
      mockTitle: "Project dashboard",
      mockStatus: "Live",
      tile1: { title: "Landing Page", desc: "Clean sections, CTA flow, responsive layout." },
      tile2: { title: "Brand System", desc: "Typography, colors, components, consistency." },
      tile3: { title: "SEO Basics", desc: "Semantic HTML, meta, speed optimizations." },
      tile4: { title: "Analytics", desc: "Track events, test copy, improve conversions." }
    },
    services: {
      title: "Services that move the needle",
      subtitle: "Practical deliverables for freelance and agency-style work — perfect for a frontend developer portfolio.",
      card1: { title: "UI/UX Design", desc: "Minimal interfaces with clear hierarchy and readable typography.", li1: "Wireframes → polished UI", li2: "Component-based layout", li3: "Accessible patterns" },
      card2: { title: "Frontend Development", desc: "Responsive landing pages with clean HTML, CSS, and just enough JS.", li1: "Semantic HTML5", li2: "Flexbox / Grid", li3: "Performance-first" },
      card3: { title: "SEO & Optimization", desc: "Solid SEO basics + speed improvements that help discoverability.", li1: "Meta + structure", li2: "Core Web Vitals mindset", li3: "Content guidance" }
    },
    about: {
      title: "About NovaWave",
      subtitle: "A small digital team building modern websites with a product mindset: clear messaging, clean UI, maintainable code.",
      desc: "This project is intentionally framework-free. It shows strong fundamentals: structure, responsiveness, and readable CSS/JS.",
      p1: { title: "Transparent process", desc: "Kickoff → design → build → launch, with clear milestones." },
      p2: { title: "Clean code standards", desc: "Reusable classes, accessible markup, and tidy file structure." },
      p3: { title: "Business-first thinking", desc: "We prioritize clarity and conversion over visual noise." }
    },
    contact: {
      title: "Let’s talk",
      subtitle: "Demo form (no backend). Minimal JS handles validation and a friendly success toast.",
      cardTitle: "Contact details",
      cardDesc: "Replace placeholders with your email/socials.",
      emailLabel: "Email:",
      locationLabel: "Location:",
      availLabel: "Availability:"
    },
    form: { nameLabel: "Name", emailLabel: "Email", subjectLabel: "Subject", messageLabel: "Message", submit: "Send message" },
    footer: { rights: "All rights reserved." },
    msg: {
      name: "Please enter your name (min 2 characters).",
      email: "Please enter a valid email address.",
      subject: "Please enter a subject (min 3 characters).",
      message: "Message should be at least 10 characters.",
      sentTitle: "Message sent!",
      sentDesc: "Demo form. Hook it up to a backend/email service when deploying."
    }
  },

  ru: {
    nav: { services: "Услуги", about: "О нас", contact: "Контакты", quote: "Оценить проект" },
    hero: {
      pill: "Digital Agency • UI/UX • Web Development",
      title: "Сделаем чистый, быстрый и современный сайт для вашего бизнеса.",
      desc: "NovaWave помогает стартапам и небольшим командам запускать качественные сайты — с фокусом на ясность, скорость и конверсию.",
      ctaPrimary: "Начать проект",
      ctaSecondary: "Посмотреть услуги",
      stat1: { value: "+48%", label: "рост конверсии в среднем" },
      stat2: { value: "2–3 недели", label: "срок MVP-лендинга" },
      stat3: { value: "90+", label: "упор на скорость" },
      mockTitle: "Панель проекта",
      mockStatus: "Онлайн",
      tile1: { title: "Лендинг", desc: "Чёткие блоки, логика CTA, адаптив." },
      tile2: { title: "Бренд-система", desc: "Шрифты, цвета, компоненты, единый стиль." },
      tile3: { title: "SEO-основа", desc: "Семантика, мета-теги, оптимизация." },
      tile4: { title: "Аналитика", desc: "События, гипотезы, улучшение конверсии." }
    },
    services: {
      title: "Услуги, которые дают результат",
      subtitle: "Практичные решения для фриланса/агентства — отличный кейс для портфолио фронтенд-разработчика.",
      card1: { title: "UI/UX дизайн", desc: "Минимализм, понятная иерархия, аккуратная типографика.", li1: "Вайрфреймы → финальный UI", li2: "Компонентный подход", li3: "Доступность (a11y)" },
      card2: { title: "Frontend-разработка", desc: "Адаптивные лендинги на чистых HTML/CSS и минимальном JS.", li1: "Семантический HTML5", li2: "Flexbox / Grid", li3: "Фокус на производительность" },
      card3: { title: "SEO и оптимизация", desc: "База SEO + ускорение загрузки для лучшей видимости.", li1: "Мета + структура", li2: "Подход Core Web Vitals", li3: "Рекомендации по контенту" }
    },
    about: {
      title: "О NovaWave",
      subtitle: "Небольшая digital-команда: ясные смыслы, чистый UI и поддерживаемый код.",
      desc: "Этот проект специально без фреймворков — показывает основу: структуру, адаптив и понятный CSS/JS.",
      p1: { title: "Прозрачный процесс", desc: "Бриф → дизайн → разработка → запуск, с понятными шагами." },
      p2: { title: "Качество кода", desc: "Переиспользуемые классы, аккуратная разметка, понятная структура." },
      p3: { title: "Смысл важнее шума", desc: "Упор на ясность, CTA и конверсию — без перегруза." }
    },
    contact: {
      title: "Связаться",
      subtitle: "Демо-форма (без бэкенда). Мини-JS делает валидацию и уведомление об успехе.",
      cardTitle: "Контакты",
      cardDesc: "Замените заглушки на ваш email/соцсети.",
      emailLabel: "Email:",
      locationLabel: "Локация:",
      availLabel: "Доступность:"
    },
    form: { nameLabel: "Имя", emailLabel: "Почта", subjectLabel: "Тема", messageLabel: "Сообщение", submit: "Отправить" },
    footer: { rights: "Все права защищены." },
    msg: {
      name: "Введите имя (минимум 2 символа).",
      email: "Введите корректный email.",
      subject: "Укажите тему (минимум 3 символа).",
      message: "Сообщение должно быть не короче 10 символов.",
      sentTitle: "Сообщение отправлено!",
      sentDesc: "Это демо. Подключите отправку к бэкенду/почтовому сервису при деплое."
    }
  }
};

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] != null ? acc[key] : null), obj);
}

function applyTranslations(lang) {
  const pack = dict[lang] || dict.en;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = getByPath(pack, key);
    if (typeof value === "string") node.textContent = value;
  });

  const name = document.getElementById("name");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  if (lang === "ru") {
    if (name) name.placeholder = "Ваше имя";
    if (subject) subject.placeholder = "Лендинг, редизайн и т.д.";
    if (message) message.placeholder = "Опишите задачу, сроки и референсы...";
  } else {
    if (name) name.placeholder = "Your name";
    if (subject) subject.placeholder = "Landing page, redesign, etc.";
    if (message) message.placeholder = "Tell me about your goals and timeline...";
  }
}

export function initI18n() {
  const btn = document.getElementById("langBtn");
  const label = document.getElementById("langLabel");
  if (!btn || !label) return;

  const saved = localStorage.getItem(STORAGE_KEY);
  let currentLang = saved === "ru" || saved === "en" ? saved : "en";

  // simple global access for form messages
  window.__NW_I18N__ = {
    getLang: () => currentLang,
    getMsg: (key) => getByPath(dict[currentLang] || dict.en, key)
  };

  applyTranslations(currentLang);
  label.textContent = currentLang.toUpperCase();

  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ru" : "en";
    localStorage.setItem(STORAGE_KEY, currentLang);
    applyTranslations(currentLang);
    label.textContent = currentLang.toUpperCase();
  });
}
