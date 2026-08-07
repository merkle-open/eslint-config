import globals from 'globals';
import base from './base.js';

export default [
	...base,
	{
		languageOptions: {
			globals: { ...globals.browser },
		},
	},
];
