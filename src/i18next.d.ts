import en from "src/i18n/en/translation.json";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: "en";
        resources: {
            en: typeof en;
        };
    }
}
