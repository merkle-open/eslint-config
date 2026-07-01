# @merkle-open/eslint-config

[![Build Status](https://github.com/merkle-open/eslint-config/workflows/ci/badge.svg)](https://github.com/merkle-open/eslint-config/actions)
[![npm](https://img.shields.io/npm/v/@merkle-open/eslint-config.svg)](https://www.npmjs.com/package/@merkle-open/eslint-config)

Shareable ESLint configuration for Merkle projects. Version 5 uses **ESLint 10 Flat Config** format with native ESM.

## Requirements

| Dependency | Version |
|------------|---------|
| Node.js | `^20.19.0 \|\| ^22.13.0 \|\| >=24` |
| ESLint | `^10.0.0` |
| TypeScript | `^6.0.0` (for TypeScript presets) |

## Installation

```bash
npm install --save-dev eslint @merkle-open/eslint-config
```

All required plugins are bundled — no additional plugin installations needed.

## Available Presets

### TypeScript (recommended)

| Preset | Description |
|--------|-------------|
| `@merkle-open/eslint-config/typescript-browser` | TypeScript + browser globals |
| `@merkle-open/eslint-config/typescript-node` | TypeScript + Node.js globals |
| `@merkle-open/eslint-config/typescript-react` | TypeScript + React + JSX A11y |

### JavaScript (ES2025)

| Preset | Description |
|--------|-------------|
| `@merkle-open/eslint-config/es2025-browser` | ES2025 + browser globals |
| `@merkle-open/eslint-config/es2025-node` | ES2025 + Node.js globals |
| `@merkle-open/eslint-config/es2025-react` | ES2025 + React + JSX A11y |

### With Prettier (disable-styles variants)

Each preset has a `-disable-styles` variant that disables all formatting rules, for use with Prettier:

| Preset | Description |
|--------|-------------|
| `@merkle-open/eslint-config/typescript-browser-disable-styles` | TypeScript browser without formatting rules |
| `@merkle-open/eslint-config/typescript-node-disable-styles` | TypeScript Node without formatting rules |
| `@merkle-open/eslint-config/typescript-react-disable-styles` | TypeScript React without formatting rules |
| `@merkle-open/eslint-config/es2025-browser-disable-styles` | ES2025 browser without formatting rules |
| `@merkle-open/eslint-config/es2025-node-disable-styles` | ES2025 Node without formatting rules |
| `@merkle-open/eslint-config/es2025-react-disable-styles` | ES2025 React without formatting rules |

## Usage

Create an `eslint.config.js` file in your project root:

### TypeScript Project

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/typescript-browser";

export default [
  ...merkleConfig,
  {
    // Your project-specific overrides
    ignores: ["dist/**", "node_modules/**"],
  },
];
```

### TypeScript + React Project

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/typescript-react";

export default [
  ...merkleConfig,
  {
    ignores: ["dist/**", "build/**", "node_modules/**"],
  },
];
```

### With Prettier

Use the `-disable-styles` variant to let Prettier handle formatting:

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

See [Using with Prettier](./documentation/with-prettier.md) for more details.

### Alternative: eslint-config-prettier

If you prefer `eslint-config-prettier` over the built-in disable-styles:

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

### Node.js Project

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/typescript-node";

export default [
  ...merkleConfig,
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
```

### JavaScript-Only Project

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/es2025-browser";

export default [
  ...merkleConfig,
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
```

## package.json Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

> **Note:** The `--ext` flag is not needed with flat config — ESLint automatically lints `.js`, `.jsx`, `.ts`, `.tsx`, `.mjs`, `.cjs`, `.mts`, `.cts` files.

## Parser Configuration

### Default: espree

JavaScript presets use ESLint's built-in `espree` parser, which natively supports ES2025 and JSX.

### TypeScript: typescript-eslint

TypeScript presets use `typescript-eslint` with `projectService: true` for automatic tsconfig detection.

### Babel Parser (opt-in)

If you need Babel-specific syntax (decorators, Flow, etc.), install and configure `@babel/eslint-parser`:

```bash
npm install --save-dev @babel/eslint-parser @babel/core
```

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/es2025-browser";
import babelParser from "@babel/eslint-parser";

export default [
  ...merkleConfig,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
  },
];
```

## Migration from v4

See the [Migration Guide](./documentation/MIGRATION.md) for step-by-step instructions.

**Key changes:**
- ESLint 10 Flat Config format (no more `.eslintrc.js`)
- ESM modules (no more `require()`)
- New import paths (e.g., `/typescript-browser` instead of `/configurations/typescript-browser`)
- ES8 presets renamed to ES2025
- ES5/ES6/ES7 presets removed

## Documentation

| Category | Link |
|----------|------|
| Best Practices | [documentation/best-practices.md](./documentation/best-practices.md) |
| Style | [documentation/style.md](./documentation/style.md) |
| Variables | [documentation/variables.md](./documentation/variables.md) |
| Errors | [documentation/errors.md](./documentation/errors.md) |
| ES2025 | [documentation/es6.md](./documentation/es6.md) |
| Imports | [documentation/imports.md](./documentation/imports.md) |
| Node | [documentation/node.md](./documentation/node.md) |
| React | [documentation/react.md](./documentation/react.md) |
| React A11y | [documentation/react-a11y.md](./documentation/react-a11y.md) |
| React Hooks | [documentation/react-hooks.md](./documentation/react-hooks.md) |
| TypeScript | [documentation/typescript.md](./documentation/typescript.md) |
| Using with Prettier | [documentation/with-prettier.md](./documentation/with-prettier.md) |
| Migration Guide | [documentation/MIGRATION.md](./documentation/MIGRATION.md) |

## Contributing

1. Create a feature branch from `develop`
2. Make changes and create a pull request
3. After approval and merge to `develop`, changes are tested
4. Release is created by merging `develop` to `master` and tagging

## Thanks

- [Merkle](https://www.merkleinc.ch/)
- [ESLint](https://github.com/eslint/eslint) — [eslint.org](http://eslint.org/)
- [Walmart](https://github.com/walmartlabs) — [eslint-config-walmart](https://github.com/walmartlabs/eslint-config-walmart)
- [Airbnb](https://github.com/airbnb) — [JavaScript Style Guide](https://github.com/airbnb/javascript)

## License

[MIT License](./LICENSE)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed release notes.
