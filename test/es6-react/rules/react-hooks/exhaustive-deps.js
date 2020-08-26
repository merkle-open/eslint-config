// DESCRIPTION = Checks effect dependencies
// STATUS = 2

/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable prefer-arrow-callback */
/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
/* eslint no-unused-expressions: 0*/
/* eslint react/react-in-jsx-scope: 0*/
/* eslint react/prefer-stateless-function: 0*/
/* eslint react/prefer-es6-class: 0*/
/* eslint react/prop-types: 0*/
/* eslint object-shorthand: 0*/
/* eslint react-hooks/exhaustive-deps: 0*/
// <!START
// Bad
/*
// https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js
function MyComponent() {
	const local = {};
	useEffect(() => {
		console.log(local);
	}, []);
}
*/

// Good
function MyComponent2() {
	const local = {};
	useEffect(() => {
		console.log(local);
	}, [local]);
}
// END!>
