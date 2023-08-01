module.exports = {
	parser: '@babel/eslint-parser',
	extends: ['./es8-disable-styles.js'].map(require.resolve),
};
