import React from "react";

import {
    AnyFunction,
    EventId as _EventId,
    CallEventExtaArguments as _CallEventExtaArguments,
} from "src/core/HandlerManager/types";

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
