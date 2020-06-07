// DESCRIPTION = Detects insecure comparisons (==, !=, !== and ===), which check input sequentially.
// STATUS = 2

/* eslint-disable yoda */
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
    if (password === 'mypass') {}
    if ('mypass' === password) {}
})();
*/
// Good
(() => {
	if (age === 5) {}
})();

// END!>
