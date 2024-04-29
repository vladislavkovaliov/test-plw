import { AppService } from "src/services";
import { AppStore } from "src/stores";

export class FakeLocalStore {
    private appStore: AppStore;
    private appService: AppService;

    public constructor(appStore: AppStore, appService: AppService) {
        this.appStore = appStore;
        this.appService = appService;
    }
}
