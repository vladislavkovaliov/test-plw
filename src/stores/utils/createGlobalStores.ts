import * as stores from "src/stores";
import { ModuleStores, StoreName, Stores } from "src/stores/types";

export function createGlobalStores(globalStores: ModuleStores, transport: any) {
    return Object.keys(globalStores).reduce(
        // @ts-expect-error Need to build stores object
        (table: Stores, name: StoreName) => {
            // @ts-expect-error Need to build stores object
            table[name] = new globalStores[name](transport);

            return table;
        },
        {} as Stores,
    );
}

export default (transport: any) => createGlobalStores(stores, transport);
