import config from '../../configurations/es2025-react.js';

export default [
	...config,
	{
		// Allow test-specific patterns
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
			'react/react-in-jsx-scope': 'off',
		},
	},
];
