module.exports = {
	parser: 'babel-eslint',
	extends: ['./es6-disable-styles.js'].map(require.resolve),
};
