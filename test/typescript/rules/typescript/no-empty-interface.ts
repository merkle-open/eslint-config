// Disallow the declaration of empty interfaces (no-empty-interface)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad
/*
(async () => {
	// an empty interface
	interface IFoo {}

	// an interface with only one supertype (Bar === Foo)
	interface IBar extends IFoo {}

	// an interface with an empty list of supertypes
	interface IBaz {}
})();
*/
// Good
(async () => {
	interface IFoo {
		name: string;
	}
	interface IBar extends IFoo {
		email: string;
	}
	interface IBaz {
		name: string;
	}
})();
// END!>
