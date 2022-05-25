module.exports = {
	plugins: [
		'@typescript-eslint',
		'vue',
		// 'jsx-a11y',
		// 'react',
		// 'react-hooks',
	],
	extends: [
		'./typescript.js',
		'../rules/vue.js',
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
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 8,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		extraFileExtensions: ['.vue'],
	},
};
