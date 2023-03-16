import React from "react";
import { FeatureFlagContext } from "./FeatureFlagContext";

export const useFeatureFlags = () => React.useContext(FeatureFlagContext);
