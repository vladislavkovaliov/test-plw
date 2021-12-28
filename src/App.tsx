import React from "react";
import { useService, useStore } from "./hooks";
import { FakeModule } from "./modules";

function App() {
    const appService = useService("AppService");
    const appStore = useStore("AppStore");
    console.log(appService, appStore);

    return (
        <div>
            <FakeModule />
        </div>
    );
}

export default App;
