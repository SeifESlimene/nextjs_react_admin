import polyglotI18nProvider from "ra-i18n-polyglot";
import { en, fr } from "../i18n";

const translations = { en, fr };

export const i18nProvider = polyglotI18nProvider(
  (locale) => (translations[locale] ? translations[locale] : translations.en),
  "en"
);
