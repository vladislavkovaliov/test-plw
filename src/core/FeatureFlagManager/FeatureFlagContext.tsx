import React, { useCallback } from "react";

import { IFeatureFlagManagerContextProps } from "./types";

export const FeatureFlagContext =
    React.createContext<IFeatureFlagManagerContextProps>({
        updateFeatureFlag: () => undefined,
        flags: {},
    });
