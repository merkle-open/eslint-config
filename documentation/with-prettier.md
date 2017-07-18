## with prettier

### ES6 + Prettier
```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es6-browser.js",
    "@namics/eslint-config/configurations/es6-browser-disable-styles.js"
  ]
};
```

### ES6 + React + Prettier
```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es6-react.js",
    "@namics/eslint-config/configurations/es6-react-disable-styles.js"
  ]
};
```

### ES6 + React + Flow + Prettier
```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es6-react.js",
    "@namics/eslint-config/configurations/es6-react-disable-styles.js",
    "@namics/eslint-config/configurations/flow.js",
    "@namics/eslint-config/configurations/flow-disable-styles.js"
  ]
};
```
