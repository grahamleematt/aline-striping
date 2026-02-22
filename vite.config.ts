import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import path from "path";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", { target: "19" }]],
      },
    }),
    tailwindcss(),
    ViteImageOptimizer({
      includePublic: true,
      png: { quality: 80 },
      webp: { quality: 80, effort: 6 },
      svg: {
        plugins: [
          { name: "removeDoctype" },
          { name: "removeXMLProcInst" },
          { name: "removeComments" },
          { name: "removeMetadata" },
          { name: "removeEditorsNSData" },
          { name: "cleanupAttrs" },
          { name: "mergeStyles" },
          { name: "minifyStyles" },
          { name: "removeUselessDefs" },
          { name: "cleanupNumericValues" },
          { name: "convertColors" },
          { name: "removeUnknownsAndDefaults" },
          { name: "removeNonInheritableGroupAttrs" },
          { name: "removeUselessStrokeAndFill" },
          { name: "cleanupIds" },
          { name: "removeEmptyContainers" },
          { name: "mergePaths" },
          { name: "collapseGroups" },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "router-vendor": ["@tanstack/react-router", "@tanstack/react-query"],
          "ui-vendor": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-navigation-menu",
          ],
        },
      },
    },
  },
});
