import { useLocalStore } from "mobx-react";
import { useService, useStore } from "../../hooks";
import { FakeLocalStore } from "./FakeLocalStore";
import { Text } from "../../components";

function Fake() {
    const appService = useService("AppService");
    const appStore = useStore("AppStore");
    const fakeStore = useLocalStore(
        () => new FakeLocalStore(appStore, appService)
    );

    console.log(fakeStore);

    return (
        <div>
            <Text />
        </div>
    );
}

export const FakeModule = Fake;
