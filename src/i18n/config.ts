import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/translation.json";

export const defaultNS = "en";
export const resources = {
    en: {
        en,
    },
} as const;

i18next.use(initReactI18next).init(
    {
        debug: true,
        fallbackLng: "en",
        defaultNS: "en",
        resources: {
            en: {
                en: en,
            },
        },
    } as InitOptions,
    () => {},
);
