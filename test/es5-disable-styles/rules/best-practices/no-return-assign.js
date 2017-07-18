// DESCRIPTION = disallow use of assignment in return statement
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
// <!START
// Bad
/*
function doSomething() {
	return foo = bar + 2;
}
*/
// END!>
