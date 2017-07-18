/* eslint-disable */
/* global module */
/* not yet approved by skill group core team */
module.exports = {
	rules: {

		// Overwrite require-jsdoc rule
		'require-jsdoc': 0,

		// disallow importing from the same path more than once
		// http://eslint.org/docs/rules/no-duplicate-imports
		'no-duplicate-imports': 0,

		// disallow duplicate imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
		'import/no-duplicates': 0,

		// Prevent missing props validation in a React component definition
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		'react/prop-types': 0,

		// enforces a particular style for boolean type annotations. This rule takes one argument.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
		'flowtype/boolean-style': [2, 'boolean'],

		// marks Flow type identifiers as defined. Used to suppress [`no-undef`](https://github.com/gajus/eslint-plugin-flowtypedocs/rules/no-undef) reporting of type identifiers.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
		'flowtype/define-flow-type': 2,

		// enforces consistent use of trailing commas in Object and Tuple annotations.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-delimiter-dangle
		'flowtype/delimiter-dangle': [2, 'always-multiline'],
		// [20.09.2016] always-multiline -> https://github.com/namics/eslint-config-namics/issues/1

		// enforces consistent spacing within generic type annotation parameters.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-generic-spacing
		'flowtype/generic-spacing': [2, 'never'],

		// disallows use of primitive constructors as types, such as `Boolean`, `Number` and `String`. [See more](https://flowtype.org/docs/builtins.html).
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-primitive-constructor-types
		'flowtype/no-primitive-constructor-types': 2,

		// Warns against weak type annotations *any*, *Object* and *Function*. These types can cause flow to silently skip over portions of your code, which would have otherwise caused type errors.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-weak-types
		'flowtype/no-weak-types': 0,
		// [10.03.2013] disabled because of third party libraries

		// enforces consistent separators between properties in Flow object types.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-object-type-delimiter
		'flowtype/object-type-delimiter': [2, 'comma'],

		// requires that all function parameters have type annotations.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-parameter-type
		'flowtype/require-parameter-type': 2,

		// requires that functions have return type annotation.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type
		'flowtype/require-return-type': [2, 'always',
			{
				'annotateUndefined': 'never',
			},
		],

		// this rule validates Flow file annotations.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-valid-file-annotation
		'flowtype/require-valid-file-annotation': 2,

		// enforces consistent use of semicolons after type aliases.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-semi
		'flowtype/semi': [2, 'always'],

		// enforces consistent spacing after the type annotation colon.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-after-type-colon
		'flowtype/space-after-type-colon': [2, 'always'],

		// Enforces consistent spacing before the opening < of generic type annotation parameters.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-generic-bracket
		'flowtype/space-before-generic-bracket': [2, 'never'],

		// Enforces consistent spacing before the type annotation colon.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-type-colon
		'flowtype/space-before-type-colon': [2, 'never'],

		// Enforces a consistent naming pattern for type aliases.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-id-match
		'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]+)+Type$'],

		// Enforces consistent spacing around union and intersection type separators (| and &).
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-union-intersection-spacing
		'flowtype/union-intersection-spacing': [2, 'always'],

		// Marks Flow type alias declarations as used. Used to suppress no-unused-vars errors that are triggered by type aliases.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-use-flow-type
		'flowtype/use-flow-type': 2,

		// Checks for simple Flow syntax errors.
		// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-valid-syntax
		'flowtype/valid-syntax': 2,
	},
};
