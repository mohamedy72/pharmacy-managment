import { defineConfig } from "vite";
import { dependencies } from "./package.json";
import react from "@vitejs/plugin-react";

import { resolve } from "path";
function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (["react", "react-router-dom", "react-dom"].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

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
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-router-dom", "react-dom"],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
