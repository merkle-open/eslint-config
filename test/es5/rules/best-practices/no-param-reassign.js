
// DESCRIPTION = disallow reassignment of function parameters + disallow parameter object manipulation
// STATUS = 0

/* eslint require-jsdoc: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
// <!START
// Bad
function foo(bar) {
	bar = 13;
}
// END!>
