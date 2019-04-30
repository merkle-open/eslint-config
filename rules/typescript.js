/* global module */
/* [12.04.2019] add typescript support */
module.exports = {
	rules: {
		'require-jsdoc': 0,
		'camelcase': 0,
		'indent': 0,
		'no-unused-vars': 0,
		'no-use-before-define': 0,
		'no-useless-constructor': 0,

		// Require that member overloads be consecutive (adjacent-overload-signatures from TSLint)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
		'@typescript-eslint/adjacent-overload-signatures': 2,

		// Requires using either T[] or Array<T> for arrays (array-type)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
		'@typescript-eslint/array-type': 2,

		// Enforces that types will not to be used (ban-types)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
		'@typescript-eslint/ban-types': 2,

		// Bans “// @ts-ignore” comments from being used (ban-ts-ignore)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
		'@typescript-eslint/ban-ts-ignore': 2,

		// Enforce camelCase naming convention (camelcase)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
		'@typescript-eslint/camelcase': [2, { properties: 'always' }],

		// Require PascalCased class and interface names (class-name-casing)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
		'@typescript-eslint/class-name-casing': 2,

		// Require explicit return types on functions and class methods (explicit-function-return-type)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
		'@typescript-eslint/explicit-function-return-type': 0,

		// Require explicit accessibility modifiers on class properties and methods (explicit-member-accessibility)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
		'@typescript-eslint/explicit-member-accessibility': 2,

		// Enforces naming of generic type variables (generic-type-naming)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
		'@typescript-eslint/generic-type-naming': [2, '^T[A-Z][a-zA-Z]+$'],

		// Enforce consistent indentation (indent)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
		'@typescript-eslint/indent': [2, 'tab'],

		// Require that interface names be prefixed with I (interface-name-prefix)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
		'@typescript-eslint/interface-name-prefix': [2, 'always'],

		// Require a specific member delimiter style for interfaces and type literals (member-delimiter-style)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
		'@typescript-eslint/member-delimiter-style': 2,

		// Enforces naming conventions for class members by visibility. (member-naming)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
		'@typescript-eslint/member-naming': [2, { private: '^_' }],

		// Require a consistent member declaration order (member-ordering)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
		'@typescript-eslint/member-ordering': 2,

		// Enforces the use of as Type assertions instead of <Type> assertions (no-angle-bracket-type-assertion)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-angle-bracket-type-assertion.md
		'@typescript-eslint/no-angle-bracket-type-assertion': 2,

		// Disallow generic Array constructors (no-array-constructor)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
		'@typescript-eslint/no-array-constructor': 2,

		// Disallow the declaration of empty interfaces (no-empty-interface)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
		'@typescript-eslint/no-empty-interface': 2,

		// Disallow usage of the any type (no-explicit-any)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
		'@typescript-eslint/no-explicit-any': 0,

		// Forbids the use of classes as namespaces (no-extraneous-class)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
		'@typescript-eslint/no-extraneous-class': 2,

		// Disallow iterating over an array with a for-in loop (no-for-in-array)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
		'@typescript-eslint/no-for-in-array': 2,

		// Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
		'@typescript-eslint/no-inferrable-types': 2,

		// Enforce valid definition of new and constructor. (no-misused-new)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
		'@typescript-eslint/no-misused-new': 2,

		// Disallow the use of custom TypeScript modules and namespaces (no-namespace)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
		'@typescript-eslint/no-namespace': 2,

		// Disallows non-null assertions using the ! postfix operator (no-non-null-assertion)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
		'@typescript-eslint/no-non-null-assertion': 2,

		// Forbids an object literal to appear in a type assertion expression (no-object-literal-type-assertion)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-object-literal-type-assertion.md
		'@typescript-eslint/no-object-literal-type-assertion': 2,

		// Disallow the use of parameter properties in class constructors. (no-parameter-properties)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
		'@typescript-eslint/no-parameter-properties': 2,

		// Disallows invocation of require() (no-require-imports)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
		'@typescript-eslint/no-require-imports': 2,

		// Disallow aliasing this (no-this-alias)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
		'@typescript-eslint/no-this-alias': 0,
		// already covered by consistent-this

		// Disallow /// <reference path="" /> comments (no-triple-slash-reference)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-triple-slash-reference.md
		'@typescript-eslint/no-triple-slash-reference': 0,

		// Disallow the use of type aliases (no-type-alias)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
		'@typescript-eslint/no-type-alias': 0,

		// Warns when a namespace qualifier is unnecessary. (no-unnecessary-qualifier)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
		'@typescript-eslint/no-unnecessary-qualifier': 2,

		// Warns if a type assertion does not change the type of an expression (no-unnecessary-type-assertion)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
		'@typescript-eslint/no-unnecessary-type-assertion': 2,

		// Disallow unused variables (no-unused-vars)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
		'@typescript-eslint/no-unused-vars': 2,

		// Disallow the use of variables before they are defined (no-use-before-define)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
		'@typescript-eslint/no-use-before-define': 2,

		// Disallow unnecessary constructors
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
		'@typescript-eslint/no-useless-constructor': 2,

		// Disallows the use of require statements except in import statements (no-var-requires)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
		'@typescript-eslint/no-var-requires': 2,

		// Use for-of loops instead of standard for loops over arrays (prefer-for-of)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
		'@typescript-eslint/prefer-for-of': 0,

		// Use function types instead of interfaces with call signatures (prefer-function-type)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
		'@typescript-eslint/prefer-function-type': 2,

		// Prefer an interface declaration over a type literal (type T = { ... }) (prefer-interface)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md
		'@typescript-eslint/prefer-interface': 2,

		// Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules.
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
		'@typescript-eslint/prefer-namespace-keyword': 0,

		// Functions that return promises must be async (promise-function-async)
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
		'@typescript-eslint/promise-function-async': 2,

		// When adding two variables, operands must both be of type number or of type string.
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
		'@typescript-eslint/restrict-plus-operands': 2,

		// Require consistent spacing around type annotations
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
		'@typescript-eslint/type-annotation-spacing': 2,

		// Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
		'@typescript-eslint/unified-signatures': 2,

	},
};
