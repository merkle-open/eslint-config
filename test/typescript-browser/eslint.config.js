import config from '../../configurations/typescript-browser.js';

export default [
	...config,
	{
		// Allow test-specific patterns
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
];
