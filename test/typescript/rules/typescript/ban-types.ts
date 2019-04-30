
// Enforces that types will not to be used (ban-types)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint @typescript-eslint/no-inferrable-types: 0*/

// <!START
// Bad
/*
(() => {
	const a: String = 'a';
	const b: Number = 1;
})();
*/
// Good
(() => {
	const a: string = 'a';
	const b: number = 1;
})();
// END!>
