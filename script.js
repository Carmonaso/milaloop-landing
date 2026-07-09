document.getElementById("year").textContent = new Date().getFullYear();

const translations = {
  en: {
    badge: "Under Construction",
    tagline: "Something new is being built.",
    subtext: "We're working hard behind the scenes to bring Milaloop to life. Stay tuned — we'll be here soon.",
    rights: "All rights reserved.",
  },
  es: {
    badge: "En Construcción",
    tagline: "Algo nuevo se está creando.",
    subtext: "Estamos trabajando arduamente entre bastidores para dar vida a Milaloop. Mantente atento — pronto estaremos aquí.",
    rights: "Todos los derechos reservados.",
  },
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("milaloop-lang", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

const savedLang = localStorage.getItem("milaloop-lang");
const browserLang = navigator.language?.slice(0, 2) === "es" ? "es" : "en";
applyLanguage(savedLang || browserLang);
