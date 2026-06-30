/* eslint-disable */
import styles from './style.js';
import variables from './variables.js';
import errors from './errors.js';
import bestPractices from './best-practices.js';
import es2025 from './es2025.js';

/* [12.04.2019] add typescript support */
export default {
		camelcase: 0,
		'no-unused-vars': 0,
		'no-use-before-define': 0,
		'no-useless-constructor': 0,
		// https://typescript-eslint.io/linting/troubleshooting#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
		'no-undef': 0,

		// default overrides
		// https://typescript-eslint.io/rules
		'brace-style': 0,
		'@typescript-eslint/brace-style': styles['brace-style'] || 0,
		'comma-dangle': 0,
		'@typescript-eslint/comma-dangle': errors['comma-dangle'] || 0,
		'comma-spacing': 0,
		'@typescript-eslint/comma-spacing': styles['comma-spacing'] || 0,
		'default-param-last': 0,
		'@typescript-eslint/default-param-last': styles['default-param-last'] || 0,
		'dot-notation': 0,
		'@typescript-eslint/dot-notation': bestPractices['dot-notation'] || 0,
		'func-call-spacing': 0,
		'@typescript-eslint/func-call-spacing': styles['func-call-spacing'] || 0,
		'indent': 0,
		'@typescript-eslint/indent': styles.indent || 0,
		'init-declarations': 0,
		'@typescript-eslint/init-declarations': variables['init-declarations'] || 0,
		'keyword-spacing': 0,
		'@typescript-eslint/keyword-spacing': styles['keyword-spacing'] || 0,
		'lines-between-class-members': 0,
		'@typescript-eslint/lines-between-class-members': styles['lines-between-class-members'] || 0,
		'no-array-constructor': 0,
		'@typescript-eslint/no-array-constructor': styles['no-array-constructor'] || 0,
		'no-dupe-class-members': 0,
		'@typescript-eslint/no-dupe-class-members': es2025['no-dupe-class-members'] || 0,
		'no-empty-function': 0,
		'@typescript-eslint/no-empty-function': bestPractices['no-empty-function'] || 0,
		'no-extra-parens': 0,
		'@typescript-eslint/no-extra-parens': errors['no-extra-parens'] || 0,
		'no-extra-semi': 0,
		'@typescript-eslint/no-extra-semi': errors['no-extra-semi'] || 0,
		'no-implied-eval': 0,
		'@typescript-eslint/no-implied-eval': bestPractices['no-implied-eval'] || 0,
		'no-invalid-this': 0,
		'@typescript-eslint/no-invalid-this': bestPractices['no-invalid-this'] || 0,
		'no-loop-func': 0,
		'@typescript-eslint/no-loop-func': bestPractices['no-loop-func'] || 0,
		'no-loss-of-precision': 0,
		'@typescript-eslint/no-loss-of-precision': bestPractices['no-loss-of-precision'] || 0,
		'no-magic-numbers': 0,
		'@typescript-eslint/no-magic-numbers': bestPractices['no-magic-numbers'] || 0,
		'no-redeclare': 0,
		'@typescript-eslint/no-redeclare': bestPractices['no-redeclare'] || 0,
		'no-shadow': 0,
		'@typescript-eslint/no-shadow': variables['no-shadow'] || 0,
		'no-throw-literal': 0,
		'@typescript-eslint/no-throw-literal': bestPractices['no-throw-literal'] || 0,
		'no-unused-expressions': 0,
		'@typescript-eslint/no-unused-expressions': bestPractices['no-unused-expressions'] || 0,
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': variables['no-unused-vars'] || 0,
		'no-use-before-define': 0,
		'@typescript-eslint/no-use-before-define': variables['no-use-before-define'] || 0,
		'no-useless-constructor': 0,
		'@typescript-eslint/no-useless-constructor': es2025['no-useless-constructor'] || 0,
		'quotes': 0,
		'@typescript-eslint/quotes': styles.quotes || 0,
		'require-await': 0,
		'@typescript-eslint/require-await': styles['require-await'] || 0,
		'return-await': 0,
		'@typescript-eslint/return-await': styles['return-await'] || 0,
		'semi': 0,
		'@typescript-eslint/semi': styles.semi || 0,
		'space-before-function-paren': 0,
		'@typescript-eslint/space-before-function-paren': styles['space-before-function-paren'] || 0,
		'space-infix-ops': 0,
		'@typescript-eslint/space-infix-ops': styles['space-infix-ops'] || 0,

		// Require that member overloads be consecutive (adjacent-overload-signatures from TSLint)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
		'@typescript-eslint/adjacent-overload-signatures': 2,

		// Requires using either T[] or Array<T> for arrays (array-type)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md
		'@typescript-eslint/array-type': 2,

		// Bans // @ts-<directive> comments from being used or requires descriptions after directive (ban-ts-comment)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md
		'@typescript-eslint/ban-ts-comment': 2,

		// Forbids a configurable list of type names (replaces deprecated ban-types)
		// https://typescript-eslint.io/rules/no-restricted-types
		'@typescript-eslint/no-restricted-types': 2,

		// Disallow accidentally empty object types (replaces deprecated no-empty-interface)
		// https://typescript-eslint.io/rules/no-empty-object-type
		'@typescript-eslint/no-empty-object-type': 2,

		// Enforces naming conventions for everything across a codebase (naming-convention)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
		'@typescript-eslint/naming-convention': [
			2,
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'class',
				format: ['PascalCase'],
			},
			{
				selector: 'enum',
				format: ['UPPER_CASE', 'PascalCase'],
			},
			{
				selector: 'typeAlias',
				format: ['PascalCase'],
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
			},
			{
				selector: 'method',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require',
			},
			{
				selector: 'property',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require',
			},
			{
				selector: 'typeParameter',
				format: ['PascalCase'],
				prefix: ['T'],
			},
		],

		// Require explicit return types on functions and class methods (explicit-function-return-type)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
		'@typescript-eslint/explicit-function-return-type': 0,

		// Require explicit accessibility modifiers on class properties and methods (explicit-member-accessibility)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
		'@typescript-eslint/explicit-member-accessibility': 2,

		// Require a consistent member declaration order (member-ordering)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-ordering.md
		'@typescript-eslint/member-ordering': 2,

		// Enforces consistent usage of type assertions. (consistent-type-assertions)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
		'@typescript-eslint/consistent-type-assertions': [
			2,
			{ assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
		],

		// Disallow generic Array constructors (no-array-constructor)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-array-constructor.md
		'@typescript-eslint/no-array-constructor': 2,

		// Disallow usage of the any type (no-explicit-any)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
		'@typescript-eslint/no-explicit-any': 0,

		// Forbids the use of classes as namespaces (no-extraneous-class)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extraneous-class.md
		'@typescript-eslint/no-extraneous-class': 2,

		// Disallow iterating over an array with a for-in loop (no-for-in-array)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-for-in-array.md
		'@typescript-eslint/no-for-in-array': 2,

		// Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md
		'@typescript-eslint/no-inferrable-types': 2,

		// Enforce valid definition of new and constructor. (no-misused-new)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-new.md
		'@typescript-eslint/no-misused-new': 2,

		// Disallow the use of custom TypeScript modules and namespaces (no-namespace)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.md
		'@typescript-eslint/no-namespace': 2,

		// Disallows non-null assertions using the ! postfix operator (no-non-null-assertion)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
		'@typescript-eslint/no-non-null-assertion': 2,

		// Disallows invocation of require() (no-require-imports)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-require-imports.md
		'@typescript-eslint/no-require-imports': 2,

		// Disallow aliasing this (no-this-alias)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.md
		'@typescript-eslint/no-this-alias': 0,
		// already covered by consistent-this

		// Sets preference level for triple slash directives versus ES6-style import declarations.
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/triple-slash-reference.md
		'@typescript-eslint/triple-slash-reference': [2, { path: 'always', types: 'prefer-import', lib: 'always' }],

		// Warns when a namespace qualifier is unnecessary. (no-unnecessary-qualifier)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
		'@typescript-eslint/no-unnecessary-qualifier': 2,

		// Warns if a type assertion does not change the type of an expression (no-unnecessary-type-assertion)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
		'@typescript-eslint/no-unnecessary-type-assertion': 2,

		// Disallow unused variables (no-unused-vars)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
		'@typescript-eslint/no-unused-vars': 2,

		// Disallow the use of variables before they are defined (no-use-before-define)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md
		'@typescript-eslint/no-use-before-define': 2,

		// Disallow unnecessary constructors
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-useless-constructor.md
		'@typescript-eslint/no-useless-constructor': 2,

		// Use for-of loops instead of standard for loops over arrays (prefer-for-of)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-for-of.md
		'@typescript-eslint/prefer-for-of': 0,

		// Use function types instead of interfaces with call signatures (prefer-function-type)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-function-type.md
		'@typescript-eslint/prefer-function-type': 2,

		// Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules.
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
		'@typescript-eslint/prefer-namespace-keyword': 0,

		// Functions that return promises must be async (promise-function-async)
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/promise-function-async.md
		'@typescript-eslint/promise-function-async': 2,

		// When adding two variables, operands must both be of type number or of type string.
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
		'@typescript-eslint/restrict-plus-operands': 2,

		// Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unified-signatures.md
		'@typescript-eslint/unified-signatures': 2,
	};
