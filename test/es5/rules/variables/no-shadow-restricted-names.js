
// DESCRIPTION = disallow shadowing of names such as arguments
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
function NaN() {}

!function (Infinity) {};

var undefined;
*/
// END!>
