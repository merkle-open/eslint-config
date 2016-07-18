
// DESCRIPTION = suggest using of const declaration for variables that are never modified after declared
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
/* eslint no-restricted-syntax: 0*/
// <!START
// Bad
/*
let a;
a = 0;

// `i` is redefined (not reassigned) on each loop step.
for (let i in [1, 2, 3]) {

}
*/
// END!>
