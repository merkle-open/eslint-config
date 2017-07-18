// DESCRIPTION = disallow unreachable statements after a return, throw, continue, or break statement
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
/* eslint no-console: 0*/
// <!START
// Bad
/*
function foo() {
	return true;
	console.log('done');
}
*/
// END!>
