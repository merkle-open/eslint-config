// DESCRIPTION = disallow the type conversions with shorter notations
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint one-var: 0*/
/* eslint no-redeclare: 0*/
/* eslint vars-on-top: 0*/
// <!START
// Bad
/*
var b = !!foo;
var b = ~foo.indexOf('.');
var n = +foo;
var n = 1 * foo;
var s = '' + foo;
foo += '';
*/

// Good
var b = Boolean(foo);
var b = foo.indexOf(".") !== -1;
var n = Number(foo);
var n = Number(foo);
var s = String(foo);
foo = String(foo);
// END!>
