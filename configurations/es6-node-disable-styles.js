module.exports = {
	parser: '@babel/eslint-parser',
	extends: [
		'./es6-disable-styles.js',
		'../rules/node-disable-styles.js',
	].map(require.resolve),

};
