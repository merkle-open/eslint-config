module.exports = {
	parser: '@babel/eslint-parser',

	env: {
		es6: true,
	},
	plugins: ['import'],

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.json'],
			},
		},
	},
	extends: [
		'../rules/node-disable.js',
		'../rules/best-practices.js',
		'../rules/errors.js',
		'../rules/style.js',
		'../rules/variables.js',
		'../rules/imports.js',
		'../rules/es6.js',
		'../rules/es8.js',
	].map(require.resolve),

	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: 8,
		sourceType: 'module',
	},
};
