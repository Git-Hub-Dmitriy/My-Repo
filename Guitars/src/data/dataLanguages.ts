export const locales = ["en", "de"];
export const defaultLocale = "en";
export const dictionaries = {
  en: () => import("@data/en").then((module) => module.en),
  de: () => import("@data/de").then((module) => module.de),
};
export const localesHeader = ["EN", "DE"];
export const staticParams = [{ locale: "en" }, { locale: "de" }];
