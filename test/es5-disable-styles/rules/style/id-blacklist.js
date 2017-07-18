// DESCRIPTION = Blacklist certain identifiers to prevent them being used
// STATUS = 0

/* eslint require-jsdoc: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
function _test(data) {}
*/

// Good
function _test(productData) {}
// END!>
