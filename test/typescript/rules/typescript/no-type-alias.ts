// DESCRIPTION = Disallow the use of type aliases (no-type-alias)
// STATUS = 0

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint @typescript-eslint/no-extraneous-class: 0*/
/* eslint @typescript-eslint/no-empty-interface: 0*/

// <!START
// Good
(() => {
	// primitives
	type Foo = 'a' | 'b';

	type Foo2 = string;

	type Foo3 = string[];

	// reference types
	interface IBar {}
	class Baz implements IBar {}

	type Foo5 = IBar & Baz;
})();
// END!>
