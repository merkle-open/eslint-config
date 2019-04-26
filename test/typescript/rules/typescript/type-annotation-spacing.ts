// Require consistent spacing around type annotations
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-alert: 0*/
/* eslint no-unused-vars: 0*/
/* eslint @typescript-eslint/no-inferrable-types: 0*/

// <!START
// Bad
/*
(() => {
	const foo:string = 'bar';
})();
*/
// Good
(() => {
	const foo: string = 'bar';
})();
// END!>
