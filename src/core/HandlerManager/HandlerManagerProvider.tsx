import React, { useCallback } from "react";

import { HandlersManagerContext } from "src/core/HandlerManager/HandlerManagerContext";
import {
    EventId,
    CallEventExtaArguments,
    AnyFunction,
} from "src/core/HandlerManager/types";

export interface IHandlerManagerProvider {
    children: JSX.Element;
    handlers: Record<string, AnyFunction | AnyFunction[]>;
}

export const HandlersManagerProvider: React.FC<IHandlerManagerProvider> = ({
    children,
    handlers,
}) => {
    const handleCallEventCallback = useCallback(
        (id: EventId, params: CallEventExtaArguments) => {
            const fns = handlers[id];

            if (!fns) {
                throw Error(`handler with id = ${id} is not registered.`);
            }

            if (Array.isArray(fns)) {
                fns.map((fn) => fn({ params }));
            } else if (typeof fns === "function") {
                fns({ params });
            } else {
                return;
            }
        },
        [handlers],
    );

    const handleCallEventOnceCallback = useCallback(
        (id: EventId, params: CallEventExtaArguments) => {
            handleCallEventCallback(id, params);

            delete handlers[id];
        },
        [handlers, handleCallEventCallback],
    );

    return (
        <HandlersManagerContext.Provider
            value={{
                callEvent: handleCallEventCallback,
                callEventOnce: handleCallEventOnceCallback,
            }}
        >
            {children}
        </HandlersManagerContext.Provider>
    );
};
