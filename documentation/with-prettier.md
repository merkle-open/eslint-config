### with prettier

If you using prettier you should disable all eslint styling rules

```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es6-browser.js",
    "@namics/eslint-config/configurations/es6-browser-disable-styles.js"
  ]
};
```

```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es6-react.js",
    "@namics/eslint-config/configurations/es6-react-disable-styles.js",
    "@namics/eslint-config/configurations/flow.js",
    "@namics/eslint-config/configurations/flow.js-disable-styles"
  ]
};
```
