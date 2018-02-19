## with flow
Flowtype rules will be accepted if the flow annotation was defined in first line of each file.
```
module.exports = {
  "extends": [
    "@namics/eslint-config/configurations/es8-react.js",
    "@namics/eslint-config/configurations/flow.js"
  ].map(require.resolve)
};
```
