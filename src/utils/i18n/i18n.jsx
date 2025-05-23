import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";
import deLang from "./locales/de/de.json";

const resources = {
  en: {
    translation: enLang,
  },
  de: {
    translation: deLang,
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;