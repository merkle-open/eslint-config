# ESLint config Namics

[![Build Status](https://img.shields.io/travis/namics/eslint-config-namics/master.svg)](https://travis-ci.org/namics/eslint-config-namics)
[![Build status](https://ci.appveyor.com/api/projects/status/o2ka9gbhm1ry6kjm/branch/master?svg=true)](https://ci.appveyor.com/project/namics/eslint-config-namics/branch/master)
[![npm](https://img.shields.io/npm/v/@namics/eslint-config.svg)](https://www.npmjs.com/package/@namics/eslint-config)
[![Codestyle](https://img.shields.io/badge/codestyle-namics-green.svg)](https://github.com/namics/eslint-config-namics)

## Installation

```bash
$ npm install --save-dev eslint eslint-plugin-import @namics/eslint-config
```

## Usage Typescript (recommended)

> Typescript + React + Prettier

*.eslintrc.js*

```js
module.exports = {
  extends: [
    '@namics/eslint-config/configurations/typescript-browser',
    '@namics/eslint-config/configurations/typescript-browser-disable-styles',
    '@namics/eslint-config/configurations/typescript-react',
    '@namics/eslint-config/configurations/typescript-react-disable-styles',
  ].map(require.resolve),
};
```

*.eslintignore*

```
/.idea/
/node_modules/
```

*package.json*

```json
{
  "scripts": {
    "lint:ts": "eslint . --ext .jsx,.js,.ts,.tsx"
  }
}
```

*Enabling ESLint on TS files in VSCode*

You need to update the eslint.validate setting to:

```json
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
]
```

## Example configurations

<details>
<summary>Usage ES8 (ES2017) Browser + React</summary>

<br />

*.eslintrc.js*

```js
module.exports = {
  extends: [
    '@namics/eslint-config/configurations/es8-browser',
    '@namics/eslint-config/configurations/es8-react',
  ].map(require.resolve),
};
```

</details>

<details>
<summary>Usage ES8 (ES2017) Node.js</summary>

<br />

*.eslintrc.js*

```js
module.exports = {
  extends: [
    '@namics/eslint-config/configurations/es8-node',
  ].map(require.resolve),
};
```

</details>

<details>
<summary>Usage ES7 (ES2016) Browser + React</summary>

<br />

*.eslintrc.js*

```js
module.exports = {
  extends: [
    '@namics/eslint-config/configurations/es7-browser',
    '@namics/eslint-config/configurations/es7-react',
  ].map(require.resolve),
};
```

</details>

<details>
<summary>Usage ES7 (ES2016) Node.js</summary>

<br />

*.eslintrc.js*

```js
module.exports = {
  extends: [
    '@namics/eslint-config/configurations/es7-node',
  ].map(require.resolve),
};
```

</details>

<details>
<summary>Usage with Prettier</summary>

<br />

- [configuration with prettier](./documentation/with-prettier.md)


</details>

<details>
<summary>Usage in Monorepo (typescript, node.js, react)</summary>

<br />

*.eslintrc.js*

```js
module.exports = {
  extends: [
    // js configuration files for example webpack.config.js
    '@namics/eslint-config/configurations/es8-node.js',
    '@namics/eslint-config/configurations/es8-node-disable-styles.js',
    ].map(require.resolve),
    overrides: [
      {
        // react components and other client side code
        files: ['*.ts', '*.tsx'],
        extends: [
          '@namics/eslint-config/configurations/typescript-react.js',
          '@namics/eslint-config/configurations/typescript-react-disable-styles.js',
        ].map(require.resolve),
        settings: {
          react: {
            version: '16',
          },
        },
      },
      {
        // node.js server side code
        files: [
          'packages/graph-ql/**/*.ts',
          'packages/graph-ql/**/*.tsx',
        ],
        extends: [
          '@namics/eslint-config/configurations/typescript-node.js',
          '@namics/eslint-config/configurations/typescript-node-disable-styles.js',
        ].map(require.resolve),
      },
    ],
  ],
};
```

</details>


## Documentation

- [Best practices](./documentation/best-practices.md) (ES5/6/7/8,ts)
- [Style](./documentation/style.md) (ES5/6/7/8,ts)
- [Variables](./documentation/variables.md) (ES5/6/7/8,ts)
- [Errors](./documentation/errors.md) (ES5/6/7/8,ts)
- [Node](./documentation/node.md) (ES5/6/7/8,ts)
- [Node security](./documentation/security.md) (ES5/6/7/8,ts)
- [ES6](./documentation/es6.md) (ES6/7/8,ts)
- [ES8](./documentation/es8.md) (ES8,ts)
- [Imports](./documentation/imports.md) (ES6/7/8,ts)
- [React](./documentation/react.md) (ES6/7/8,ts)
- [React A11y](./documentation/react-a11y.md) (ES6/7/8,ts)
- [React hooks](./documentation/react-hooks.md) (ES6/7/8,ts)
- [Typescript](./documentation/typescript.md) (ts)

## Thanks to

* [Namics.](https://www.namics.com/en/)
* [ESLint](https://github.com/eslint/eslint) for ESLint and the documentation [eslint.org](http://eslint.org/)
* [Walmart](https://github.com/walmartlabs) for sharing their config in [eslint-config-walmart](https://github.com/walmartlabs/eslint-config-walmart)
* [AirBnB](https://github.com/airbnb) for sharing their eslint config in [JavaScript Style Guide](https://github.com/airbnb/javascript)

## License

[MIT License](./LICENSE)

## Changelog

Please see the [Releases](https://github.com/namics/eslint-config-namics/releases)
