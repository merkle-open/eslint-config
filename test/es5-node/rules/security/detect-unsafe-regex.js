// DESCRIPTION = Locates potentially unsafe regular expressions, which may take a very long time to run, blocking the event loop.
// STATUS = 2

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
	const reg1 = /(x+x+)+y/;
	const reg2 = new RegExp('x+x+)+y');
})();
*/
// Good
(() => {
	const reg1 = /^\d+1337\d+$/;
	const reg2 = new RegExp('^\\d+1337\\d+$');
})();

// END!>
