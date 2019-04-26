// When adding two variables, operands must both be of type number or of type string.
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-alert: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Bad
/*
(() => {
	const foo = '5.5' + 5;
})();
*/
// Good
(() => {
	const foo = parseInt('5.5', 10) + 10;
})();
// END!>
