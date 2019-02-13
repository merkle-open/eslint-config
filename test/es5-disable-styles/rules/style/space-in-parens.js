// DESCRIPTION = require or disallow spaces inside parentheses
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-redeclare: 0*/
/* eslint no-unused-vars: 0*/
// <!START
// Bad
/*
foo( 'bar' );
var x = ( 1 + 2 ) * 3;
*/

// Good
foo("bar");
var x = (1 + 2) * 3;
// END!>
