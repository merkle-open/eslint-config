// DESCRIPTION = disallow use of new operator for Function object
// STATUS = 2

/* eslint no-unused-vars: 0*/
// <!START
// Bad
/*
var x = new Function('a', 'b', 'return a + b');
*/
// END!>
