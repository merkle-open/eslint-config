// Warns if a type assertion does not change the type of an expression (no-unnecessary-type-assertion)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/
/* eslint @typescript-eslint/no-non-null-assertion: 0*/
/* eslint @typescript-eslint/no-angle-bracket-type-assertion: 0*/

// <!START
// Bad
/*
(() => {
	function foo(x: number): number {
		return x!; // unnecessary non-null
	}
})();
*/
// Good
(() => {
	function foo(x: number | undefined): number {
		return x!;
	}
})();
// END!>
