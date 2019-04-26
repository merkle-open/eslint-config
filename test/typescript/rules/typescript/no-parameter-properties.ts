// Disallow the use of parameter properties in class constructors. (no-parameter-properties)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-useless-constructor: 0*/
/* eslint no-empty-function: 0*/
/* eslint @typescript-eslint/explicit-member-accessibility: 0*/
/* eslint @typescript-eslint/no-extraneous-class: 0*/

// <!START
// Bad
/*
(() => {
	class Foo {
		constructor(readonly name: string) {}
	}
	class Foo {
		constructor(private name: string) {}
	}
	class Foo {
		constructor(protected name: string) {}
	}
	class Foo {
		constructor(public name: string) {}
	}
})();
*/
// Good
(() => {
	class Foo {
		constructor(name: string) {}
	}
})();
// END!>
