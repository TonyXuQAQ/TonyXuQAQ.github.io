import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative assets work on both username.github.io and project GitHub Pages.
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
