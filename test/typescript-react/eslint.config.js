import config from '../../configurations/typescript-react.js';

export default [
	...config,
	{
		// Allow test-specific patterns
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'react/react-in-jsx-scope': 'off',
		},
	},
];
