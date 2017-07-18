// DESCRIPTION = disallow use of void operator
// STATUS = 2

/* eslint no-unused-vars: 0*/
/* eslint require-jsdoc: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
function test() {
	return void 0;
}
*/
// Good
function test() {
  return;
}
// END!>
