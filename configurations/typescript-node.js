import globals from 'globals';
import typescript from './typescript.js';
import nodeRules from '../rules/node.js';

export default [
	...typescript,
	{
		files: ['**/*.{ts,tsx,mts,cts}'],
		languageOptions: {
			globals: { ...globals.node, ...globals.nodeBuiltin },
		},
		rules: {
			...nodeRules,
		},
	},
];
