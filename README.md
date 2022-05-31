# ESLint config

[![Build Status](https://github.com/merkle-open/eslint-config/workflows/ci/badge.svg)](https://github.com/merkle-open/eslint-config/actions)
[![npm](https://img.shields.io/npm/v/@namics/eslint-config.svg)](https://www.npmjs.com/package/@namics/eslint-config)
[![Codestyle](https://img.shields.io/badge/codestyle-merkle-green.svg)](https://github.com/merkle-open/eslint-config)

## Installation

```bash
$ npm install --save-dev eslint eslint-plugin-import @namics/eslint-config
```

## Usage Typescript (recommended)

- `@namics/eslint-config/configurations/typescript-browser` - typescript + browser
- `@namics/eslint-config/configurations/typescript-react` - typescript + react
- `@namics/eslint-config/configurations/typescript-vue` - typescript + vue
- `@namics/eslint-config/configurations/typescript-node` - typescript + node

_package.json_

Non-Vue Only, "vue-cli-service lint" is kept as is otherwise

```json

{
  "scripts": {
    "lint:ts": "eslint . --ext .jsx,.js,.ts,.tsx"
  }
}

```

_Enabling ESLint on TS files in VSCode_

You need to update the eslint.validate setting to:

```json
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
]
```

## Usage ES8 (ES2017)

- `@namics/eslint-config/configurations/es8-browser` - ES8 + browser
- `@namics/eslint-config/configurations/es8-react` - ES8 + react
- `@namics/eslint-config/configurations/es8-node` - ES8 + node

## Usage ES7 (ES2016)

- `@namics/eslint-config/configurations/es7-browser` - ES7 + browser (deprecated)
- `@namics/eslint-config/configurations/es7-react` - ES7 + react (deprecated)
- `@namics/eslint-config/configurations/es7-node` - ES7 + node

## Usage ES6 (ES2015) - deprecated

- `@namics/eslint-config/configurations/es6-browser` - ES6 + browser (deprecated)
- `@namics/eslint-config/configurations/es6-react` - ES6 + react (deprecated)
- `@namics/eslint-config/configurations/es6-node` - ES6 + node (deprecated)

## Usage with Prettier

- [configuration with prettier](./documentation/with-prettier.md)

### .eslintrc.js (add globals here if needed)

```
module.exports = {
  extends: require.resolve('@namics/eslint-config/configurations/es8-browser.js'),
};
```

### .eslintignore

```
/.idea/
/node_modules/
```

### package.json

```
"scripts": {
  "lint": "npm run lint:js",
  "lint:js": "eslint ."
},
```

then run `npm run lint`

### Example usage in project tree

- .eslintrc.js (es8-react)
- .eslintignore
- src
  - app.jsx
- test
  - .eslintrc.js (es8-node)
  - index.js
- scripts
  - .eslintrc.js (es6-node)
  - index.js

## Documentation

- [Best practices](./documentation/best-practices.md) (ES5/6/7/8)
- [Style](./documentation/style.md) (ES5/6/7/8)
- [Variables](./documentation/variables.md) (ES5/6/7/8)
- [Errors](./documentation/errors.md) (ES5/6/7/8)
- [Node](./documentation/node.md) (ES5/6/7/8)
- [ES6](./documentation/es6.md) (ES6/7/8)
- [ES8](./documentation/es8.md) (ES8)
- [Imports](./documentation/imports.md) (ES6/7/8)
- [React](./documentation/react.md) (ES6/7/8)
- [React A11y](./documentation/react-a11y.md) (ES6/7/8)
- [React hooks](./documentation/react-hooks.md) (ES6/7/8)
- [Typescript](./documentation/typescript.md) (typescript)

## Build release

1. Create feature or bugfix branch based on master
2. Make changes and create pull request, add reviewer, wait for approval
3. Merge pull request into master
4. Prepare release notes, adjust package.json to next version ([Semantic Versioning](semantic versioning))
5. Run `npm publish` (locally) to create npm version
6. Create and push git tag for version
7. Add release notes on GitHub

## Thanks to

- [Merkle.](https://www.merkleinc.com/)
- [Namics.](https://www.namics.com/en/)
- [ESLint](https://github.com/eslint/eslint) for ESLint and the documentation [eslint.org](http://eslint.org/)
- [Walmart](https://github.com/walmartlabs) for sharing their config in [eslint-config-walmart](https://github.com/walmartlabs/eslint-config-walmart)
- [AirBnB](https://github.com/airbnb) for sharing their eslint config in [JavaScript Style Guide](https://github.com/airbnb/javascript)

## License

[MIT License](./LICENSE)

## Changelog

Please see the [Releases](https://github.com/merkle-open/eslint-config/releases)
