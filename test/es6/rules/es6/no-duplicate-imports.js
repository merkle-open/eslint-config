
// DESCRIPTION = disallow importing from the same path more than once
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
/* eslint import/no-duplicates: 0*/
// <!START
// Bad
/*
import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';
*/

// Good
import { merge, find } from 'module';
import something from 'another-module';
// END!>
