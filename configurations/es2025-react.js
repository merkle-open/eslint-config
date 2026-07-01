import esBrowser from "./es2025-browser.js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import a11yPlugin from "eslint-plugin-jsx-a11y";
import reactRules from "../rules/react.js";
import reactA11yRules from "../rules/react-a11y.js";
import reactDisableStyles from "../disable-styles/react.js";

export default [
  ...esBrowser,

  // React hooks (auto-registers plugin + enables recommended rules)
  reactHooks.configs.flat.recommended,

  {
    files: ["**/*.{jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "jsx-a11y": a11yPlugin,
    },
    settings: {
      // Use explicit version to avoid ESLint 10 compatibility issues with "detect"
      react: { version: "18.3" },
    },
    rules: {
      // Spread modular React rules (audited & upgraded)
      ...reactRules,
      ...reactA11yRules,
      ...reactDisableStyles,
    },
  },
];
