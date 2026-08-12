import config from '../../configurations/typescript-react-disable-styles.js';

export default [
	...config,
	{
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'react/react-in-jsx-scope': 'off',
		},
	},
];
