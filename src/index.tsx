import React, { useState, useEffect, useRef } from "react";
import {
    TranslationProvider,
    useTranslationChange,
    useTranslation,
} from "i18nano";
import { createRoot } from "react-dom/client";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import createGlobalServices from "./services/utils/createGlobalServices";
import createGlobalStores from "./stores/utils/createGlobalStores";

import { FeatureFlagProvider } from "./core/FeatureFlagManager/FeatureFlagProvider";
import { getLocales } from "./locales";
import { getDefaultFeatureFlags } from "./defaultFeatureFlags";

export async function initialize(): Promise<any> {
    const transport = {};

    const stores = createGlobalStores(transport);
    const services = createGlobalServices();
    const featureFlags = await getDefaultFeatureFlags();
    const translations = await getLocales();

    const promise = new Promise(async (resolve) => {
        setTimeout(() => {
            resolve({
                stores: stores,
                services: services,
                featureFlags: featureFlags,
                translations: translations,
            });
        }, 1000);
    });

    return promise;
}

export function RenderApp() {
    const [initialized, setInitialized] = useState(false);
    const ref = useRef<any>();

    useEffect(() => {
        const initializeAsync = async () => {
            const { stores, services, featureFlags, translations } =
                await initialize();

            ref.current = {
                stores: stores,
                services: services,
                featureFlags: featureFlags,
                translations: translations,
            };

            setInitialized(true);
        };

        initializeAsync();
    }, []);

    return initialized ? (
        <Provider stores={ref.current.stores} services={ref.current.services}>
            <React.StrictMode>
                <FeatureFlagProvider
                    initialFeatureFlags={ref.current.featureFlags}
                >
                    <TranslationProvider
                        language="en"
                        translations={ref.current.translations}
                    >
                        <App />
                    </TranslationProvider>
                </FeatureFlagProvider>
            </React.StrictMode>
        </Provider>
    ) : (
        <div>loading</div>
    );
}

createRoot(document.getElementById("root")!).render(<RenderApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
