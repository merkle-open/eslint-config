// DESCRIPTION = Detects variable in filename argument of fs calls, which might allow an attacker to access anything on your system.
// STATUS = 2

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
	const t1 = fs.open(c);
})();
*/
// Good
(() => {
	const t1 = fs.open('test');
})();

// END!>
