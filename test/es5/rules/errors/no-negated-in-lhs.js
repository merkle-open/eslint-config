
// DESCRIPTION = disallow negation of the left operand of an in expression
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
if (!key in object) {
	// operator precedence makes it equivalent to (!key) in object
	// and type conversion makes it equivalent to (key ? "false" : "true") in object
}
*/
// END!>
