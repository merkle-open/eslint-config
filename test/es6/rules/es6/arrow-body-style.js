
// DESCRIPTION = enforces no braces where they can be omitted
// STATUS = 0

/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Good
const foo = () => 0;

// Bad
const foo = () => {
	return 0;
};
// END!>
