
// DESCRIPTION = disallow use of the with statement
// STATUS = 2

/* eslint no-unused-vars: 0*/
// <!START
// Bad
/*
with (point) {
	r = Math.sqrt(x * x + y * y); // is r a member of point?
}
*/

// Good
const r = ({ x, y }) => Math.sqrt(x * x + y * y);
// END!>
