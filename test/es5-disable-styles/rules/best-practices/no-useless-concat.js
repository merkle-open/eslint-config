// DESCRIPTION = disallow useless string concatenation
// STATUS = 2

/* eslint one-var: 0*/
/* eslint no-redeclare: 0*/
/* eslint no-unused-vars: 0*/
// <!START
// Bad
/*
var foo = 'a' + 'b';
*/

// Good
var foo = "ab"
// END!>
