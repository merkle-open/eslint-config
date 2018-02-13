## with prettier

### ES7 (ES2016) + Prettier
```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es7-browser.js",
    "@namics/eslint-config/configurations/es7-browser-disable-styles.js"
  ]
};
```

### ES7 (ES2016) + React + Prettier
```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es7-react.js",
    "@namics/eslint-config/configurations/es7-react-disable-styles.js"
  ]
};
```

### ES7 (ES2016) + React + Flow + Prettier
```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es7-react.js",
    "@namics/eslint-config/configurations/es7-react-disable-styles.js",
    "@namics/eslint-config/configurations/flow.js",
    "@namics/eslint-config/configurations/flow-disable-styles.js"
  ]
};
```
