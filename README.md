# @merkle-open/eslint-config

[![Build Status](https://github.com/merkle-open/eslint-config/workflows/ci/badge.svg)](https://github.com/merkle-open/eslint-config/actions)
[![npm](https://img.shields.io/npm/v/@merkle-open/eslint-config.svg)](https://www.npmjs.com/package/@merkle-open/eslint-config)
[![Codestyle](https://img.shields.io/badge/codestyle-merkle-green.svg)](https://github.com/merkle-open/eslint-config)

Shareable ESLint configuration for Merkle projects. Version 5 uses **ESLint 9 Flat Config** format with native ESM.

## Installation

```bash
npm install --save-dev eslint @merkle-open/eslint-config
```

All required plugins are bundled — no additional plugin installations needed.

## Available Presets

### TypeScript (recommended)

| Preset                                          | Description                   |
| ----------------------------------------------- | ----------------------------- |
| `@merkle-open/eslint-config/typescript-browser` | TypeScript + browser globals  |
| `@merkle-open/eslint-config/typescript-node`    | TypeScript + Node.js globals  |
| `@merkle-open/eslint-config/typescript-react`   | TypeScript + React + JSX A11y |

### JavaScript (ES2025)

| Preset                                      | Description               |
| ------------------------------------------- | ------------------------- |
| `@merkle-open/eslint-config/es2025-browser` | ES2025 + browser globals  |
| `@merkle-open/eslint-config/es2025-node`    | ES2025 + Node.js globals  |
| `@merkle-open/eslint-config/es2025-react`   | ES2025 + React + JSX A11y |

### With Prettier (disable-styles variants)

Each preset has a `-disable-styles` variant that disables all formatting rules, for use with Prettier:

| Preset                                                         | Description                                 |
| -------------------------------------------------------------- | ------------------------------------------- |
| `@merkle-open/eslint-config/typescript-browser-disable-styles` | TypeScript browser without formatting rules |
| `@merkle-open/eslint-config/typescript-node-disable-styles`    | TypeScript Node without formatting rules    |
| `@merkle-open/eslint-config/typescript-react-disable-styles`   | TypeScript React without formatting rules   |
| `@merkle-open/eslint-config/es2025-browser-disable-styles`     | ES2025 browser without formatting rules     |
| `@merkle-open/eslint-config/es2025-node-disable-styles`        | ES2025 Node without formatting rules        |
| `@merkle-open/eslint-config/es2025-react-disable-styles`       | ES2025 React without formatting rules       |

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

See [Using with Prettier](https://github.com/merkle-open/eslint-config/blob/master/documentation/with-prettier.md) for more details.

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

## Flat Config Scope: CLI targets, `files`, and `ignores`

In flat config, linting scope is controlled by a combination of **CLI targets** and config matching:

1. **CLI targets** (`eslint src packages`) decide which folders/files ESLint walks.
2. **`ignores`** removes files/folders from linting (replacement for `.eslintignore`).
3. **`files`** does **not** define lint roots — it selects which config objects (rules, parser, overrides) apply to files that were already discovered.

Example:

```javascript
// eslint.config.js
export default [
  ...merkleConfig,
  {
    files: ["**/*.test.ts"],
    rules: {
      "no-console": "off",
    },
  },
  {
    ignores: ["dist/**", "coverage/**", "node_modules/**"],
  },
];
```

```bash
# Lint roots are provided by CLI args (or ".")
eslint src packages
```

## Parser Configuration

### Default: espree

JavaScript presets use ESLint's built-in `espree` parser (no Babel parser by default), which natively supports ES2025 and JSX.

### TypeScript: typescript-eslint

TypeScript presets use `typescript-eslint` with `projectService: true` for automatic tsconfig detection.

Parser selection follows normal flat-config matching: the parser from the matching config object (via `files`) is used for each file.

### Babel Parser (opt-in)

If you need Babel-specific syntax (decorators, Flow, etc.), install and configure `@babel/eslint-parser`:

```bash
npm install --save-dev @babel/eslint-parser @babel/core @babel/preset-react
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

### MDX (opt-in)

MDX (`.mdx`) linting is **not** bundled, as it requires the `remark`/`unified` toolchain that most consumers don't need. If you lint MDX, install `eslint-plugin-mdx` and add it yourself:

```bash
npm install --save-dev eslint-plugin-mdx
```

```javascript
// eslint.config.js
import merkleConfig from "@merkle-open/eslint-config/typescript-react";
import * as mdx from "eslint-plugin-mdx";

export default [
  ...merkleConfig,
  {
    ...mdx.flat,
    files: ["**/*.mdx"],
    processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),
  },
  {
    ...mdx.flatCodeBlocks,
    files: ["**/*.mdx"],
  },
];
```

Code blocks inside MDX are linted with your existing rules via the MDX processor.

## Migration from v4

See the [Migration Guide](https://github.com/merkle-open/eslint-config/blob/master/documentation/MIGRATION.md) for step-by-step instructions.

**Key changes:**

- ESLint 9 Flat Config format (no more `.eslintrc.js`)
- ESM modules (no more `require()`)
- New import paths (e.g., `/typescript-browser` instead of `/configurations/typescript-browser`)
- TypeScript formatting rules moved from `@typescript-eslint/*` style rules to `@stylistic/*`
- ES8 presets renamed to ES2025
- ES5/ES6/ES7 presets removed

## Documentation

| Category            | Link                                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Best Practices      | [documentation/best-practices.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/best-practices.md)                                                                                  |
| Style               | [documentation/style.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/style.md)                                                                                                    |
| Variables           | [documentation/variables.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/variables.md)                                                                                            |
| Errors              | [documentation/errors.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/errors.md)                                                                                                  |
| ES2025              | [documentation/es6.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/es6.md), [documentation/es8.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/es8.md) |
| Imports             | [documentation/imports.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/imports.md)                                                                                                |
| Node                | [documentation/node.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/node.md)                                                                                                      |
| React               | [documentation/react.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/react.md)                                                                                                    |
| React A11y          | [documentation/react-a11y.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/react-a11y.md)                                                                                          |
| React Hooks         | [documentation/react-hooks.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/react-hooks.md)                                                                                        |
| TypeScript          | [documentation/typescript.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/typescript.md)                                                                                          |
| Using with Prettier | [documentation/with-prettier.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/with-prettier.md)                                                                                    |
| Migration Guide     | [documentation/MIGRATION.md](https://github.com/merkle-open/eslint-config/blob/master/documentation/MIGRATION.md)                                                                                            |

## Contributing

1. Create a feature branch from `develop`
2. Make changes and create a pull request
3. After approval and merge to `develop`, changes are tested
4. Release is created by merging `develop` to `master` and tagging

## Thanks

- [Merkle](https://www.merkleinc.ch/)
- [ESLint](https://github.com/eslint/eslint) — [eslint.org](http://eslint.org/)

## License

[MIT License](./LICENSE)

## Changelog

See [CHANGELOG.md](https://github.com/merkle-open/eslint-config/blob/master/CHANGELOG.md) for detailed release notes.
