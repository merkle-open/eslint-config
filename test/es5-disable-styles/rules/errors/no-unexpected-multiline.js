// DESCRIPTION = Avoid code that looks like two expressions but is actually one
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
/* eslint no-unused-expressions: 0*/
/* eslint semi: 0*/
/* eslint quotes: 0*/
/* eslint indent: 0*/
// <!START
// Bad
let a = (function () {})`hello`;

// Good
let b = function () {};
`hello`;
// END!>
