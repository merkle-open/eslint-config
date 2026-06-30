import typescript from "./typescript.js";
import globals from "globals";

export default [
  ...typescript,
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
];
