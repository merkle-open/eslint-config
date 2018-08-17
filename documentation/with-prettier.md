## with prettier

### ES8 (ES2017) + Prettier

```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es8-browser.js",
    "@namics/eslint-config/configurations/es8-browser-disable-styles.js"
  ].map(require.resolve)
};
```

### ES8 (ES2017) + React + Prettier

```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es8-react.js",
    "@namics/eslint-config/configurations/es8-react-disable-styles.js"
  ].map(require.resolve)
};
```
