import typescriptBrowser from "./typescript-browser.js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import a11yPlugin from "eslint-plugin-jsx-a11y";
import reactRules from "../rules/react.js";
import reactA11yRules from "../rules/react-a11y.js";
import reactDisableStyles from "../disable-styles/react.js";

export default [
  ...typescriptBrowser,

  // React hooks (auto-registers plugin + enables recommended rules)
  reactHooks.configs.flat.recommended,

  {
    files: ["**/*.{tsx,jsx}"],
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
      react: { version: "detect" },
    },
    rules: {
      // Spread modular React rules (audited & upgraded)
      ...reactRules,
      ...reactA11yRules,
      ...reactDisableStyles,
    },
  },
];
