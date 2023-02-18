import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    alias: {
      "@tests": "./tests",
      "@": "./src",
    },
    globals: true,
  },
});
