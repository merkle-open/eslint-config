
// DESCRIPTION = disallow comparisons with the value NaN
// STATUS = 2

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
// Bad
/*
if (foo === NaN) {
	// ...
}
*/

// Good
if (isNaN(foo)) {
	// ...
}
// END!>
