module.exports = {
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/typescript/recommended',
		'./typescript.js',
		'../rules/vue.js',
	],
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
	overrides: [
		{
			files: [
				'./src/**/*.vue',
				'./tests/**/*',
			],
			rules: {
				'import/no-unresolved': 0,
			},
		},
	],
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
