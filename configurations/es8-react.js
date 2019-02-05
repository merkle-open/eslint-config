module.exports = {

	'parser': 'babel-eslint',
	'plugins': [
		'jsx-a11y',
		'react',
	],
	'extends': [
		'./es8.js',
		'../rules/react.js',
		'../rules/react-a11y.js',
	].map(require.resolve),
	'env': {
		'browser': true,
		'node': false,
		'amd': false,
		'mocha': true,
		'jasmine': true,
		'jest': true,
		'jquery': true,
		'serviceworker': true,
		'worker': true,
	},
	'parserOptions': {
		'ecmaVersion': 8,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true,
		},
	},
	'settings': {
		'import/resolver': {
			'node': {
				'extensions': ['.js', '.jsx', '.json'],
			},
		},
	},

};
