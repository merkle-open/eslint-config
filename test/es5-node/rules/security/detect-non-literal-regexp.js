// DESCRIPTION = Detects RegExp(variable), which might allow an attacker to DOS your server with a long-running regular expression.
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
	const t1 = new RegExp(c, 'i');
})();
*/
// Good
(() => {
	const t1 = new RegExp('ab+c', 'i');
})();

// END!>
