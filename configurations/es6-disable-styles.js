module.exports = {
	parser: 'babel-eslint',
	extends: [
		'../rules/best-practices-disable-styles.js',
		'../rules/errors-disable-styles.js',
		'../rules/style-disable-styles.js',
		'../rules/variables-disable-styles.js',
		'../rules/imports-disable-styles.js',
		'../rules/es6-disable-styles.js',
	].map(require.resolve),

};
