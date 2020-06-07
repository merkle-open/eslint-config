// DESCRIPTION = Detects instances of child_process & non-literal exec()
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
	const t1 = require('child_process');
	t1.exec(com);
})();
*/
// Good
(() => {
	const t1 = child_process.exec('ls');
})();

// END!>
