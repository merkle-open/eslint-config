/* [08.07.2016] approved by skill group core team */
module.exports = {
	rules: {
		// enforces getter/setter pairs in objects
		'accessor-pairs': 0,

		// enforces return statements in callbacks of array's methods
		'array-callback-return': 2,

		// treat var statements as if they were block scoped
		'block-scoped-var': 2,

		// specify the maximum cyclomatic complexity allowed in a program
		'complexity': [2, 5],
		// [08.07.2016] enabled error 5

		// require return statements to either always or never specify values
		'consistent-return': 0,
		// [08.07.2016] disabled because undefined

		// specify curly brace conventions for all control statements
		'curly': [2, 'all'],

		// require default case in switch statements
		'default-case': [2, { commentPattern: '^no default$' }],

		// encourages use of dot notation whenever possible
		'dot-notation': [2, { allowKeywords: true }],

		// enforces consistent newlines before or after dots
		'dot-location': 0,

		// require the use of === and !==
		// http://eslint.org/docs/rules/eqeqeq
		'eqeqeq': [2, 'allow-null'],

		// make sure for-in loops have an if statement
		'guard-for-in': 2,

		// disallow the use of alert, confirm, and prompt
		'no-alert': 2,

		// disallow use of arguments.caller or arguments.callee
		'no-caller': 2,

		// disallow lexical declarations in case/default clauses
		// http://eslint.org/docs/rules/no-case-declarations.html
		'no-case-declarations': 2,

		// disallow division operators explicitly at beginning of regular expression
		'no-div-regex': 0,

		// disallow else after a return in an if
		'no-else-return': 2,

		// disallow empty functions, except for standalone funcs/arrows
		// http://eslint.org/docs/rules/no-empty-function
		'no-empty-function': [
			2,
			{
				allow: ['arrowFunctions', 'functions', 'methods'],
			},
		],

		// disallow empty destructuring patterns
		// http://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 2,

		// disallow comparisons to null without a type-checking operator
		'no-eq-null': 2,

		// disallow use of eval()
		'no-eval': 2,

		// disallow adding to native types
		'no-extend-native': 2,

		// disallow unnecessary function binding
		'no-extra-bind': 2,

		// disallow Unnecessary Labels
		// http://eslint.org/docs/rules/no-extra-label
		'no-extra-label': 2,

		// disallow fallthrough of case statements
		'no-fallthrough': 2,

		// disallow the use of leading or trailing decimal points in numeric literals
		'no-floating-decimal': 2,

		// disallow the type conversions with shorter notations
		'no-implicit-coercion': 2,
		// [08.07.2016] enabled

		// disallow var and named functions in global scope
		// http://eslint.org/docs/rules/no-implicit-globals
		'no-implicit-globals': 0,

		// disallow use of eval()-like methods
		'no-implied-eval': 2,

		// disallow this keywords outside of classes or class-like objects
		'no-invalid-this': 0,

		// disallow usage of __iterator__ property
		'no-iterator': 2,

		// disallow use of labels for anything other then loops and switches
		'no-labels': [2, { allowLoop: false, allowSwitch: false }],

		// disallow unnecessary nested blocks
		'no-lone-blocks': 2,

		// disallow creation of functions within loops
		'no-loop-func': 2,

		// disallow magic numbers
		// http://eslint.org/docs/rules/no-magic-numbers
		'no-magic-numbers': [
			0,
			{
				ignore: [],
				ignoreArrayIndexes: true,
				enforceConst: true,
				detectObjects: false,
			},
		],

		// disallow use of multiple spaces
		'no-multi-spaces': 2,

		// disallow use of multiline strings
		'no-multi-str': 2,

		// disallow reassignments of native objects
		'no-native-reassign': 2,
		// [08.07.2016] enabled

		// disallow use of new operator when not part of the assignment or comparison
		'no-new': 2,

		// disallow use of new operator for Function object
		'no-new-func': 2,

		// disallows creating new instances of String, Number, and Boolean
		'no-new-wrappers': 2,

		// disallow use of (old style) octal literals
		'no-octal': 2,

		// disallow use of octal escape sequences in string literals, such as
		// var foo = 'Copyright \251';
		'no-octal-escape': 2,

		// disallow reassignment of function parameters
		// disallow parameter object manipulation
		// rule: http://eslint.org/docs/rules/no-param-reassign.html
		'no-param-reassign': [0, { props: true }],
		// [08.07.2016] disabled because of options default

		// disallow usage of __proto__ property
		'no-proto': 2,

		// disallow declaring the same variable more then once
		'no-redeclare': 2,

		// disallow use of assignment in return statement
		'no-return-assign': 2,

		// disallow use of `javascript:` urls.
		'no-script-url': 2,

		// disallow self assignment
		// http://eslint.org/docs/rules/no-self-assign
		'no-self-assign': 2,

		// disallow comparisons where both sides are exactly the same
		'no-self-compare': 2,

		// disallow use of comma operator
		'no-sequences': 2,

		// restrict what can be thrown as an exception
		'no-throw-literal': 2,

		// disallow unmodified conditions of loops
		// http://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 0,

		// disallow usage of expressions in statement position
		'no-unused-expressions': 2,

		// disallow unused labels
		// http://eslint.org/docs/rules/no-unused-labels
		'no-unused-labels': 2,

		// disallow unnecessary .call() and .apply()
		'no-useless-call': 0,

		// disallow useless string concatenation
		// http://eslint.org/docs/rules/no-useless-concat
		'no-useless-concat': 2,

		// disallow unnecessary string escaping
		// http://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 2,

		// disallow use of void operator
		'no-void': 2,
		// [08.07.2016] enabled

		// disallow usage of configurable warning terms in comments: e.g.
		'no-warning-comments': [0, { terms: ['todo', 'fixme'], location: 'start' }],

		// disallow use of the with statement
		'no-with': 2,

		// require use of the second argument for parseInt()
		'radix': 2,

		// requires to declare all vars on top of their containing scope
		'vars-on-top': 0,
		// [08.07.2016] disabled because use blocks

		// require immediate function invocation to be wrapped in parentheses
		// http://eslint.org/docs/rules/wrap-iife.html
		'wrap-iife': [2, 'outside'],

		// require or disallow Yoda conditions
		'yoda': 2,
	},
};
