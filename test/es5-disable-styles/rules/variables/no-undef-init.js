// DESCRIPTION = disallow use of undefined when initializing variables
// STATUS = 0

/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
/* eslint prefer-const: 0*/
/* eslint no-var: 0*/
// <!START
// Bad
var foo = undefined;
let bar = undefined;
// END!>
