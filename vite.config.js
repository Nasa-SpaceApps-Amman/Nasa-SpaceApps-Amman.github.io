import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Nasa-SpaceApps-Amman.github.io/", // Make sure this matches your GitHub Pages URL
});
