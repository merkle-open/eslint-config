// DESCRIPTION = disallow use of Object.prototypes builtins directly
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
// <!START
// Bad
/*
var hasBarProperty = foo.hasOwnProperty('bar');
var isPrototypeOfBar = foo.isPrototypeOf(bar);
var barIsEnumerable = foo.propertyIsEnumerable('bar');
*/

// Good
var hasBarProperty = {}.hasOwnProperty.call(foo, "bar");
var isPrototypeOfBar = {}.isPrototypeOf.call(foo, bar);
var barIsEnumerable = {}.propertyIsEnumerable.call(foo, "bar");
// END!>
