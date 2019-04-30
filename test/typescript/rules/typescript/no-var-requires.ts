// Disallows the use of require statements except in import statements (no-var-requires)
// STATUS = 2

/* eslint no-var: 0*/
/* eslint no-console: 0*/
/* eslint no-alert: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint @typescript-eslint/no-require-imports: 0*/

// <!START
// Bad
/*
(() => {
	var foo1 = require('foo');
	const foo2 = require('foo');
	let foo3 = require('foo');
})();
*/
// Good
import eslint from 'eslint';
// END!>
