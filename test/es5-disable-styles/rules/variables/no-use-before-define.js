// DESCRIPTION = disallow use of variables before they are defined
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-redeclare: 0*/
/* eslint no-var: 0*/
/* eslint no-unused-expressions: 0*/
/* eslint no-alert: 0*/
// <!START
// Bad
/*
alert(a);
var a = 10;

f();
function f() {}
*/

// Good
var a = 10
alert(a)

function f() {}
f()
// END!>
