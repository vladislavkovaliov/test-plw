export function getLocales() {
    return {
        en: async () => {
            const response = await fetch("/assets/langs/en.json");
            const json = await response.json();

            return json;
        },
        ru: async () => {
            const response = await fetch("/assets/langs/ru.json");
            const json = await response.json();

            return json;
        },
    };
}
