import config from '../../configurations/es2025-node-disable-styles.js';

export default [
	...config,
	{
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
		},
	},
];
