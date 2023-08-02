/* [21.07.2016] approved by skill group core team */
module.exports = {
	env: {
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	plugins: ['import'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.json'],
			},
		},
	},
	rules: {
		// Static analysis:

		// ensure imports point to files/modules that can be resolved
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-unresolved.md
		'import/no-unresolved': [2, { commonjs: true }],

		// ensure named imports coupled with named exports
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/named.md#when-not-to-use-it
		'import/named': 0,

		// ensure default import coupled with default export
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/default.md#when-not-to-use-it
		'import/default': 0,

		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/namespace.md
		'import/namespace': 0,

		// Helpful warnings:

		// disallow invalid exports, e.g. multiple defaults
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/export.md
		'import/export': 2,

		// do not allow a default import name to match a named export
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-named-as-default.md
		'import/no-named-as-default': 0,

		// warn on accessing default export property names that are also named exports
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-named-as-default-member.md
		'import/no-named-as-default-member': 2,

		// disallow use of jsdoc-marked-deprecated imports
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-deprecated.md
		'import/no-deprecated': 0,

		// Forbid the use of extraneous packages
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-extraneous-dependencies.md
		'import/no-extraneous-dependencies': [
			0,
			{
				devDependencies: false,
				optionalDependencies: false,
			},
		],

		// Forbid mutable exports
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-mutable-exports.md
		'import/no-mutable-exports': 2,

		// Module systems:

		// disallow require()
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-commonjs.md
		'import/no-commonjs': 0,

		// disallow AMD require/define
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-amd.md
		'import/no-amd': 2,

		// No Node.js builtin modules
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-nodejs-modules.md
		'import/no-nodejs-modules': 0,

		// Style guide:

		// disallow non-import statements appearing before import statements
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/imports-first.md
		'import/imports-first': [2, 'absolute-first'],

		// disallow duplicate imports
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-duplicates.md
		'import/no-duplicates': 2,

		// disallow namespace imports
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-namespace.md
		'import/no-namespace': 0,

		// Ensure consistent use of file extension within the import path
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/extensions.md
		'import/extensions': [0, 'never'],

		// Enforce a convention in module import order
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/order.md
		'import/order': [
			0,
			{
				'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'never',
			},
		],

		// Require a newline after the last import/require in a group
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/newline-after-import.md
		'import/newline-after-import': 0,

		// Require modules with a single export to use a default export
		// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/prefer-default-export.md
		'import/prefer-default-export': 0,
	},
};
