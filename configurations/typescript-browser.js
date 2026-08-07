import globals from 'globals';
import typescript from './typescript.js';

export default [
	...typescript,
	{
		files: ['**/*.{ts,tsx,mts,cts}'],
		languageOptions: {
			globals: { ...globals.browser },
		},
	},
];
