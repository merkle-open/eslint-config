/* [22.07.2016] approved by skill group core team */
module.exports = {
	// View link below for react rules documentation
	// https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules#list-of-supported-rules
	rules: {
		// specify whether double or single quotes should be used in JSX attributes
		// http://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': [2, 'prefer-double'],

		// Prevent missing displayName in a React component definition
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
		'react/display-name': 2,

		// Forbid certain propTypes (any, array, object)
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
		'react/forbid-prop-types': [0, { forbid: ['any', 'array', 'object'] }],

		// Enforce boolean attributes notation in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		'react/jsx-boolean-value': [2, 'never'],

		// Validate closing bracket location in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
		'react/jsx-closing-bracket-location': [2, 'line-aligned'],

		// Enforce or disallow spaces inside of curly braces in JSX attributes
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
		'react/jsx-curly-spacing': [2, 'never', { allowMultiline: true }],

		// Enforce event handler naming conventions in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
		'react/jsx-handler-names': [
			2,
			{
				eventHandlerPrefix: 'handle',
				eventHandlerPropPrefix: 'on',
			},
		],
		// [21.07.2016] enabled

		// Validate props indentation in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		'react/jsx-indent-props': [2, 'tab'],
		// [11.07.2016] changed to tabs

		// Validate JSX has key prop when in array or iterator
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		'react/jsx-key': 2,
		// [22.07.2016] enabled

		// Limit maximum of props on a single line in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
		'react/jsx-max-props-per-line': [2, { maximum: 2 }],
		// [22.07.2016] enabled max 2

		// Prevent usage of .bind() in JSX props
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		'react/jsx-no-bind': [
			2,
			{
				ignoreRefs: true,
				allowArrowFunctions: true,
				allowBind: false,
			},
		],

		// Prevent duplicate props in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
		'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],

		// Prevent usage of unwrapped JSX strings
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
		'react/jsx-no-literals': 0,

		// Disallow undeclared variables in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		'react/jsx-no-undef': 2,

		// Enforce PascalCase for user-defined JSX components
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		'react/jsx-pascal-case': [
			2,
			{
				allowAllCaps: true,
				ignore: [],
			},
		],

		// Enforce propTypes declarations alphabetical sorting
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
		'react/sort-prop-types': [
			2,
			{
				ignoreCase: true,
				callbacksLast: true,
				requiredFirst: true,
			},
		],

		// deprecated in favor of react/jsx-sort-props
		'react/jsx-sort-prop-types': 0,

		// Enforce props alphabetical sorting
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
		'react/jsx-sort-props': [
			2,
			{
				noSortAlphabetically: true,
				reservedFirst: true,
				ignoreCase: true,
				callbacksLast: true,
				shorthandFirst: true,
				shorthandLast: false,
			},
		],

		// Prevent React to be incorrectly marked as unused
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
		'react/jsx-uses-react': 2,

		// Prevent variables used in JSX to be incorrectly marked as unused
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
		'react/jsx-uses-vars': 2,

		// Prevent usage of dangerous JSX properties
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		'react/no-danger': 0,

		// Prevent usage of deprecated methods
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
		'react/no-deprecated': 2,

		// Prevent usage of setState in componentDidMount
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
		'react/no-did-mount-set-state': 2,

		// Prevent usage of setState in componentDidUpdate
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
		'react/no-did-update-set-state': 2,

		// Prevent direct mutation of this.state
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
		'react/no-direct-mutation-state': 2,
		// [22.07.2016] enabled

		// Prevent usage of isMounted
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
		'react/no-is-mounted': 2,

		// Prevent multiple component definition per file
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		'react/no-multi-comp': [2, { ignoreStateless: true }],

		// Prevent usage of setState
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
		'react/no-set-state': 0,

		// Prevent using string references
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
		'react/no-string-refs': 0,

		// Prevent usage of unknown DOM property
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
		'react/no-unknown-property': 2,

		// Require ES6 class declarations over React.createClass
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
		'react/prefer-es6-class': [2, 'always'],

		// Require stateless functions when not using lifecycle methods, setState or ref
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		'react/prefer-stateless-function': 2,

		// Prevent missing props validation in a React component definition
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		'react/prop-types': [2, { ignore: [], customValidators: [] }],

		// Prevent missing React when using JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		'react/react-in-jsx-scope': 2,

		// Restrict file extensions that may be required
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-extension.md
		'react/require-extension': [0, { extensions: ['.jsx'] }],

		// Require render() methods to return something
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
		'react/require-render-return': 2,

		// Prevent extra closing tags for components without children
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		'react/self-closing-comp': 2,

		// Enforce spaces before the closing bracket of self-closing JSX elements
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
		'react/jsx-tag-spacing': [
			2,
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
			},
		],

		// Enforce component methods order
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
		'react/sort-comp': [
			2,
			{
				order: [
					'static-methods',
					'lifecycle',
					'/^handle.+$/',
					'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
					'everything-else',
					'/^render.+$/',
					'render',
				],
			},
		],

		// Prevent missing parentheses around multilines JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
		'react/jsx-wrap-multilines': [
			2,
			{
				declaration: true,
				assignment: true,
				return: true,
			},
		],

		// Require that the first prop in a JSX element be on a new line when the element is multiline
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
		'react/jsx-first-prop-new-line': [2, 'multiline'],

		// enforce spacing around jsx equals signs
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
		'react/jsx-equals-spacing': [2, 'never'],

		// enforce JSX indentation
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		'react/jsx-indent': [2, 'tab'],
		// [11.07.2016] changed to tabs

		// disallow target="_blank' on links
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
		'react/jsx-no-target-blank': 0,
	},
};
