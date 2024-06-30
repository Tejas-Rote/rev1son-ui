// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: path.resolve("src", "./index.ts"),
//       name: "Rev1sonUI",
//       fileName: (format) => `rev1son-ui.${format}.js`,
//       formats: ["es", "umd"],
//     },
//     rollupOptions: {
//       external: ["react", "react-dom"],
//       output: {
//         globals: {
//           react: "React",
//           "react-dom": "ReactDOM",
//         },
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  plugins: [
    react(),
    postcss({
      modules: {
        generateScopedName: "[name]__[local]___[hash:base64:5]",
      },
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve("src", "./index.ts"),
      name: "Rev1sonUI",
      fileName: (format) => `rev1son-ui.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
