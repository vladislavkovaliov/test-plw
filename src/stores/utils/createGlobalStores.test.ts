import { describe, test, expect } from "vitest";

import { createGlobalStores } from "src/stores/utils/createGlobalStores";
import { MockStore } from "src/stores/MockStore";
import { ModuleStores } from "src/stores/types";

describe("[createGlobalStores.ts]", () => {
    test("should return global stores object with mock store", () => {
        const stores = {
            MockStore: MockStore,
        } as unknown as ModuleStores;

        const result = createGlobalStores(stores, {});

        expect(result).property("MockStore");
    });
});
