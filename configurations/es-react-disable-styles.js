import { defineConfig } from "eslint/config";
import esReact from "./es-react.js";
import bestPractices from "../disable-styles/best-practices.js";
import errors from "../disable-styles/errors.js";
import style from "../disable-styles/style.js";
import es2025 from "../disable-styles/es2025.js";
import imports from "../disable-styles/imports.js";
import variables from "../disable-styles/variables.js";
import reactStyles from "../disable-styles/react.js";
import reactA11yStyles from "../disable-styles/react-a11y.js";
import reactHooksStyles from "../disable-styles/react-hooks.js";

export default defineConfig([
  ...esReact,
  {
    rules: {
      ...bestPractices,
      ...errors,
      ...style,
      ...es2025,
      ...imports,
      ...variables,
      ...reactStyles,
      ...reactA11yStyles,
      ...reactHooksStyles,
    },
  },
]);
