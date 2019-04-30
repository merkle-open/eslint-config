// Disallows invocation of require() (no-require-imports)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint no-useless-constructor: 0*/
/* eslint no-empty-function: 0*/
/* eslint @typescript-eslint/explicit-member-accessibility: 0*/
/* eslint @typescript-eslint/no-extraneous-class: 0*/

// <!START
// Bad
/*
const eslint = require('eslint');
*/
// Good
import eslint from 'eslint';
// END!>
