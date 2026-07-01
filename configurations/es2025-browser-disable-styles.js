import { defineConfig } from "eslint/config";
import esBrowser from "./es2025-browser.js";
import bestPractices from "../disable-styles/best-practices.js";
import errors from "../disable-styles/errors.js";
import style from "../disable-styles/style.js";
import es2025 from "../disable-styles/es2025.js";
import imports from "../disable-styles/imports.js";
import variables from "../disable-styles/variables.js";

export default defineConfig([
  ...esBrowser,
  {
    rules: {
      ...bestPractices,
      ...errors,
      ...style,
      ...es2025,
      ...imports,
      ...variables,
    },
  },
]);
