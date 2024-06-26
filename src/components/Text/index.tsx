import { useCallback, useEffect } from "react";
import { useHandlesManager } from "src/core/HandlerManager/hooks";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.css";

export function Text() {
    const { t } = useTranslation();

    const { callEvent } = useHandlesManager();
    console.log({ styles });
    useEffect(() => {
        // callEventOnce("mounted");
        // callEvent("fakeModuleMounted", { hello: 42 });
    }, []);

    const handleOnClickCallback = useCallback(() => {
        callEvent("mounted");
    }, [callEvent]);

    return (
        <button onClick={handleOnClickCallback}>
            {t("components.Text.click")}
        </button>
    );
}
