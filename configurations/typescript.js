import tseslint from 'typescript-eslint';
import base from './base.js';
import tsRules from '../rules/typescript.js';

export default [
	...base,

	...tseslint.configs.recommended,

	{
		files: ['**/*.{ts,tsx,mts,cts}'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				// Note: tsconfigRootDir is NOT set here — projectService auto-detects
				// from the consumer's working directory. Setting import.meta.dirname
				// in a shared config would point to node_modules/, which is wrong.
			},
		},
		rules: {
			'no-undef': 'off', // TS type system covers this
			'no-redeclare': 'off', // TS compiler error
			'no-dupe-class-members': 'off', // TS compiler error
			'constructor-super': 'off', // TS compiler error
			'no-const-assign': 'off', // TS compiler error
			'no-unused-vars': 'off', // Replaced by @typescript-eslint/no-unused-vars

			// TS-specific formatting parity (replaces removed @typescript-eslint formatting rules)
			'@stylistic/indent': ['error', 2],
			'@stylistic/member-delimiter-style': 'error',
			'@stylistic/type-annotation-spacing': 'error',
			'@stylistic/semi': ['error', 'always'],

			...tsRules,
		},
	},
];
