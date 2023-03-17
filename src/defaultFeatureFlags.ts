export async function getDefaultFeatureFlags(): Promise<
    Record<string, boolean>
> {
    return {
        feature1: true,
    };
}
