import config from '../../configurations/es2025-react-disable-styles.js';

export default [
	...config,
	{
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
			'react/react-in-jsx-scope': 'off',
		},
	},
];
