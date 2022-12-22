/* [11.07.2016] approved by skill group core team */
module.exports = {
	rules: {
		// enforce spacing inside array brackets
		'array-bracket-spacing': [2, 'never'],

		// enforce spacing inside single-line blocks
		// http://eslint.org/docs/rules/block-spacing
		'block-spacing': [2, 'always'],

		// enforce one true brace style
		'brace-style': [2, '1tbs', { allowSingleLine: true }],

		// require camel case names
		'camelcase': [2, { properties: 'never' }],

		// enforce spacing before and after comma
		'comma-spacing': [2, { before: false, after: true }],

		// enforce one true comma style
		'comma-style': [2, 'last'],

		// disallow padding inside computed properties
		'computed-property-spacing': [2, 'never'],

		// enforces consistent naming when capturing the current execution context
		'consistent-this': [2, '_this'],
		// [08.07.2016] enabled

		// enforce newline at the end of file, with no multiple empty lines
		'eol-last': 2,

		// require function expressions to have a name
		'func-names': 0,

		// enforces use of function declarations or expressions
		'func-style': 0,

		// Blacklist certain identifiers to prevent them being used
		// http://eslint.org/docs/rules/id-blacklist
		'id-blacklist': [2, 'callback'],
		// [08.07.2016] enabled
		// [20.09.2016] removed data because needed in jquery ajax options

		// this option enforces minimum and maximum identifier lengths
		// (variable names, property names etc.)
		'id-length': 0,

		// require identifiers to match the provided regular expression
		'id-match': 0,

		// this option sets a specific tab width for your code
		// http://eslint.org/docs/rules/indent
		'indent': [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],

		// specify whether double or single quotes should be used in JSX attributes
		// http://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': [2, 'prefer-double'],
		// [08.07.2016] enabled

		// enforces spacing between keys and values in object literal properties
		'key-spacing': [2, { beforeColon: false, afterColon: true }],

		// require a space before & after certain keywords
		'keyword-spacing': [
			2,
			{
				before: true,
				after: true,
				overrides: {
					return: { after: true },
					throw: { after: true },
					case: { after: true },
				},
			},
		],

		// disallow mixed 'LF' and 'CRLF' as linebreaks
		'linebreak-style': 0,

		// enforces empty lines around comments
		'lines-around-comment': 0,

		// specify the maximum depth that blocks can be nested
		'max-depth': [2, 5],
		// [08.07.2016] enabled

		// specify the maximum length of a line in your program
		// http://eslint.org/docs/rules/max-len
		'max-len': [2, 120, 2, {
			ignoreUrls: true,
			ignoreComments: false,
		}],
		// [08.07.2016] enabled

		// specify the maximum depth callbacks can be nested
		'max-nested-callbacks': [2, 5],
		// [08.07.2016] enabled

		// limits the number of parameters that can be used in the function declaration.
		'max-params': [2, 4],
		// [08.07.2016] enabled

		// specify the maximum number of statement allowed in a function
		'max-statements': [0, 10],

		// restrict the number of statements per line
		// http://eslint.org/docs/rules/max-statements-per-line
		'max-statements-per-line': [2, { max: 2 }],
		// [08.07.2016] enabled

		// require a capital letter for constructors
		'new-cap': [2, { newIsCap: true }],

		// disallow the omission of parentheses when invoking a constructor with no arguments
		'new-parens': 2,
		// [08.07.2016] enabled

		// allow/disallow an empty newline after var statement
		'newline-after-var': 0,

		// http://eslint.org/docs/rules/newline-before-return
		'newline-before-return': 0,

		// enforces new line after each method call in the chain to make it
		// more readable and easy to maintain
		// http://eslint.org/docs/rules/newline-per-chained-call
		'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],

		// disallow use of the Array constructor
		'no-array-constructor': 2,

		// disallow use of bitwise operators
		'no-bitwise': 2,
		// [08.07.2016] enabled

		// disallow use of the continue statement
		'no-continue': 2,
		// [08.07.2016] enabled

		// disallow comments inline after code
		'no-inline-comments': 0,
		// [05.02.2019] enabled because of webpackChunkName:

		// disallow if as the only statement in an else block
		'no-lonely-if': 2,
		// [08.07.2016] enabled

		// disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': 2,

		// disallow multiple empty lines and only one newline at the end
		'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],

		// disallow negated conditions
		// http://eslint.org/docs/rules/no-negated-condition
		'no-negated-condition': 0,

		// disallow nested ternary expressions
		'no-nested-ternary': 2,

		// disallow use of the Object constructor
		'no-new-object': 2,

		// disallow use of unary operators, ++ and --
		'no-plusplus': 0,

		// disallow certain syntax forms
		// http://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': [2,
			'DebuggerStatement',
			'ForInStatement',
			'LabeledStatement',
			'WithStatement',
		],

		// disallow space between function identifier and application
		'no-spaced-func': 2,

		// disallow the use of ternary operators
		'no-ternary': 0,

		// disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 2,

		// allow dangling underscores in identifiers
		'no-underscore-dangle': 0,

		// disallow the use of Boolean literals in conditional expressions
		// also, prefer `a || b` over `a ? a : b`
		// http://eslint.org/docs/rules/no-unneeded-ternary
		'no-unneeded-ternary': [2, { defaultAssignment: false }],

		// disallow whitespace before properties
		// http://eslint.org/docs/rules/no-whitespace-before-property
		'no-whitespace-before-property': 2,

		// require padding inside curly braces
		'object-curly-spacing': [2, 'always'],

		// enforce 'same line' or 'multiple line' on object properties.
		// http://eslint.org/docs/rules/object-property-newline
		'object-property-newline': [
			0,
			{
				allowMultiplePropertiesPerLine: true,
			},
		],

		// allow just one var statement per function
		'one-var': [
			2,
			{
				var: 'never',
				let: 'never',
				const: 'never',
			},
		],
		// [08.07.2016] enabled never

		// require a newline around variable declaration
		// http://eslint.org/docs/rules/one-var-declaration-per-line
		'one-var-declaration-per-line': [2, 'initializations'],
		// [13.07.2016] enabled initializations

		// require assignment operator shorthand where possible or prohibit it entirely
		'operator-assignment': 0,

		// enforce operators to be placed before or after line breaks
		'operator-linebreak': 0,

		// enforce padding within blocks
		'padded-blocks': 0,

		// require quotes around object literal property names
		// http://eslint.org/docs/rules/quote-props.html
		'quote-props': [2, 'consistent'],
		// [08.07.2016] enabled consistent

		// specify whether double or single quotes should be used
		'quotes': [2, 'single', { avoidEscape: true }],

		// do not require jsdoc
		// http://eslint.org/docs/rules/require-jsdoc
		'require-jsdoc': [
			2,
			{
				require: {
					FunctionDeclaration: true,
					MethodDefinition: true,
					ClassDeclaration: true,
					ArrowFunctionExpression: false,
				},
			},
		],
		// [08.07.2016] enabled

		// require or disallow use of semicolons instead of ASI
		'semi': [2, 'always'],

		// enforce spacing before and after semicolons
		'semi-spacing': [2, { before: false, after: true }],

		// sort variables within the same declaration block
		'sort-vars': 0,

		// require or disallow space before blocks
		'space-before-blocks': 2,

		// require or disallow space before function opening parenthesis
		// http://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],

		// require or disallow spaces inside parentheses
		'space-in-parens': [2, 'never'],

		// require spaces around operators
		'space-infix-ops': 2,

		// Require or disallow spaces before/after unary operators
		'space-unary-ops': 0,

		// require or disallow a space immediately following the // or /* in a comment
		'spaced-comment': [
			2,
			'always',
			{
				exceptions: ['-', '+'],
				// space here to support sprockets directives
				markers: ['=', '!', '/'],
			},
		],

		// require or disallow the Unicode Byte Order Mark
		// http://eslint.org/docs/rules/unicode-bom
		'unicode-bom': [2, 'never'],

		// require regex literals to be wrapped in parentheses
		'wrap-regex': 2,
		// [11.07.2016] enabled
	},
};
