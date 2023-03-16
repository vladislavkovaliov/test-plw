import React, { useState, useEffect, useCallback } from "react";
import { useService, useStore } from "./hooks";
import { FakeModule } from "./modules";

import { useFeatureFlags } from "./core/FeatureFlagManager/hooks";
import { FeatureFlag } from "./core/FeatureFlagManager/FeatureFlag";

function App() {
    const appService = useService("AppService");
    const appStore = useStore("AppStore");
    const { flags } = useFeatureFlags();

    console.log(appService, appStore, flags);

    return (
        <div>
            <FakeModule />
        </div>
    );
}

export default App;
