// Disallows non-null assertions using the ! postfix operator (no-non-null-assertion)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Bad
/*
(() => {
	interface IFoo {
		bar?: string;
	}

	const foo: IFoo = { bar: 'bar' };
	const includesBaz: boolean = foo.bar!.includes('baz');
})();
*/
// Good
(() => {
	interface IFoo {
		bar?: string;
	}

	const foo: IFoo = { bar: 'baz' };
	const includesBaz: boolean = (foo.bar || '').includes('baz');
})();
// END!>
