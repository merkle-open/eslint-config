// DESCRIPTION = require use of the second argument for parseInt()
// STATUS = 2

/* eslint no-unused-vars: 0*/
/* eslint one-var: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
var num = parseInt('71');
*/

// Good
var num = parseInt("71", 10)

// END!>
