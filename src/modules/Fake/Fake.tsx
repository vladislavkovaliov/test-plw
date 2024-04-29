import { useLocalStore } from "mobx-react";
import { useService, useStore } from "src/hooks";
import { FakeLocalStore } from "./FakeLocalStore";
import { Text } from "src/components";
import { HandlersManagerProvider } from "src/core/HandlerManager";

function Fake() {
    const appService = useService("AppService");
    const appStore = useStore("AppStore");
    const fakeStore = useLocalStore(
        () => new FakeLocalStore(appStore, appService),
    );

    console.log(fakeStore);

    return (
        <HandlersManagerProvider
            handlers={{
                mounted: [
                    () => {
                        console.log("<Text /> is mounted 1");
                    },
                    () => {
                        console.log("<Text /> is mounted 2");
                    },
                ],
                fakeModuleMounted: (arg) => {
                    console.log(arg);
                },
            }}
        >
            <div>
                <Text />
            </div>
        </HandlersManagerProvider>
    );
}

export const FakeModule = Fake;
