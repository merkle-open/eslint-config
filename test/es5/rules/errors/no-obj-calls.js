
// DESCRIPTION = disallow the use of object properties of the global object (Math and JSON) as functions
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
/* eslint new-cap: 0*/
// <!START
// Bad
/*
var math = Math();
var json = JSON();
*/
// END!>
