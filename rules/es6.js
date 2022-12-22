/* [18.07.2016] approved by skill group core team */
module.exports = {
	rules: {
		// enforces no braces where they can be omitted
		// http://eslint.org/docs/rules/arrow-body-style
		'arrow-body-style': 0,
		// [18.07.2016] disabled

		// require parens in arrow function arguments
		'arrow-parens': [2, 'always'],
		// [18.07.2016] enabled

		// require space before/after arrow function's arrow
		// http://eslint.org/docs/rules/arrow-spacing
		'arrow-spacing': [2, { before: true, after: true }],

		// verify super() callings in constructors
		'constructor-super': 0,

		// enforce the spacing around the * in generator functions
		// http://eslint.org/docs/rules/generator-star-spacing
		'generator-star-spacing': [2, { before: false, after: true }],

		// disallow modifying variables of class declarations
		// http://eslint.org/docs/rules/no-class-assign
		'no-class-assign': 2,

		// disallow arrow functions where they could be confused with comparisons
		// http://eslint.org/docs/rules/no-confusing-arrow
		'no-confusing-arrow': [
			2,
			{
				allowParens: true,
			},
		],

		// disallow modifying variables that are declared using const
		'no-const-assign': 2,

		// disallow duplicate class members
		// http://eslint.org/docs/rules/no-dupe-class-members
		'no-dupe-class-members': 2,

		// disallow importing from the same path more than once
		// http://eslint.org/docs/rules/no-duplicate-imports
		'no-duplicate-imports': 2,

		// disallow symbol constructor
		// http://eslint.org/docs/rules/no-new-symbol
		'no-new-symbol': 2,

		// disallow specific imports
		// http://eslint.org/docs/rules/no-restricted-imports
		'no-restricted-imports': 0,

		// disallow to use this/super before super() calling in constructors.
		'no-this-before-super': 0,

		// disallow useless computed property keys
		// http://eslint.org/docs/rules/no-useless-computed-key
		'no-useless-computed-key': 2,

		// disallow unnecessary constructor
		// http://eslint.org/docs/rules/no-useless-constructor
		'no-useless-constructor': 2,

		// disallow renaming import, export, and destructured assignments to the same name
		// http://eslint.org/docs/rules/no-useless-rename
		'no-useless-rename': [
			2,
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false,
			},
		],

		// require let or const instead of var
		'no-var': 2,

		// require method and property shorthand syntax for object literals
		// http://eslint.org/docs/rules/object-shorthand
		'object-shorthand': [
			2,
			'always',
			{
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],

		// suggest using arrow functions as callbacks
		'prefer-arrow-callback': [
			2,
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],

		// suggest using of const declaration for variables that are never modified after declared
		'prefer-const': [
			2,
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		],

		// suggest using Reflect methods where applicable
		'prefer-reflect': 0,

		// use rest parameters instead of arguments
		// http://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 2,

		// suggest using the spread operator instead of .apply()
		'prefer-spread': 2,
		// [18.07.2016] enabled

		// suggest using template literals instead of string concatenation
		// http://eslint.org/docs/rules/prefer-template
		'prefer-template': 2,

		// disallow generator functions that do not have yield
		'require-yield': 0,

		// import sorting
		// http://eslint.org/docs/rules/sort-imports
		'sort-imports': 0,

		// enforce usage of spacing in template strings
		// http://eslint.org/docs/rules/template-curly-spacing
		'template-curly-spacing': 2,

		// enforce spacing around the * in yield* expressions
		// http://eslint.org/docs/rules/yield-star-spacing
		'yield-star-spacing': [2, 'after'],
	},
};
