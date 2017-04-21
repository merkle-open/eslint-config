module.exports = {

	extends: [
		'../rules/es6-disable.js',
		'../rules/node-disable.js',
		'../rules/best-practices.js',
		'../rules/errors.js',
		'../rules/style.js',
		'../rules/variables.js',
	].map(require.resolve),
	env: {},
	parserOptions: {
		ecmaVersion: 5,
		sourceType: 'module',
	},

};
