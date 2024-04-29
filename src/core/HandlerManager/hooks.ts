import React from "react";
import { HandlersManagerContext } from "src/core/HandlerManager/HandlerManagerContext";

export const useHandlesManager = () => React.useContext(HandlersManagerContext);
