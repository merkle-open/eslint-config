
// DESCRIPTION = encourages use of dot notation whenever possible
// STATUS = 2

/* eslint-disable security/detect-object-injection */
/* eslint no-unused-vars: 0*/
/* eslint no-undef: 0*/
/* eslint no-redeclare: 0*/
/* eslint one-var: 0*/
// <!START
// Bad
/*
var x = foo['bar'];
*/

// Good
var x = foo.bar;
var x = foo[bar];
// END!>
document.window.append('', null);
