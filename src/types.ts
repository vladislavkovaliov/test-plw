import { Stores } from "src/stores/types";
import { Services } from "src/services/types";

export interface AppOptions {
    services: Services;
    stores: Stores;
}
