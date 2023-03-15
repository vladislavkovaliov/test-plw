import React, { useCallback } from "react";

import { AnyFunction, EventId, CallEventExtaArguments } from "../types";

// TODO: import lodash or defined it in utils
const noop = () => undefined;

export interface IHandlerManagerContext {
    callEvent: AnyFunction;
    callEventOnce: AnyFunction;
}

export const HandlersManagerContext =
    React.createContext<IHandlerManagerContext>({
        callEvent: noop,
        callEventOnce: noop,
    });
