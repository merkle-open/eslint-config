// DESCRIPTION = Detects if pseudoRandomBytes() is in use, which might not give you the randomness you need and expect.
// STATUS = 2

/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable no-eval */
/* eslint max-len: 0*/
/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
/* eslint no-unused-expressions: 0*/
// <!START
// Bad
/*
(() => {
	crypto.pseudoRandomBytes();
})();
*/
// Good
(() => {
	crypto.randomBytes();
})();

// END!>
