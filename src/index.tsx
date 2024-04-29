import React, { useState, useEffect, useRef } from "react";
import { TranslationProvider } from "i18nano";
import { createRoot } from "react-dom/client";
import { Provider } from "mobx-react";
import "./index.css";
import App from "src/App";
import reportWebVitals from "src/reportWebVitals";

import createGlobalServices from "src/services/utils/createGlobalServices";
import createGlobalStores from "src/stores/utils/createGlobalStores";

import { FeatureFlagProvider } from "src/core/FeatureFlagManager/FeatureFlagProvider";
import { getLocales } from "src/locales";
import { getDefaultFeatureFlags } from "src/defaultFeatureFlags";

export async function initialize(): Promise<any> {
    const transport = {};
    console.log(42);
    const stores = createGlobalStores(transport);
    const services = createGlobalServices();
    const featureFlags = await getDefaultFeatureFlags();
    const translations = await getLocales();

    const promise = new Promise((resolve) => {
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
            <FeatureFlagProvider initialFeatureFlags={ref.current.featureFlags}>
                <TranslationProvider
                    language="en"
                    translations={ref.current.translations}
                >
                    <App />
                </TranslationProvider>
            </FeatureFlagProvider>
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
