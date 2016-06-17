module.exports = {

	extends: [
		'../rules/best-practices',
		'../rules/errors',
		'../rules/node',
		'../rules/style',
		'../rules/variables',
		'../rules/imports',
		'../rules/es6'
	].map(require.resolve),
	env: {},

	// overwrite es5 rules here
	rules: {
		// allow multiple var statement per function
		'one-var': 0
	},

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			generators: false,
			objectLiteralDuplicateProperties: false
		}
	}

};
