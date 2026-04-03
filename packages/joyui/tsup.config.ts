import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@mui/joy",
    "@mui/joy/styles",
    "@mui/joy/CssBaseline",
    "@emotion/react",
    "@emotion/styled",
  ],
  outDir: "dist",
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
