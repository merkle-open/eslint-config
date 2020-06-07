// DESCRIPTION = Detects object.escapeMarkup = false, which can be used with some template engines to disable escaping of HTML entities. This can lead to Cross-Site Scripting (XSS) vulnerabilities.
// STATUS = 2

/* eslint-disable global-require */
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
	const a = {};
	a.escapeMarkup = false;
})();
*/
// Good
(() => {
	escapeMarkup = false;
})();

// END!>
