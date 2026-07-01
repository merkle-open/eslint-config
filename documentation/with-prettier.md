# Using with Prettier

This guide explains how to use `@merkle-open/eslint-config` alongside Prettier for code formatting.

## Recommended: Use Disable-Styles Presets

Each preset has a `-disable-styles` variant that disables all formatting rules, letting Prettier handle formatting without conflicts.

### TypeScript + React + Prettier

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/typescript-react-disable-styles";

export default [
  ...merkleConfig,
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
```

### TypeScript + Browser + Prettier

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/typescript-browser-disable-styles";

export default [...merkleConfig];
```

### TypeScript + Node + Prettier

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/typescript-node-disable-styles";

export default [...merkleConfig];
```

### ES2025 + React + Prettier

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/es2025-react-disable-styles";

export default [...merkleConfig];
```

### ES2025 + Browser + Prettier

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/es2025-browser-disable-styles";

export default [...merkleConfig];
```

### ES2025 + Node + Prettier

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/es2025-node-disable-styles";

export default [...merkleConfig];
```

---

## Alternative: eslint-config-prettier

If you prefer using `eslint-config-prettier` instead of the built-in disable-styles:

```bash
npm install --save-dev eslint-config-prettier
```

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/typescript-react";
import prettierConfig from "eslint-config-prettier";

export default [
  ...merkleConfig,
  prettierConfig,
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
```

---

## Prettier Configuration

Create a `.prettierrc` file (or use any Prettier config format):

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

### package.json Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## Which Rules Are Disabled?

The disable-styles presets disable all formatting-related rules across categories:

| Category | Examples |
|----------|----------|
| Style | `indent`, `quotes`, `semi`, `comma-dangle`, `max-len` |
| TypeScript | `@stylistic/ts/indent`, `@stylistic/ts/semi`, `@stylistic/ts/member-delimiter-style` |
| React | `react/jsx-indent`, `react/jsx-max-props-per-line`, `react/jsx-closing-bracket-location` |
| Best Practices | `curly`, `dot-location`, `wrap-iife` |
| ES2025 | `arrow-parens`, `arrow-spacing`, `generator-star-spacing` |

This allows Prettier to handle all formatting while ESLint focuses on code quality and best practices.

---

## Comparison: disable-styles vs eslint-config-prettier

| Feature | disable-styles | eslint-config-prettier |
|---------|----------------|------------------------|
| Maintained by | Merkle team | Prettier team |
| Customization | Team-curated selection | Comprehensive coverage |
| Updates | Synced with preset releases | Independent releases |
| Extra dependency | None | Yes |

Both approaches work well. Use whichever fits your workflow.

