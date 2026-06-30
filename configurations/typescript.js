import tseslint from "typescript-eslint";
import stylisticPlugin from "@stylistic/eslint-plugin";
import base from "./base.js";
import tsRules from "../rules/typescript.js";
import tsDisableStyles from "../disable-styles/typescript.js";

export default [
  ...base,

  // TypeScript recommended (registers parser + plugin + rules)
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        // Note: tsconfigRootDir is NOT set here — projectService auto-detects
        // from the consumer's working directory. Setting import.meta.dirname
        // in a shared config would point to node_modules/, which is wrong.
      },
    },
    plugins: {
      "@stylistic": stylisticPlugin,
    },
    rules: {
      // Disable base rules that TS compiler handles
      "no-undef": "off",              // TS type system covers this
      "no-redeclare": "off",          // TS compiler error
      "no-dupe-class-members": "off", // TS compiler error
      "constructor-super": "off",     // TS compiler error
      "no-const-assign": "off",       // TS compiler error
      "no-unused-vars": "off",        // Replaced by @typescript-eslint/no-unused-vars

      // TS-specific formatting (handled by @stylistic/ts/*, disabled by disable-styles layer)
      ...tsDisableStyles,

      // Spread team-specific TypeScript rules (audited & upgraded)
      ...tsRules,
    },
  },
];
