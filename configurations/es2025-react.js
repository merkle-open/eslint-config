import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import a11yPlugin from 'eslint-plugin-jsx-a11y';
import esBrowser from './es2025-browser.js';
import reactRules from '../rules/react.js';
import reactA11yRules from '../rules/react-a11y.js';
import reactDisableStyles from '../disable-styles/react.js';

export default [
	...esBrowser,

	reactHooks.configs.flat.recommended,

	{
		files: ['**/*.{js,jsx,mjs,cjs}'],
		plugins: {
			react: reactPlugin,
		},
		settings: {
			react: { version: 'detect' },
		},
		rules: {
			...reactRules,
			// React's own JSX formatting rules are always disabled (formatter owns
			// layout), even in this non-disable-styles preset.
			...reactDisableStyles,
		},
	},

	{
		files: ['**/*.jsx'],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		plugins: {
			'jsx-a11y': a11yPlugin,
		},
		rules: {
			...reactA11yRules,
		},
	},
];
