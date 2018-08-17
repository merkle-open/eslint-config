// DESCRIPTION = disallow declaration of variables already declared in the outer scope
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-redeclare: 0*/
/* eslint no-var: 0*/
/* eslint no-unused-expressions: 0*/
// <!START
// Bad
/*
var a = 3;
function b() {
	var a = 10;
}
*/

// Good
var a = 3
function b() {
  var c = 10
}
// END!>
