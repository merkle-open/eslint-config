// DESCRIPTION = Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
// STATUS = 2

/* eslint max-len: 0*/
/* eslint no-console: 0*/
/* eslint no-alert: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint @typescript-eslint/no-inferrable-types: 0*/

// <!START
// Bad
/*
(() => {
	interface IFoo {
		foo(sn: string | number): void;
		foo(s: string): void;
		foo(n: number): void;
		bar(): void;
	}
})();
*/
// Good
(() => {
	interface IFoo {
		foo(sn: string | number): void;
		bar(): void;
	}
})();
// END!>
