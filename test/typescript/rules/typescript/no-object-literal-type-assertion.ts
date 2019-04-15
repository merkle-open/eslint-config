// Forbids an object literal to appear in a type assertion expression (no-object-literal-type-assertion)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Bad
/*
(() => {
	interface ITest {
		name: string;
	}
	const x = { name: 'test' } as ITest;
})();
*/
// Good
(() => {
	interface ITest {
		name: string;
	}
	const x: ITest = { name: 'test' };
})();
// END!>
