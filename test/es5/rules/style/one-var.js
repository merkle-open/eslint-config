
// DESCRIPTION = allow just one var statement per function
// STATUS = 2

/* eslint no-unused-vars: 0*/
/* eslint require-jsdoc: 0*/
// <!START
// Bad
/*
function bad() {
	const a = 1,
		b = 2,
		c = 3;
}
*/

// Good
function good() {
	const d = 4;
	const e = 5;
	const f = 6;
}

// END!>
