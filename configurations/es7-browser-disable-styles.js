module.exports = {
	parser: 'babel-eslint',
	extends: [
		'./es7-disable-styles.js',
	].map(require.resolve),

};
