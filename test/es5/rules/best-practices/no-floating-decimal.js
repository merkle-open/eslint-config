
// DESCRIPTION = disallow the use of leading or trailing decimal points in numeric literals
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint one-var: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
var num1 = .5;
var num2 = 2.;
var num3 = -.7;
*/

// Good
var num1 = 0.5;
var num2 = 2.0;
var num3 = -0.7;
// END!>
