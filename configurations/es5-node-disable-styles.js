module.exports = {
	parser: '@babel/eslint-parser',
	extends: [
		'./es5-disable-styles.js',
		'../rules/node-disable-styles.js',
	].map(require.resolve),

};
