import React from "react";
import { useService, useStore } from "src/hooks";
import { FakeModule } from "src/modules";

function App() {
    const appService = useService("AppService");
    const appStore = useStore("AppStore");

    console.log(appService, appStore);
    console.log("app render");

    return (
        <div>
            <FakeModule />
        </div>
    );
}

export default App;
