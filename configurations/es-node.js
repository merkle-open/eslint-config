import base from "./base.js";
import globals from "globals";
import nodeRules from "../rules/node.js";

export default [
  ...base,
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.nodeBuiltin },
    },
    rules: {
      ...nodeRules,
    },
  },
];
