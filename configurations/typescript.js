module.exports = {

	'parser': '@typescript-eslint/parser',

	'plugins': [
		'@typescript-eslint',
	],

	'extends': [
		'../rules/node-disable.js',
		'../rules/best-practices.js',
		'../rules/errors.js',
		'../rules/style.js',
		'../rules/variables.js',
		'../rules/imports.js',
		'../rules/es6.js',
		'../rules/es8.js',
	].map(require.resolve),

	'overrides': [
		{
			files: ['*.ts', '*.tsx', '*.vue'], // TypeScript files extensions
			extends: [
				'../rules/typescript.js',
			],
			parserOptions: {
				project: './tsconfig.json', // Specify it only for TypeScript files
			},
		},
	],

	'settings': {
		'import/resolver': {
			'node': {
				'extensions': ['.js', '.ts', '.jsx', '.tsx', '.json'],
			},
		},
	},
};
