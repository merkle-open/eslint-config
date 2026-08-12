# Changelog

All notable changes to `@merkle-open/eslint-config` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [5.0.0] - 2026-08-11

### ⚠ BREAKING CHANGES (against `@merkle-open/eslint-config@4.0.0`)

- **Runtime and tooling baseline raised**
  - Node.js: `^20.19.0 || ^22.13.0 || >=24`
  - ESLint peer dependency: `^9.3.0`
  - TypeScript peer dependency: `^6.0.0` (optional; required when using TypeScript presets)

- **ESLint Flat Config + native ESM only**
  - Legacy `.eslintrc.*` and `.eslintignore` workflows are replaced by `eslint.config.js`.
  - Shared presets are consumed via ESM (`import` / `export default`), not CommonJS.

- **Preset surface redesigned**
  - `es5-*`, `es6-*`, and `es7-*` preset families were removed.
  - `es8-*` presets were renamed to `es2025-*`.
  - `*-disable-styles` presets remain available under the new import paths.
  - Default package export (`@merkle-open/eslint-config`) now resolves to `typescript-browser`; all other presets remain available as direct imports.

- **Rule namespace and rule-set updates**
  - Import plugin rules moved from `import/*` to `import-x/*` (`eslint-plugin-import-x`).
  - Deprecated TypeScript rules were removed/replaced (for example `ban-types` → `no-restricted-types`,
    `no-empty-interface` → `no-empty-object-type`).
  - TypeScript stylistic rules moved to `@stylistic/*`.
  - Interface naming no longer enforces an `I` prefix by default.

### Added

- New ES2025 JavaScript presets:
  - `es2025-browser`
  - `es2025-node`
  - `es2025-react`
  - matching `*-disable-styles` variants
- Dedicated `disable-styles/` rule modules for style rule suppression presets.
- Explicit public export entry points:
  - `@merkle-open/eslint-config` (default → `typescript-browser`)
  - `@merkle-open/eslint-config/typescript-browser`
  - `@merkle-open/eslint-config/typescript-browser-disable-styles`
  - `@merkle-open/eslint-config/typescript-node`
  - `@merkle-open/eslint-config/typescript-node-disable-styles`
  - `@merkle-open/eslint-config/typescript-react`
  - `@merkle-open/eslint-config/typescript-react-disable-styles`
  - `@merkle-open/eslint-config/es2025-browser`
  - `@merkle-open/eslint-config/es2025-browser-disable-styles`
  - `@merkle-open/eslint-config/es2025-node`
  - `@merkle-open/eslint-config/es2025-node-disable-styles`
  - `@merkle-open/eslint-config/es2025-react`
  - `@merkle-open/eslint-config/es2025-react-disable-styles`

### Changed

- JavaScript presets use ESLint’s default `espree` parser.
- TypeScript presets use `typescript-eslint` with `projectService: true` for tsconfig auto-detection.
- React presets use `react: { version: "detect" }`.
- Documentation now clearly distinguishes:
  - consumer ESLint peer range (`^9.3.0`)
  - package development/CI baseline (`eslint@9.39.4`)

### Removed

- Legacy internal configuration and rule files tied to removed preset families.
- Babel parser dependencies from the shared default configuration path.

### Migration

See the [Migration Guide](./documentation/MIGRATION.md) for a step-by-step v4 → v5 upgrade path.

---

See [release history](https://github.com/merkle-open/eslint-config/releases) for releases prior to v5.

[5.0.0]: https://github.com/merkle-open/eslint-config/compare/@merkle-open/eslint-config@4.0.0...@merkle-open/eslint-config@5.0.0
