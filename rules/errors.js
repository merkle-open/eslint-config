/* [13.07.2016] approved by skill group core team */
module.exports = {
	rules: {
		// require trailing commas in multiline object literals
		'comma-dangle': [2, 'always-multiline'],
		// [13.07.2016] enabled
		// [20.09.2016] always-multiline -> https://github.com/merkle-open/eslint-config/issues/1

		// disallow assignment in conditional expressions
		'no-cond-assign': [2, 'always'],

		// disallow use of console
		'no-console': 2,

		// disallow use of constant expressions in conditions
		'no-constant-condition': 2,

		// disallow control characters in regular expressions
		'no-control-regex': 2,

		// disallow use of debugger
		'no-debugger': 2,

		// disallow duplicate arguments in functions
		'no-dupe-args': 2,

		// disallow duplicate keys when creating object literals
		'no-dupe-keys': 2,

		// disallow a duplicate case label.
		'no-duplicate-case': 2,

		// disallow empty statements
		'no-empty': 2,

		// disallow the use of empty character classes in regular expressions
		'no-empty-character-class': 2,

		// disallow assigning to the exception in a catch block
		'no-ex-assign': 2,

		// disallow double-negation boolean casts in a boolean context
		'no-extra-boolean-cast': 0,

		// disallow unnecessary parentheses
		// http://eslint.org/docs/rules/no-extra-parens
		'no-extra-parens': [
			0,
			'all',
			{
				conditionalAssign: true,
				nestedBinaryExpressions: false,
				returnAssign: false,
			},
		],

		// disallow unnecessary semicolons
		'no-extra-semi': 2,

		// disallow overwriting functions written as function declarations
		'no-func-assign': 2,

		// disallow function or variable declarations in nested blocks
		'no-inner-declarations': 2,

		// disallow invalid regular expression strings in the RegExp constructor
		'no-invalid-regexp': 2,

		// disallow irregular whitespace outside of strings and comments
		'no-irregular-whitespace': 2,

		// disallow negation of the left operand of an in expression
		'no-negated-in-lhs': 2,

		// disallow the use of object properties of the global object (Math and JSON) as functions
		'no-obj-calls': 2,

		// disallow use of Object.prototypes builtins directly
		// http://eslint.org/docs/rules/no-prototype-builtins
		'no-prototype-builtins': 2,

		// disallow multiple spaces in a regular expression literal
		'no-regex-spaces': 2,

		// disallow sparse arrays
		'no-sparse-arrays': 2,

		// Avoid code that looks like two expressions but is actually one
		'no-unexpected-multiline': 0,

		// disallow unreachable statements after a return, throw, continue, or break statement
		'no-unreachable': 2,

		// disallow return/throw/break/continue inside finally blocks
		// http://eslint.org/docs/rules/no-unsafe-finally
		'no-unsafe-finally': 2,

		// disallow comparisons with the value NaN
		'use-isnan': 2,

		// ensure JSDoc comments are valid
		// http://eslint.org/docs/rules/valid-jsdoc
		'valid-jsdoc': [
			2,
			{
				prefer: {
					arg: 'param',
					argument: 'param',
					params: 'param',
					class: 'constructor',
					return: 'returns',
					virtual: 'abstract',
				},
				preferType: {
					Boolean: 'boolean',
					Number: 'number',
					object: 'Object',
					String: 'string',
					array: 'Array',
					xml: 'XML',
				},
				requireReturnDescription: true,
				requireParamDescription: true,
			},
		],

		// ensure that the results of typeof are compared against a valid string
		'valid-typeof': 2,
	},
};
