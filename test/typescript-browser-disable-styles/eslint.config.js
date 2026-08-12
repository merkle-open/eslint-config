import config from '../../configurations/typescript-browser-disable-styles.js';

export default [
	...config,
	{
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
];
