import React from "react";

import { IFeatureFlagManagerContextProps } from "src/core/FeatureFlagManager/types";

export const FeatureFlagContext =
    React.createContext<IFeatureFlagManagerContextProps>({
        updateFeatureFlag: () => undefined,
        flags: {},
    });
