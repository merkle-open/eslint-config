module.exports = {
	parser: 'babel-eslint',
	extends: ['./es5-disable-styles.js'].map(require.resolve),
};
