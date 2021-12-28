import { AppService } from '../../services';
import { AppStore } from '../../stores';

export class FakeLocalStore {
  private appStore: AppStore;
  private appService: AppService;

  public constructor(appStore: AppStore, appService: AppService) {
    this.appStore = appStore;
    this.appService = appService;
  }
}