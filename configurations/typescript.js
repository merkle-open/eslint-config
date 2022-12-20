module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'../rules/node-disable.js',
		'../rules/best-practices.js',
		'../rules/errors.js',
		'../rules/style.js',
		'../rules/variables.js',
		'../rules/imports.js',
		'../rules/es6.js',
		'../rules/es8.js',
		'../rules/typescript.js',
	].map(require.resolve),
	parserOptions: {
		project: './tsconfig.json',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
			},
		},
	},
};
