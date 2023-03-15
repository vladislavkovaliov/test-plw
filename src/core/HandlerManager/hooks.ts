import React from "react";
import { HandlersManagerContext } from "./HandlerManagerContext";

export const useHandlesManager = () => React.useContext(HandlersManagerContext);
