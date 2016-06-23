
// DESCRIPTION = disallow use of comma operator
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unused-expressions: 0*/
// <!START
// Bad
/*
var a = (3, 5); // a = 5
a = b += 5, a + b;
*/

// Good
var a = (3, 5); // a = 5
a = (b += 5, a + b);
// END!>
