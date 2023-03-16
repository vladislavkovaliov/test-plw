import React from "react";
import { FeatureFlagContext } from "./FeatureFlagContext";
import { useFeatureFlags } from "./hooks";

export interface IFeatureFlagProps {
    children: JSX.Element;
    name: string;
}

export function FeatureFlag({ children, name }: IFeatureFlagProps) {
    const { flags } = useFeatureFlags();

    return flags[name] ? children : null;
}
