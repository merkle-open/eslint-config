// DESCRIPTION = require immediate function invocation to be wrapped in parentheses
// STATUS = 2

/* eslint no-unused-vars: 0*/
/* eslint one-var: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
var x = function () { return { y: 1 }; }();
*/

// Good
var x = function() {
  return {y: 1}
}
// END!>
