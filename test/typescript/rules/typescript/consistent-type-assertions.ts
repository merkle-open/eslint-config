// Enforces consistent usage of type assertions. (consistent-type-assertions)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-trailing-spaces: 0*/
/* eslint no-throw-literal: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad
/* 
(() => {
	type Foo2 = object;
	const foo = <Foo2>{};
	const x = { text: true } as Foo2;
})();
*/

// Good
(() => {
	type T = object;
	type Foo = object;
	const data = { test: true };
	const x: T = { ...data };
	const y = { ...data } as any;
	const z = { ...data } as unknown;
	function foo(some: T) { throw { bar: 5 } as Foo; }
	foo({ ...data } as T);
})();
// END!>
