export const linksEn = [
  { href: "schedule", title: "schedule" },
  { href: "contribution", title: "call for contribution" },
  { href: "conference", title: "conference fee" },
  { href: "venue", title: "venue" },
  { href: "contact", title: "contact" },
];
export const linksUz = [
  { href: "schedule", title: "kun tartibi" },
  { href: "contribution", title: "konferensiya sho'balari" },
  { href: "conference", title: "maqolalar to'lovi" },
  { href: "venue", title: "manzil" },
  { href: "contact", title: "aloqa" },
];
export const linksRu = [
  { href: "schedule", title: "График" },
  { href: "contribution", title: "Секции конференции" },
  { href: "conference", title: "Взнос публикации" },
  { href: "venue", title: "Адрес" },
  { href: "contact", title: "Контакты" },
];

export const languages = ["en", "ru", "uz"];

export const fallbackLng = "en";

export const setLang = (lang) => {
  localStorage.setItem("language", lang);
};

export const getLang = () => {
  let lang = localStorage.getItem("language");

  if (lang === "en" || lang === "ru" || lang === "uz") return lang;
  return fallbackLng;
};