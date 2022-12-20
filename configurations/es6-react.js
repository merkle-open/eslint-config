module.exports = {
	'parser': 'babel-eslint',
	'plugins': [
		'jsx-a11y',
		'react',
		'react-hooks',
	],
	'extends': [
		'./es6.js',
		'../rules/react.js',
		'../rules/react-a11y.js',
		'../rules/react-hooks.js',
	].map(require.resolve),
	'env': {
		'browser': true,
		'node': false,
		'amd': false,
		'mocha': false,
		'jasmine': false,
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'generators': true,
			'objectLiteralDuplicateProperties': false,
			'jsx': true,
		},
	},
	'settings': {
		'import/resolver': {
			'node': {
				'extensions': ['.js', '.jsx', '.json'],
			},
		},
		'react': {
			'version': 'detect',
		},
	},
};
