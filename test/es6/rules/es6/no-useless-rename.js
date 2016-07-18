
// DESCRIPTION = disallow renaming import, export, and destructured assignments to the same name
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
/* eslint import/no-mutable-exports: 0*/
/* eslint import/export: 0*/
/* eslint import/no-unresolved: 0*/
// <!START
// Bad
/*
import { foo as foo } from 'bar';
export { foo as foo };
export { foo as foo } from 'bar';
let { foo: foo } = bar;
let { 'foo': foo } = bar;
*/
// END!>

