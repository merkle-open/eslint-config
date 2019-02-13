// DESCRIPTION = disallow non-import statements appearing before import statements
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
/* eslint import/no-unresolved: 0*/
// <!START
// Bad
/*
import foo from './foo';
initWith(foo);
import bar from './bar';
*/

// Good
import foo from "./foo";
import bar from "./bar";
initWith(foo);
// END!>
