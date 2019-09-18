module.exports = {
	plugins: [
		'@typescript-eslint',
		'jsx-a11y',
		'react',
	],
	extends: [
		'./typescript.js',
		'../rules/react.js',
		'../rules/react-a11y.js',
	].map(require.resolve),
	env: {
		browser: true,
		node: false,
		amd: false,
		mocha: true,
		jasmine: true,
		jest: true,
		jquery: true,
		serviceworker: true,
		worker: true,
	},
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
};
