# ESLint config Namics

[![Build Status](https://img.shields.io/travis/namics/eslint-config-namics/master.svg)](https://travis-ci.org/namics/eslint-config-namics)
[![Build Status](https://ci.appveyor.com/api/projects/status/sroqr91h6gjecoqi/branch/master?svg=true)](https://ci.appveyor.com/project/smollweide/eslint-config-namics/branch/master)
[![Dependencies](https://img.shields.io/david/namics/eslint-config-namics/master.svg)](https://david-dm.org/namics/eslint-config-namics)
[![npm](https://img.shields.io/npm/v/@namics/eslint-config.svg)](https://www.npmjs.com/package/@namics/eslint-config)
[![Codestyle](https://img.shields.io/badge/codestyle-namics-green.svg)](https://github.com/namics/eslint-config-namics)

## Installation
```bash
$ npm install --save-dev @namics/eslint-config
```

## Usage
- `@namics/eslint-config/configurations/es6-browser` - ES6 + browser
- `@namics/eslint-config/configurations/es6-react` - ES6 + react
- `@namics/eslint-config/configurations/es6-node` - ES6 + node
- `@namics/eslint-config/configurations/flow` - flow
- `@namics/eslint-config/configurations/es5-browser` - ES5 + browser (deprecated)
- `@namics/eslint-config/configurations/es5-node` - ES5 + node (deprecated)

### .eslintrc.js (add globals here if needed)
```
module.exports = {
  "extends": "@namics/eslint-config/configurations/es6-browser.js"
};
```

####
- [configuration with flowtype](./documentation/with-flow.md)
- [configuration with prettier](./documentation/with-prettier.md)

### .eslintignore
```
/.idea/
/node_modules/
```

### package.json
```
"scripts": {
  "lint": "npm run lint:js",
  "lint:js": "node_modules/.bin/eslint ."
},
```
then run `npm run lint`

### Example usage in project tree
- .eslintrc.js (es6-react)
- .eslintignore
- src
    - app.jsx
- test
    - .eslintrc.js (es6-node)
    - index.js
- scripts
    - .eslintrc.js (es5-node)
    - index.js

## Documentation
- [Best practices](./documentation/best-practices.md) (ES5 + ES6)
- [Style](./documentation/style.md) (ES5 + ES6)
- [Variables](./documentation/variables.md) (ES5 + ES6)
- [Errors](./documentation/errors.md) (ES5 + ES6)
- [Node](./documentation/node.md) (ES5 + ES6)
- [ES6](./documentation/es6.md) (ES6)
- [Imports](./documentation/imports.md) (ES6)
- [React](./documentation/react.md) (ES6)
- [React A11y](./documentation/react-a11y.md) (ES6)
- [Flow](./documentation/flow.md) (ES6)

## Thanks to
* [Namics.](https://www.namics.com/en/)
* [ESLint](https://github.com/eslint/eslint) for ESLint and the documentation [eslint.org](http://eslint.org/)
* [Walmart](https://github.com/walmartlabs) for sharing their config in [eslint-config-walmart](https://github.com/walmartlabs/eslint-config-walmart)
* [AirBnB](https://github.com/airbnb) for sharing their eslint config in [JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Gajus Kuizinas](https://github.com/gajus) for eslint-plugin-flowtype [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)

## License
[MIT License](./LICENSE)


## Changelog
Please see the [Releases](https://github.com/namics/eslint-config-namics/releases)
