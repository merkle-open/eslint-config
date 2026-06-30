import js from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import-x";
import stylisticPlugin from "@stylistic/eslint-plugin";

// Import modular rule sets (audited & upgraded ESM files)
import bestPractices from "../rules/best-practices.js";
import errors from "../rules/errors.js";
import style from "../rules/style.js";
import es2025Rules from "../rules/es2025.js";
import importRules from "../rules/imports.js";
import variables from "../rules/variables.js";

export default [
  {
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: "module",
      globals: { ...globals.es2025 },
    },
    plugins: {
      "import-x": importPlugin,
      "@stylistic": stylisticPlugin,
    },
    rules: {
      ...bestPractices,
      ...errors,
      ...style,
      ...es2025Rules,
      ...importRules,
      ...variables,
    },
  },
];
