/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 4000,
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
        coverage: {
            reporter: ["text", "html"],
            exclude: ["node_modules/", "src/setupTests.ts"],
        },
    },
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
