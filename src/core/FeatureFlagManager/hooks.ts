import React from "react";
import { FeatureFlagContext } from "src/core/FeatureFlagContext";

export const useFeatureFlags = () => React.useContext(FeatureFlagContext);
