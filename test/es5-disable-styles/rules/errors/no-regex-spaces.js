// DESCRIPTION = disallow multiple spaces in a regular expression literal
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
var re = /foo   bar/;
var re = new RegExp('foo   bar');
*/

// Good
var re = /foo {3}bar/
var re = new RegExp("foo {3}bar")
// END!>
