/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 4000,
    },
    plugins: [react(), svgrPlugin()],
    base: "./",
    resolve: {
        alias: {
            src: "/src",
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: [],
        mockReset: false,
        coverage: {
            // you can include other reporters, but 'json-summary' is required, json is recommended
            reporter: ["text", "json-summary", "json"],
        },
        poolOptions: {
            threads: {
                maxWorkers: 2,
            },
        },
    },
});
