import { createGlobalStores } from "./createGlobalStores";
import { MockStore } from "../MockStore";
import { ModuleStores } from "../types";

describe("[createGlobalStores.ts]", () => {
    it("should return global stores object with mock store", () => {
        const stores = {
            MockStore: MockStore,
        } as unknown as ModuleStores;

        const result = createGlobalStores(stores, {});

        expect(result).toHaveProperty("MockStore");
    });
});
