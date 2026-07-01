# Migration Guide: v4 to v5

This guide walks you through upgrading from `@merkle-open/eslint-config` v4 to v5.

## Overview of Changes

v5 is a major rewrite:
- **ESLint 10 Flat Config** replaces legacy `.eslintrc.*` format
- **ESM modules** replace CommonJS
- **New import paths** — simplified, no `/configurations/` prefix
- **ES2025 targeting** replaces ES8/ES2017
- **Removed presets**: ES5, ES6, ES7

## Prerequisites

Before upgrading, ensure your project meets these requirements:

| Requirement | Minimum Version |
|-------------|-----------------|
| Node.js | `^20.19.0 \|\| ^22.13.0 \|\| >=24` |
| ESLint | `^10.0.0` |
| TypeScript | `^6.0.0` (if using TypeScript presets) |

## Step-by-Step Migration

### 1. Upgrade Dependencies

```bash
# Upgrade ESLint to v10
npm install eslint@^10.0.0 --save-dev

# Upgrade the config package
npm install @merkle-open/eslint-config@^5.0.0 --save-dev

# If using TypeScript, upgrade to v6
npm install typescript@^6.0.0 --save-dev
```

### 2. Delete Legacy Config Files

Remove these files from your project root:

```bash
rm .eslintrc.js .eslintrc.json .eslintrc.yaml .eslintrc 2>/dev/null
rm .eslintignore 2>/dev/null
```

### 3. Create `eslint.config.js`

Create a new flat config file in your project root.

**Before (v4 — `.eslintrc.js`):**
```javascript
module.exports = {
  extends: require.resolve('@merkle-open/eslint-config/configurations/typescript-react'),
};
```

**After (v5 — `eslint.config.js`):**
```javascript
import merkleConfig from "@merkle-open/eslint-config/typescript-react";

export default [
  ...merkleConfig,
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
```

### 4. Update `package.json`

**Add `"type": "module"`** if your project uses ESM (required for `eslint.config.js`):

```json
{
  "type": "module"
}
```

**Update lint scripts** — remove `--ext` flag:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

> The `--ext` flag is not supported in ESLint 10 flat config. ESLint now uses file extensions from the config's `files` patterns.

### 5. Move Ignores to Config

The `.eslintignore` file is not used in flat config. Move ignores to your config:

**Before (`.eslintignore`):**
```
dist/
node_modules/
coverage/
```

**After (`eslint.config.js`):**
```javascript
export default [
  ...merkleConfig,
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**"],
  },
];
```

### 6. Update Import Paths

| v4 Path | v5 Path |
|---------|---------|
| `/configurations/typescript-browser` | `/typescript-browser` |
| `/configurations/typescript-node` | `/typescript-node` |
| `/configurations/typescript-react` | `/typescript-react` |
| `/configurations/es8-browser` | `/es2025-browser` |
| `/configurations/es8-node` | `/es2025-node` |
| `/configurations/es8-react` | `/es2025-react` |
| `/configurations/es8-browser-disable-styles` | `/es2025-browser-disable-styles` |
| `/configurations/typescript-react-disable-styles` | `/typescript-react-disable-styles` |

### 7. Handle Disable-Styles

If you were using `*-disable-styles` configs with Prettier:

**Before (v4):**
```javascript
module.exports = {
  extends: [
    '@merkle-open/eslint-config/configurations/es8-react',
    '@merkle-open/eslint-config/configurations/es8-react-disable-styles',
  ].map(require.resolve),
};
```

**After (v5):**
```javascript
// Use the combined disable-styles preset (recommended)
import merkleConfig from "@merkle-open/eslint-config/es2025-react-disable-styles";

export default [...merkleConfig];
```

Or use `eslint-config-prettier`:
```javascript
import merkleConfig from "@merkle-open/eslint-config/es2025-react";
import prettierConfig from "eslint-config-prettier";

export default [...merkleConfig, prettierConfig];
```

### 8. Update Custom Rules

If you have custom rule overrides, update the syntax:

**Before (v4):**
```javascript
module.exports = {
  extends: require.resolve('@merkle-open/eslint-config/configurations/typescript-react'),
  rules: {
    "complexity": ["warn", 10],
    "@typescript-eslint/no-explicit-any": "warn",
  },
};
```

**After (v5):**
```javascript
import merkleConfig from "@merkle-open/eslint-config/typescript-react";

export default [
  ...merkleConfig,
  {
    rules: {
      "complexity": ["warn", 10],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
```

### 9. Handle Removed Presets

ES5, ES6, and ES7 presets are removed. Migrate to ES2025:

| Removed Preset | Migration Path |
|----------------|----------------|
| `es5-*` | Use `es2025-*` (transpile if needed) |
| `es6-*` | Use `es2025-*` |
| `es7-*` | Use `es2025-*` |

### 10. Verify

Run ESLint to verify the migration:

```bash
npm run lint
```

Fix any issues and iterate.

---

## Breaking Changes Reference

### Rule Changes

| Change | Details |
|--------|---------|
| `import/*` → `import-x/*` | Import plugin rules now use `import-x/` prefix |
| `@typescript-eslint/ban-types` | Replaced by `@typescript-eslint/no-restricted-types` |
| `@typescript-eslint/no-empty-interface` | Replaced by `@typescript-eslint/no-empty-object-type` |
| Interface `I` prefix | No longer required (naming-convention updated) |
| TS formatting rules | Moved to `@stylistic/ts/*` (handled internally) |

### Removed Rules

These deprecated rules were removed:
- `no-native-reassign` (use `no-global-assign`)
- `no-negated-in-lhs` (use `no-unsafe-negation`)
- `valid-jsdoc` (use `eslint-plugin-jsdoc`)
- `require-jsdoc` (use `eslint-plugin-jsdoc`)
- `no-spaced-func` (use `func-call-spacing`)
- `id-blacklist` (use `id-denylist`)
- `no-new-object` (use `no-object-constructor`)
- `react/jsx-sort-prop-types` (removed)
- `react/require-extension` (removed)

### Behavior Changes

| Change | v4 | v5 |
|--------|----|----|
| Default export | `es8-browser` | `typescript-browser` |
| Parser | Babel (JavaScript) | espree (JavaScript), typescript-eslint (TypeScript) |
| React version | Auto-detect | Explicit `18.3` |
| TypeScript project | Manual `project` option | Auto-detect via `projectService` |

---

## Troubleshooting

### "Cannot use import statement outside a module"

Add `"type": "module"` to your `package.json`.

### "Unknown rule 'import/...'

Rules are now prefixed with `import-x/`:
```javascript
{
  rules: {
    "import-x/no-unresolved": "error",  // not "import/no-unresolved"
  },
}
```

### TypeScript files not being linted

Ensure your config includes TypeScript file patterns. The preset handles this, but custom configs may need:
```javascript
{
  files: ["**/*.ts", "**/*.tsx"],
}
```

### "Parsing error: Cannot read file 'tsconfig.json'"

v5 uses `projectService: true` for auto-detection. Ensure you have a `tsconfig.json` in your project root or adjust:
```javascript
{
  languageOptions: {
    parserOptions: {
      project: "./tsconfig.eslint.json",
      projectService: false,
    },
  },
}
```

---

## Need Help?

- [ESLint Flat Config Documentation](https://eslint.org/docs/latest/use/configure/configuration-files)
- [typescript-eslint v8 Migration](https://typescript-eslint.io/blog/announcing-typescript-eslint-v8/)
- [Report Issues](https://github.com/merkle-open/eslint-config/issues)
