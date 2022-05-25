
/* Not yet approved by skill group core team */
module.exports = {
	// View link below for react rules documentation
	// https://eslint.vuejs.org/rules/
	plugins: [
		'import',
	],
	rules: {
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
		// If you're using a module bundler other than Node or Webpack,
		// you may end up with a lot of false positive reports of missing dependencies.
		'import/no-unresolved': 0,
	},
};
