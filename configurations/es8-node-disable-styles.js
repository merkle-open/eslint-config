module.exports = {
	parser: 'babel-eslint',
	extends: [
		'./es8-disable-styles.js',
		'../rules/node-disable-styles.js',
	].map(require.resolve),
};
