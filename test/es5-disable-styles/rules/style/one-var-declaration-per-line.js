// DESCRIPTION = require a newline around variable declaration
// STATUS = 2

/* eslint no-unused-vars: 0*/
/* eslint require-jsdoc: 0*/
/* eslint one-var: 0*/
// <!START
// Bad
/*
function bad() {
	const d = 1, e = 2;
}
*/

// Good
function good() {
  let a, b, c
  const d = 1
  const e = 2
}
// END!>
