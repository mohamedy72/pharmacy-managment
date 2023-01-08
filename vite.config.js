import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@Assets": resolve(__dirname, "./src/assets"),
      "@Components": resolve(__dirname, "./src/components"),
      "@Context": resolve(__dirname, "./src/context/"),
      "@Hooks": resolve(__dirname, "./src/hooks/"),
      "@Utils": resolve(__dirname, "./src/utils/"),
      "@Data": resolve(__dirname, "./src/data/"),
    },
  },
});
