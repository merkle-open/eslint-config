/* [21.07.2016] approved by skill group core team */
/* v5: Flat rule export — env/parserOptions/plugins/settings moved to configurations/base.js */
export default {
	// Static analysis:

	// ensure imports point to files/modules that can be resolved
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-unresolved.md
	'import-x/no-unresolved': [2, { commonjs: true }],

	// ensure named imports coupled with named exports
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/named.md#when-not-to-use-it
	'import-x/named': 0,

	// ensure default import coupled with default export
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/default.md#when-not-to-use-it
	'import-x/default': 0,

	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/namespace.md
	'import-x/namespace': 0,

	// Helpful warnings:

	// disallow invalid exports, e.g. multiple defaults
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/export.md
	'import-x/export': 2,

	// do not allow a default import name to match a named export
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-named-as-default.md
	'import-x/no-named-as-default': 0,

	// warn on accessing default export property names that are also named exports
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-named-as-default-member.md
	'import-x/no-named-as-default-member': 2,

	// disallow use of jsdoc-marked-deprecated imports
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-deprecated.md
	'import-x/no-deprecated': 0,

	// Forbid the use of extraneous packages
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-extraneous-dependencies.md
	'import-x/no-extraneous-dependencies': [
		0,
		{
			devDependencies: false,
			optionalDependencies: false,
		},
	],

	// Forbid mutable exports
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-mutable-exports.md
	'import-x/no-mutable-exports': 2,

	// Module systems:

	// disallow require()
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-commonjs.md
	'import-x/no-commonjs': 0,

	// disallow AMD require/define
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-amd.md
	'import-x/no-amd': 2,

	// No Node.js builtin modules
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-nodejs-modules.md
	'import-x/no-nodejs-modules': 0,

	// Style guide:

	// disallow non-import statements appearing before import statements
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/imports-first.md
	'import-x/imports-first': [2, 'absolute-first'],

	// disallow duplicate imports
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-duplicates.md
	'import-x/no-duplicates': 2,

	// disallow namespace imports
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-namespace.md
	'import-x/no-namespace': 0,

	// Ensure consistent use of file extension within the import path
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/extensions.md
	'import-x/extensions': [0, 'never'],

	// Enforce a convention in module import order
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/order.md
	'import-x/order': [
		0,
		{
			'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			'newlines-between': 'never',
		},
	],

	// Require a newline after the last import/require in a group
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/newline-after-import.md
	'import-x/newline-after-import': 0,

	// Require modules with a single export to use a default export
	// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/prefer-default-export.md
	'import-x/prefer-default-export': 0,
};
