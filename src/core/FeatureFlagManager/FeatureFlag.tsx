import { useEffect } from "react";
import { useFeatureFlags } from "./hooks";

export interface IFeatureFlagProps {
    children: JSX.Element;
    name: string;
    override?: { name: string; value: boolean };
}

export function FeatureFlag({ children, name, override }: IFeatureFlagProps) {
    const { flags, updateFeatureFlag } = useFeatureFlags();

    useEffect(() => {
        if (override) {
            updateFeatureFlag(override.name, override.value);
        }
    }, []);

    return flags[name] ? children : null;
}
