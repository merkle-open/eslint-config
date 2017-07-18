// DESCRIPTION = disallow duplicate imports
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
/* eslint no-duplicate-imports: 0*/
/* eslint import/no-unresolved: 0*/
// <!START
// Bad
/*
import SomeDefaultClass from './mod';
import foo from './some-other-mod';
import * as names from './mod';
import { something } from './mod.js';
*/
// END!>
