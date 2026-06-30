import { defineConfig } from "eslint/config";
import esNode from "./es-node.js";
import bestPractices from "../disable-styles/best-practices.js";
import errors from "../disable-styles/errors.js";
import style from "../disable-styles/style.js";
import es2025 from "../disable-styles/es2025.js";
import imports from "../disable-styles/imports.js";
import nodeStyles from "../disable-styles/node.js";
import variables from "../disable-styles/variables.js";

export default defineConfig([
  ...esNode,
  {
    rules: {
      ...bestPractices,
      ...errors,
      ...style,
      ...es2025,
      ...imports,
      ...nodeStyles,
      ...variables,
    },
  },
]);
