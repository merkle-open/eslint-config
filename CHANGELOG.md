# Changelog

All notable changes to `@merkle-open/eslint-config` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [5.0.0-alpha.1] - 2026-07-01

### ⚠️ BREAKING CHANGES

This is a major version upgrade with significant breaking changes. See the [Migration Guide](./documentation/MIGRATION.md) for step-by-step upgrade instructions.

#### Platform Requirements

| Requirement | v4 | v5 | Notes |
|-------------|----|----|-------|
| Node.js | >=14 | ^20.19.0 \|\| ^22.13.0 \|\| >=24 | ESLint 10 requirement |
| ESLint | ^8.x | ^10.x | Flat config only |
| TypeScript | ^4.x \|\| ^5.x | ^5.x \|\| ^6.x | Peer dependency |

#### Module System

| Aspect | v4 | v5 |
|--------|----|----|
| Module format | CommonJS | ESM (`"type": "module"`) |
| Config format | eslintrc (`.eslintrc.js`) | Flat Config (`eslint.config.js`) |
| Export style | `module.exports` | `export default` |

#### Configuration Changes

| v4 Import Path | v5 Import Path | Notes |
|----------------|----------------|-------|
| `@merkle-open/eslint-config` (default) | `@merkle-open/eslint-config` | Now points to `typescript-browser` (was `es8-browser`) |
| `@merkle-open/eslint-config/configurations/es8-browser` | `@merkle-open/eslint-config/es2025-browser` | Year-based naming |
| `@merkle-open/eslint-config/configurations/es8-node` | `@merkle-open/eslint-config/es2025-node` | Year-based naming |
| `@merkle-open/eslint-config/configurations/es8-react` | `@merkle-open/eslint-config/es2025-react` | Year-based naming |
| `@merkle-open/eslint-config/configurations/typescript-browser` | `@merkle-open/eslint-config/typescript-browser` | Direct export |
| `@merkle-open/eslint-config/configurations/typescript-node` | `@merkle-open/eslint-config/typescript-node` | Direct export |
| `@merkle-open/eslint-config/configurations/typescript-react` | `@merkle-open/eslint-config/typescript-react` | Direct export |
| `*-disable-styles` variants | `*-disable-styles` variants | Same pattern, new paths |

---

### Added

#### New Files

| File | Purpose |
|------|---------|
| `index.js` | Default export wrapper (re-exports `typescript-browser`) |
| `eslint.config.js` | Package's own ESLint configuration (flat config) |
| `configurations/base.js` | **NEW:** Shared base configuration composing all rule modules |
| `configurations/es2025-browser.js` | JavaScript browser preset (replaces es8-browser) |
| `configurations/es2025-node.js` | JavaScript Node.js preset (replaces es8-node) |
| `configurations/es2025-react.js` | JavaScript React preset (replaces es8-react) |
| `configurations/es2025-*-disable-styles.js` | Disable-styles variants for JS presets |
| `rules/es2025.js` | **NEW:** Merged ES2015–ES2025 rules (was es6.js + es8.js) |
| `disable-styles/` | **NEW:** Dedicated directory for disable-styles building blocks |
| `disable-styles/best-practices.js` | Style-related best-practices rules → "off" |
| `disable-styles/errors.js` | Style-related error rules → "off" |
| `disable-styles/style.js` | All formatting rules → "off" (40+ rules) |
| `disable-styles/es2025.js` | ES2025 style rules → "off" |
| `disable-styles/imports.js` | Import style rules → "off" |
| `disable-styles/variables.js` | Variable style rules → "off" |
| `disable-styles/typescript.js` | `@stylistic/ts/*` formatting rules → "off" |
| `disable-styles/react.js` | React formatting rules → "off" |
| `disable-styles/react-a11y.js` | React a11y style rules → "off" |
| `disable-styles/react-hooks.js` | React hooks style rules → "off" |
| `disable-styles/node.js` | Node.js style rules → "off" |
| `test/` | **NEW:** Comprehensive per-rule test suite (585 files) |

#### New Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@eslint/js` | ^10.x | ESLint recommended rules (flat config) |
| `@stylistic/eslint-plugin` | ^4.x | Formatting rules (replaces deprecated ESLint core rules) |
| `@stylistic/eslint-plugin-ts` | ^4.x | TypeScript formatting rules |
| `eslint-plugin-import-x` | ^4.x | ESM-compatible import rules (replaces `eslint-plugin-import`) |
| `globals` | ^16.x | Global variable definitions for flat config |
| `typescript-eslint` | ^8.x | Unified TypeScript ESLint package |

#### New Features

- **Flat Config:** Full ESLint 10 flat config support with array-based composition
- **ECMAScript 2025:** Updated to `ecmaVersion: 2025` with `globals.es2025`
- **Package Exports:** Modern `"exports"` field with 13 entry points
- **Default Export Changed:** Default now exports `typescript-browser` (was `es8-browser`)
- **Comprehensive Tests:** 585 per-rule test files matching v4 architecture

---

### Changed

#### Migrated Files (CommonJS → ESM)

| File | Changes |
|------|---------|
| `rules/best-practices.js` | `module.exports` → `export default` |
| `rules/errors.js` | `module.exports` → `export default` |
| `rules/style.js` | `module.exports` → `export default` |
| `rules/imports.js` | `module.exports` → `export default`; Plugin prefix `import/` → `import-x/` |
| `rules/variables.js` | `module.exports` → `export default` |
| `rules/node.js` | `module.exports` → `export default` |
| `rules/react.js` | `module.exports` → `export default`; Removed deprecated rules |
| `rules/react-a11y.js` | `module.exports` → `export default` |
| `rules/react-hooks.js` | `module.exports` → `export default` |
| `rules/typescript.js` | `module.exports` → `export default`; Major rule updates (see below) |
| `configurations/typescript.js` | Flat config format; uses `typescript-eslint` unified package |
| `configurations/typescript-browser.js` | Flat config format; extends `typescript.js` + browser globals |
| `configurations/typescript-node.js` | Flat config format; extends `typescript.js` + node globals |
| `configurations/typescript-react.js` | Flat config format; explicit React version `18.3` |
| `configurations/typescript-*-disable-styles.js` | Flat config format; uses `defineConfig()` |
| `bin/write-rule-test-files.js` | Full rewrite for ESM and v5 test structure |
| `bin/utils.js` | `module.exports` → `export default` |
| `bin/identify-undefined-rules.js` | `require()` → `import` |
| `bin/write-documentation.js` | `require()` → `import` |
| `.prettierrc.js` | `module.exports` → `export default` |

#### TypeScript Rules Changes

| Rule | v4 | v5 | Reason |
|------|----|----|--------|
| `@typescript-eslint/ban-types` | Enabled | **Removed** | Deprecated in typescript-eslint v8 |
| `@typescript-eslint/no-empty-interface` | Enabled | **Removed** | Deprecated; use `@typescript-eslint/no-empty-object-type` |
| `@typescript-eslint/no-var-requires` | Enabled | **Removed** | Deprecated in typescript-eslint v8 |
| `@typescript-eslint/no-type-alias` | Enabled | **Removed** | Deprecated in typescript-eslint v8 |
| `@typescript-eslint/indent` | Enabled | **Removed** | Moved to `@stylistic/ts/indent` |
| `@typescript-eslint/member-delimiter-style` | Enabled | **Removed** | Moved to `@stylistic/ts/member-delimiter-style` |
| `@typescript-eslint/type-annotation-spacing` | Enabled | **Removed** | Moved to `@stylistic/ts/type-annotation-spacing` |
| `@typescript-eslint/naming-convention` | Required `I` prefix for interfaces | **Changed** | `I` prefix no longer required |
| `@typescript-eslint/no-restricted-types` | N/A | **Added** | Replaces `ban-types` for custom type restrictions |
| `@typescript-eslint/no-empty-object-type` | N/A | **Added** | Replaces `no-empty-interface` |
| `@stylistic/ts/indent` | N/A | **Added** | 2-space indent for TypeScript |
| `@stylistic/ts/member-delimiter-style` | N/A | **Added** | Semicolon delimiter style |
| `@stylistic/ts/type-annotation-spacing` | N/A | **Added** | Spacing around type annotations |
| `@stylistic/ts/semi` | N/A | **Added** | Always require semicolons |

#### React Rules Changes

| Rule | v4 | v5 | Reason |
|------|----|----|--------|
| `react/jsx-sort-prop-types` | Enabled | **Removed** | Deprecated in eslint-plugin-react |
| `react/require-extension` | Enabled | **Removed** | Deprecated in eslint-plugin-react |
| `react/jsx-uses-react` | Enabled | **Disabled** | Not needed with React 17+ JSX transform |
| `react/react-in-jsx-scope` | Enabled | **Disabled** | Not needed with React 17+ JSX transform |
| React version detection | `"detect"` | `"18.3"` | Explicit version avoids ESLint 10 compatibility issues |

#### Import Rules Changes

| Rule | v4 | v5 | Reason |
|------|----|----|--------|
| All `import/*` rules | `eslint-plugin-import` | `eslint-plugin-import-x` | Better ESM and `exports` field support |
| Rule prefix | `import/` | `import-x/` | Plugin renamed |

#### Core ESLint Rules Removed (Deprecated)

| Rule | Replacement |
|------|-------------|
| `no-native-reassign` | `no-global-assign` (handled by ESLint recommended) |
| `no-negated-in-lhs` | `no-unsafe-negation` (handled by ESLint recommended) |
| `valid-jsdoc` | None (use TypeScript for type checking) |
| `require-jsdoc` | None (use TypeScript for type checking) |
| `no-spaced-func` | `@stylistic/function-call-spacing` |
| `id-blacklist` | `id-denylist` |
| `no-new-object` | `no-object-constructor` |

---

### Removed

#### Removed Configuration Files

| File | Reason |
|------|--------|
| `configurations/es5.js` | ES5 no longer supported |
| `configurations/es5-browser.js` | ES5 no longer supported |
| `configurations/es5-node.js` | ES5 no longer supported |
| `configurations/es5-disable-styles.js` | ES5 no longer supported |
| `configurations/es5-browser-disable-styles.js` | ES5 no longer supported |
| `configurations/es5-node-disable-styles.js` | ES5 no longer supported |
| `configurations/es6.js` | Merged into es2025 presets |
| `configurations/es6-browser.js` | Merged into es2025-browser |
| `configurations/es6-node.js` | Merged into es2025-node |
| `configurations/es6-react.js` | Merged into es2025-react |
| `configurations/es6-disable-styles.js` | Merged into es2025-*-disable-styles |
| `configurations/es6-browser-disable-styles.js` | Merged into es2025-browser-disable-styles |
| `configurations/es6-node-disable-styles.js` | Merged into es2025-node-disable-styles |
| `configurations/es6-react-disable-styles.js` | Merged into es2025-react-disable-styles |
| `configurations/es7.js` | Merged into es2025 presets |
| `configurations/es7-browser.js` | Merged into es2025-browser |
| `configurations/es7-node.js` | Merged into es2025-node |
| `configurations/es7-react.js` | Merged into es2025-react |
| `configurations/es7-disable-styles.js` | Merged into es2025-*-disable-styles |
| `configurations/es7-browser-disable-styles.js` | Merged into es2025-browser-disable-styles |
| `configurations/es7-node-disable-styles.js` | Merged into es2025-node-disable-styles |
| `configurations/es7-react-disable-styles.js` | Merged into es2025-react-disable-styles |
| `configurations/es8.js` | Renamed to es2025 presets |
| `configurations/es8-browser.js` | Renamed to es2025-browser |
| `configurations/es8-node.js` | Renamed to es2025-node |
| `configurations/es8-react.js` | Renamed to es2025-react |
| `configurations/es8-disable-styles.js` | Renamed to es2025-*-disable-styles |
| `configurations/es8-browser-disable-styles.js` | Renamed to es2025-browser-disable-styles |
| `configurations/es8-node-disable-styles.js` | Renamed to es2025-node-disable-styles |
| `configurations/es8-react-disable-styles.js` | Renamed to es2025-react-disable-styles |
| `configurations/typescript-disable-styles.js` | Split into preset-specific disable-styles |

#### Removed Rule Files

| File | Reason |
|------|--------|
| `rules/es6.js` | Merged into `rules/es2025.js` |
| `rules/es8.js` | Merged into `rules/es2025.js` |
| `rules/strict.js` | Merged into `rules/best-practices.js` |
| `rules/es6-disable.js` | Obsolete (ES6 features are standard) |
| `rules/es6-disable-styles.js` | Moved to `disable-styles/es2025.js` |
| `rules/es8-disable-styles.js` | Moved to `disable-styles/es2025.js` |
| `rules/best-practices-disable-styles.js` | Moved to `disable-styles/best-practices.js` |
| `rules/errors-disable-styles.js` | Moved to `disable-styles/errors.js` |
| `rules/imports-disable-styles.js` | Moved to `disable-styles/imports.js` |
| `rules/node-disable-styles.js` | Moved to `disable-styles/node.js` |
| `rules/node-disable.js` | Obsolete |
| `rules/react-disable-styles.js` | Moved to `disable-styles/react.js` |
| `rules/react-a11y-disable-styles.js` | Moved to `disable-styles/react-a11y.js` |
| `rules/react-hooks-disable-styles.js` | Moved to `disable-styles/react-hooks.js` |
| `rules/strict-disable-styles.js` | Obsolete (strict merged into best-practices) |
| `rules/style-disable-styles.js` | Moved to `disable-styles/style.js` |
| `rules/typescript-disable-styles.js` | Moved to `disable-styles/typescript.js` |
| `rules/variables-disable-styles.js` | Moved to `disable-styles/variables.js` |

#### Removed Root Files

| File | Reason |
|------|--------|
| `.eslintrc.js` | Replaced by `eslint.config.js` (flat config) |
| `.eslintignore` | Merged into `eslint.config.js` ignores array |
| `.prettierrc.unstyled.js` | Obsolete (no longer needed) |
| `bin/.eslintrc.js` | No longer needed (flat config) |

#### Removed Directories

| Directory | Reason |
|-----------|--------|
| `helpers/` | Obsolete utility code |
| `test/es5/`, `test/es5-*/` | ES5 tests removed |
| `test/es6/`, `test/es6-*/` | ES6 tests replaced with es2025 tests |
| `test/es7/`, `test/es7-*/` | ES7 tests replaced with es2025 tests |
| `test/es8/`, `test/es8-*/` | ES8 tests replaced with es2025 tests |
| `test/typescript/` (old) | Replaced with preset-specific test directories |

#### Removed Dependencies

| Package | Reason |
|---------|--------|
| `@babel/core` | Babel parser removed from shared config |
| `@babel/eslint-parser` | ESLint's espree parser natively supports ES2025 |
| `@babel/preset-react` | Not needed without Babel parser |
| `@typescript-eslint/eslint-plugin` | Replaced by unified `typescript-eslint` |
| `@typescript-eslint/parser` | Replaced by unified `typescript-eslint` |
| `eslint-plugin-import` | Replaced by `eslint-plugin-import-x` |
| `npm-run-all` | Simplified npm scripts |

---

### Fixed

- **Flat Config Compatibility:** All configurations now use proper flat config format (no `extends` key)
- **React Plugin ESLint 10 Compatibility:** Use explicit React version instead of `"detect"` to avoid `getFilename` API error
- **TypeScript Stylistic Plugin:** Added `@stylistic/eslint-plugin-ts` for TypeScript-specific formatting rules

---

### Migration Summary

#### For TypeScript Projects (Most Common)

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
import config from '@merkle-open/eslint-config/typescript-react';
export default [...config];
```

#### For JavaScript Projects

**Before (v4):**
```javascript
// .eslintrc.js
module.exports = {
  extends: ['@merkle-open/eslint-config/configurations/es8-browser'],
};
```

**After (v5):**
```javascript
// eslint.config.js
import config from '@merkle-open/eslint-config/es2025-browser';
export default [...config];
```

#### With Prettier Integration

**Using disable-styles (recommended):**
```javascript
// eslint.config.js
import config from '@merkle-open/eslint-config/typescript-react-disable-styles';
export default [...config];
```

**Using eslint-config-prettier (alternative):**
```javascript
// eslint.config.js
import config from '@merkle-open/eslint-config/typescript-react';
import prettierConfig from 'eslint-config-prettier';
export default [...config, prettierConfig];
```

---

### File-by-File Change Reference

<details>
<summary><strong>Click to expand complete file mapping (v4 → v5)</strong></summary>

#### Root Files

| v4 File | v5 File | Change Type |
|---------|---------|-------------|
| `.eslintrc.js` | `eslint.config.js` | Renamed + Rewritten |
| `.eslintignore` | _(merged into eslint.config.js)_ | Removed |
| `.prettierrc.js` | `.prettierrc.js` | Migrated to ESM |
| `.prettierrc.unstyled.js` | _(removed)_ | Removed |
| `package.json` | `package.json` | Major updates (type, exports, deps) |
| `README.md` | `README.md` | Needs update in Phase 5.2 |
| `tsconfig.json` | `tsconfig.json` | Unchanged |
| _(new)_ | `index.js` | Added (default export) |

#### bin/ Directory

| v4 File | v5 File | Change Type |
|---------|---------|-------------|
| `bin/.eslintrc.js` | _(removed)_ | Removed |
| `bin/identify-undefined-rules.js` | `bin/identify-undefined-rules.js` | Migrated to ESM |
| `bin/utils.js` | `bin/utils.js` | Migrated to ESM |
| `bin/write-documentation.js` | `bin/write-documentation.js` | Migrated to ESM |
| `bin/write-rule-test-files.js` | `bin/write-rule-test-files.js` | Rewritten for v5 |

#### rules/ Directory

| v4 File | v5 File | Change Type |
|---------|---------|-------------|
| `rules/best-practices.js` | `rules/best-practices.js` | Migrated to ESM |
| `rules/best-practices-disable-styles.js` | `disable-styles/best-practices.js` | Moved + Renamed |
| `rules/errors.js` | `rules/errors.js` | Migrated to ESM |
| `rules/errors-disable-styles.js` | `disable-styles/errors.js` | Moved + Renamed |
| `rules/es6.js` | _(merged into rules/es2025.js)_ | Merged |
| `rules/es6-disable.js` | _(removed)_ | Removed (obsolete) |
| `rules/es6-disable-styles.js` | _(merged into disable-styles/es2025.js)_ | Merged |
| `rules/es8.js` | _(merged into rules/es2025.js)_ | Merged |
| `rules/es8-disable-styles.js` | _(merged into disable-styles/es2025.js)_ | Merged |
| _(new)_ | `rules/es2025.js` | Added (merged es6+es8) |
| `rules/imports.js` | `rules/imports.js` | Migrated + import-x prefix |
| `rules/imports-disable-styles.js` | `disable-styles/imports.js` | Moved + Renamed |
| `rules/node.js` | `rules/node.js` | Migrated to ESM |
| `rules/node-disable.js` | _(removed)_ | Removed (obsolete) |
| `rules/node-disable-styles.js` | `disable-styles/node.js` | Moved + Renamed |
| `rules/react.js` | `rules/react.js` | Migrated + deprecated rules removed |
| `rules/react-disable-styles.js` | `disable-styles/react.js` | Moved + Renamed |
| `rules/react-a11y.js` | `rules/react-a11y.js` | Migrated to ESM |
| `rules/react-a11y-disable-styles.js` | `disable-styles/react-a11y.js` | Moved + Renamed |
| `rules/react-hooks.js` | `rules/react-hooks.js` | Migrated to ESM |
| `rules/react-hooks-disable-styles.js` | `disable-styles/react-hooks.js` | Moved + Renamed |
| `rules/strict.js` | _(merged into rules/best-practices.js)_ | Merged |
| `rules/strict-disable-styles.js` | _(removed)_ | Removed |
| `rules/style.js` | `rules/style.js` | Migrated to ESM |
| `rules/style-disable-styles.js` | `disable-styles/style.js` | Moved + Renamed |
| `rules/typescript.js` | `rules/typescript.js` | Major rewrite (see TS rules changes) |
| `rules/typescript-disable-styles.js` | `disable-styles/typescript.js` | Moved + Renamed + @stylistic/ts |
| `rules/variables.js` | `rules/variables.js` | Migrated to ESM |
| `rules/variables-disable-styles.js` | `disable-styles/variables.js` | Moved + Renamed |

#### configurations/ Directory

| v4 File | v5 File | Change Type |
|---------|---------|-------------|
| _(new)_ | `configurations/base.js` | Added (shared base) |
| `configurations/es5*.js` (6 files) | _(removed)_ | Removed (ES5 dropped) |
| `configurations/es6*.js` (8 files) | _(merged into es2025-*)_ | Merged |
| `configurations/es7*.js` (8 files) | _(merged into es2025-*)_ | Merged |
| `configurations/es8.js` | _(internal, not exported)_ | Architecture changed |
| `configurations/es8-browser.js` | `configurations/es2025-browser.js` | Renamed + Rewritten |
| `configurations/es8-node.js` | `configurations/es2025-node.js` | Renamed + Rewritten |
| `configurations/es8-react.js` | `configurations/es2025-react.js` | Renamed + Rewritten |
| `configurations/es8-disable-styles.js` | _(split into preset-specific)_ | Split |
| `configurations/es8-browser-disable-styles.js` | `configurations/es2025-browser-disable-styles.js` | Renamed + Rewritten |
| `configurations/es8-node-disable-styles.js` | `configurations/es2025-node-disable-styles.js` | Renamed + Rewritten |
| `configurations/es8-react-disable-styles.js` | `configurations/es2025-react-disable-styles.js` | Renamed + Rewritten |
| `configurations/typescript.js` | `configurations/typescript.js` | Rewritten (flat config) |
| `configurations/typescript-browser.js` | `configurations/typescript-browser.js` | Rewritten (flat config) |
| `configurations/typescript-node.js` | `configurations/typescript-node.js` | Rewritten (flat config) |
| `configurations/typescript-react.js` | `configurations/typescript-react.js` | Rewritten (flat config) |
| `configurations/typescript-disable-styles.js` | _(split into preset-specific)_ | Split |
| `configurations/typescript-browser-disable-styles.js` | `configurations/typescript-browser-disable-styles.js` | Rewritten |
| `configurations/typescript-node-disable-styles.js` | `configurations/typescript-node-disable-styles.js` | Rewritten |
| `configurations/typescript-react-disable-styles.js` | `configurations/typescript-react-disable-styles.js` | Rewritten |

#### disable-styles/ Directory (NEW in v5)

| v4 Source | v5 File | Notes |
|-----------|---------|-------|
| `rules/best-practices-disable-styles.js` | `disable-styles/best-practices.js` | 7 rules |
| `rules/errors-disable-styles.js` | `disable-styles/errors.js` | 4 rules |
| `rules/style-disable-styles.js` | `disable-styles/style.js` | 40+ rules |
| `rules/es6-disable-styles.js` + `es8-disable-styles.js` | `disable-styles/es2025.js` | 7 rules |
| `rules/imports-disable-styles.js` | `disable-styles/imports.js` | 2 rules |
| `rules/variables-disable-styles.js` | `disable-styles/variables.js` | 3 rules |
| `rules/typescript-disable-styles.js` | `disable-styles/typescript.js` | 12 @stylistic/ts rules |
| `rules/node-disable-styles.js` | `disable-styles/node.js` | 0 rules (placeholder) |
| `rules/react-disable-styles.js` | `disable-styles/react.js` | 9 rules |
| `rules/react-a11y-disable-styles.js` | `disable-styles/react-a11y.js` | 0 rules (placeholder) |
| `rules/react-hooks-disable-styles.js` | `disable-styles/react-hooks.js` | 0 rules (placeholder) |
| _(new)_ | `disable-styles/.gitkeep` | Directory marker |

#### helpers/ Directory (REMOVED)

| v4 File | v5 File | Notes |
|---------|---------|-------|
| `helpers/*.js` | _(removed)_ | Obsolete utility code |

</details>

---

## [4.0.1] - Previous Release

See [v4 release history](https://github.com/merkle-open/eslint-config/releases) for changes prior to v5.

---

[5.0.0-alpha.1]: https://github.com/merkle-open/eslint-config/compare/v4.0.1...v5.0.0-alpha.1
[4.0.1]: https://github.com/merkle-open/eslint-config/releases/tag/v4.0.1
