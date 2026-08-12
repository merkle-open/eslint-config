# Migration Guide: v4.0.0 → v5.0.0

This guide explains how to migrate from `@merkle-open/eslint-config` v4 to v5.

Version 5 is a major release based on **ESLint 9 Flat Config** and **native ESM**.

## Breaking Changes at a Glance

| Area            | v4 (`@merkle-open/eslint-config@4.0.0`)         | v5                                                            |
| --------------- | ----------------------------------------------- | ------------------------------------------------------------- |
| Node.js         | `>=18.18.0`                                     | `^20.19.0 \|\| ^22.13.0 \|\| >=24`                            |
| ESLint          | `^8.0.0`                                        | `^9.3.0` (peer dependency)                                    |
| Config format   | `.eslintrc.*`                                   | `eslint.config.js` (flat config)                              |
| Module system   | CommonJS                                        | ESM (`import` / `export default`)                             |
| JS preset names | `es8-*`                                         | `es2025-*`                                                    |
| Removed presets | `es5-*`, `es6-*`, `es7-*` available             | `es5-*`, `es6-*`, `es7-*` removed                             |
| Import rules    | `import/*`                                      | `import-x/*`                                                  |
| Default export  | `es8-browser`                                   | `typescript-browser`                                          |
| TS support      | `@typescript-eslint/*` (no TS peer declaration) | TypeScript peer `^6.0.0`; `typescript-eslint` project service |

## Prerequisites

Before upgrading:

| Requirement                       | Minimum Version                    |
| --------------------------------- | ---------------------------------- |
| Node.js                           | `^20.19.0 \|\| ^22.13.0 \|\| >=24` |
| ESLint (consumer peer dependency) | `^9.3.0`                           |
| TypeScript (for TS presets)       | `^6.0.0`                           |

> Reference: this package is developed and CI-tested with `eslint@9.39.4`.

## Step-by-Step Migration

### 1) Upgrade Dependencies

```bash
npm install --save-dev eslint@^9.3.0 @merkle-open/eslint-config@^5.0.0

# only if you use TypeScript presets
npm install --save-dev typescript@^6.0.0
```

### 2) Replace Legacy ESLint Config Files

Remove v4 config files:

```bash
rm .eslintrc.js .eslintrc.json .eslintrc.yaml .eslintrc 2>/dev/null
rm .eslintignore 2>/dev/null
```

Create `eslint.config.js` in your project root.

**Before (v4):**

```javascript
// .eslintrc.js
module.exports = {
  extends: ['@merkle-open/eslint-config/configurations/typescript-react'],
};
```

**After (v5):**

```javascript
// eslint.config.js
import merkleConfig from '@merkle-open/eslint-config/typescript-react';

export default [
  ...merkleConfig,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
```

### 3) Update Lint Scripts

Use flat-config-friendly scripts and remove `--ext`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 4) Understand Flat Config Scope

In flat config, lint scope is controlled by three separate mechanisms:

1. **CLI targets** (`eslint src packages`) define where ESLint searches.
2. **`ignores`** exclude files/directories from linting.
3. **`files`** select which config objects apply to discovered files; they do not define lint roots.

Example:

```javascript
import merkleConfig from '@merkle-open/eslint-config/typescript-react';

export default [
  ...merkleConfig,
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    ignores: ['dist/**', 'coverage/**', 'node_modules/**'],
  },
];
```

### 5) Update Preset Import Paths

| v4 Import Path                                       | v5 Import Path                                                              |
| ---------------------------------------------------- | --------------------------------------------------------------------------- |
| `@merkle-open/eslint-config`                         | `@merkle-open/eslint-config` _(default now points to `typescript-browser`)_ |
| `.../configurations/typescript-browser`              | `.../typescript-browser`                                                    |
| `.../configurations/typescript-node`                 | `.../typescript-node`                                                       |
| `.../configurations/typescript-react`                | `.../typescript-react`                                                      |
| `.../configurations/es8-browser`                     | `.../es2025-browser`                                                        |
| `.../configurations/es8-node`                        | `.../es2025-node`                                                           |
| `.../configurations/es8-react`                       | `.../es2025-react`                                                          |
| `.../configurations/typescript-react-disable-styles` | `.../typescript-react-disable-styles`                                       |
| `.../configurations/es8-react-disable-styles`        | `.../es2025-react-disable-styles`                                           |

`es5-*`, `es6-*`, and `es7-*` preset families do not exist in v5. Migrate to the closest `es2025-*` preset.

### 6) Choose Your Formatting Strategy

#### Option A (recommended): Use bundled `-disable-styles` presets

```javascript
import merkleConfig from '@merkle-open/eslint-config/typescript-react-disable-styles';

export default [...merkleConfig];
```

#### Option B: Keep standard preset + `eslint-config-prettier`

```javascript
import merkleConfig from '@merkle-open/eslint-config/typescript-react';
import prettierConfig from 'eslint-config-prettier';

export default [...merkleConfig, prettierConfig];
```

### 7) Update Custom Rule Overrides

#### 7.1 `import/*` → `import-x/*`

```javascript
export default [
  ...merkleConfig,
  {
    rules: {
      'import-x/no-unresolved': 'error',
    },
  },
];
```

#### 7.2 TypeScript rule replacements

| v4 Rule                                      | v5 Status / Replacement                               |
| -------------------------------------------- | ----------------------------------------------------- |
| `@typescript-eslint/ban-types`               | Replaced by `@typescript-eslint/no-restricted-types`  |
| `@typescript-eslint/no-empty-interface`      | Replaced by `@typescript-eslint/no-empty-object-type` |
| `@typescript-eslint/indent`                  | Replaced by `@stylistic/indent`                       |
| `@typescript-eslint/member-delimiter-style`  | Replaced by `@stylistic/member-delimiter-style`       |
| `@typescript-eslint/type-annotation-spacing` | Replaced by `@stylistic/type-annotation-spacing`      |

> Note: this preset configures `@stylistic/indent` to use tabs instead of the common 2-space stylistic default.

#### 7.3 React rule removals/behavior

| Rule                        | v5 Behavior                        |
| --------------------------- | ---------------------------------- |
| `react/jsx-sort-prop-types` | Removed                            |
| `react/require-extension`   | Removed                            |
| `react/jsx-uses-react`      | Disabled (React 17+ JSX transform) |
| `react/react-in-jsx-scope`  | Disabled (React 17+ JSX transform) |

#### 7.4 Optional: keep `I` prefix for interfaces

v5 no longer enforces `I` prefixes by default. If your team wants to keep it:

```javascript
export default [
  ...merkleConfig,
  {
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
      ],
    },
  },
];
```

### 8) Verify the Migration

Run ESLint and resolve remaining issues:

```bash
npm run lint
```

If needed:

```bash
npm run lint -- --fix
```

---

## Troubleshooting

### "Cannot use import statement outside a module"

Add `"type": "module"` to your `package.json`, or rename your config to `eslint.config.mjs`.

### "Unknown rule 'import/...'"

Rename rule keys from `import/*` to `import-x/*`.

### TypeScript files are not being linted

Check all three scope controls:

1. CLI target includes your source path (for example `eslint src`).
2. `ignores` does not exclude your TS paths.
3. `files` patterns include `**/*.ts` and `**/*.tsx` where needed.

### "Parsing error: Cannot read file 'tsconfig.json'"

TypeScript presets use `projectService: true`. Ensure your repo has a discoverable `tsconfig.json`,
or override parser options explicitly:

```javascript
{
  languageOptions: {
    parserOptions: {
      project: './tsconfig.eslint.json',
      projectService: false,
    },
  },
}
```

---

## References

- [Changelog](https://github.com/merkle-open/eslint-config/blob/master/CHANGELOG.md)
- [ESLint Flat Config docs](https://eslint.org/docs/latest/use/configure/configuration-files)
- [typescript-eslint v8 announcement](https://typescript-eslint.io/blog/announcing-typescript-eslint-v8/)
- [Issue tracker](https://github.com/merkle-open/eslint-config/issues)
