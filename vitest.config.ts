import { defineConfig as defineVitestConfig } from "vitest/config";

export default defineVitestConfig({
    test: {
        environment: "jsdom",
    },
});
