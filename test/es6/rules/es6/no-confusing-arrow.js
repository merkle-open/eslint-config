
// DESCRIPTION = disallow arrow functions where they could be confused with comparisons
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
/* eslint no-constant-condition: 0*/
/* eslint arrow-parens: 0*/
/* eslint no-var: 0*/
// <!START
// Bad
/*
var x = a => 1 ? 2 : 3;
var x = (a) => 1 ? 2 : 3;
*/

// Good
var x = a => { return 1 ? 2 : 3; };
var x = (a) => { return 1 ? 2 : 3; };
// END!>
