
// DESCRIPTION = require regex literals to be wrapped in parentheses
// STATUS = 2

/* eslint no-unused-vars: 0*/
/* eslint no-redeclare: 0*/
/* eslint require-jsdoc: 0*/
// <!START
// Bad
/*
function a() {
	return /foo/.test('bar');
}
*/

// Good
function a() {
	return (/foo/).test('bar');
}
// END!>

