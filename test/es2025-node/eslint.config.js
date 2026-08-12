import config from '../../configurations/es2025-node.js';

export default [
	...config,
	{
		// Allow test-specific patterns
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
		},
	},
];
