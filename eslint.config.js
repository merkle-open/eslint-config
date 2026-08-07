import config from './configurations/es2025-node.js';
import disableStyles from './configurations/es2025-node-disable-styles.js';

export default [
	{
		ignores: ['test/**', 'node_modules/**', 'coverage/**'],
	},
	...config,
	...disableStyles,
];
