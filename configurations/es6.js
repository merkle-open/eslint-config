module.exports = {

	env: {
		es6: true
	},
	plugins: [
		'import'
	],

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.json']
			}
		}
	},
	extends: [
		'../rules/best-practices',
		'../rules/errors',
		'../rules/node',
		'../rules/style',
		'../rules/variables',
		'../rules/imports',
		'../rules/es6'
	].map(require.resolve),

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			generators: false,
			objectLiteralDuplicateProperties: false
		}
	}

};
