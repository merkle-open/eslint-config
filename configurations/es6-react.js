module.exports = {
	'plugins': [
		'jsx-a11y',
		'react',
	],
	'extends': [
		'./es6.js',
		'../rules/react.js',
		'../rules/react-a11y.js',
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
			'pragma': 'React',
			'version': '0.15',
		},
	},

};
