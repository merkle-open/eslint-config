// DESCRIPTION = ensure that the results of typeof are compared against a valid string
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
/* eslint no-unused-expressions: 0*/
// <!START
// Bad
/*
typeof foo === 'strnig';
typeof foo === 'undefimed';
typeof bar !== 'nunber';
typeof bar !== 'fucntion';
*/

// Good
typeof foo === "string";
typeof foo === "undefined";
typeof bar !== "number";
typeof bar !== "function";
// END!>
