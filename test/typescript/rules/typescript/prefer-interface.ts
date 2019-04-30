
// Prefer an interface declaration over a type literal (type T = { ... }) (prefer-interface)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-alert: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad
/*
(() => {
	type Test = { x: number };
})();
*/
// Good
(() => {
	interface ITest {
		x: number;
	}
})();
// END!>
