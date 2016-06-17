module.exports = {

	extends: [
		'./es6.js',
		'../rules/react',
		'../rules/react-a11y'
	].map(require.resolve),
	env: {
		browser: true,
		node: false,
		amd: false,
		mocha: false,
		jasmine: false
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			generators: false,
			objectLiteralDuplicateProperties: false,
			jsx: true
		}
	},
	ecmaFeatures: {
		jsx: true
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json']
			}
		},
		react: {
			pragma: 'React',
			version: '0.15'
		}
	}

};
