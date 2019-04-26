// Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-restricted-syntax: 0*/
/* eslint guard-for-in: 0*/

// <!START
// Bad
/*
(async () => {
	const foo: number = 5;
	const bar: boolean = true;
	const baz: string = 'str';
})();
*/
// Good
(async () => {
	const foo = 5;
	const bar = true;
	const baz = 'str';
})();
// END!>
