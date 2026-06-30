import typescript from "./typescript.js";
import globals from "globals";
import nodeRules from "../rules/node.js";

export default [
  ...typescript,
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      globals: { ...globals.node, ...globals.nodeBuiltin },
    },
    rules: {
      ...nodeRules,
    },
  },
];
