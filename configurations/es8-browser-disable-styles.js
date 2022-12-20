module.exports = {
	parser: 'babel-eslint',
	extends: ['./es8-disable-styles.js'].map(require.resolve),
};
