import { useCallback, useEffect } from "react";
import { useHandlesManager } from "../../core/HandlerManager/hooks";

import styles from "./Text.module.scss";

export function Text() {
    const { callEvent, callEventOnce } = useHandlesManager();

    useEffect(() => {
        // callEventOnce("mounted");
        // callEvent("fakeModuleMounted", { hello: 42 });
    }, []);

    const handleOnClickCallback = useCallback(() => {
        callEvent("mounted");
    }, []);

    return <button onClick={handleOnClickCallback}>click</button>;
}
