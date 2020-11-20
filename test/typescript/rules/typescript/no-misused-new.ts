// DESCRIPTION = Enforce valid definition of new and constructor. (no-misused-new)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint @typescript-eslint/no-useless-constructor: 0*/
/* eslint @typescript-eslint/no-empty-function: 0*/
/* eslint @typescript-eslint/no-extraneous-class: 0*/
/* eslint @typescript-eslint/prefer-function-type: 0*/

// <!START
// Bad
/*
(async () => {
	class C {
		new(): C;
	}

	interface IFoo {
		new (): IFoo;
		constructor(): void;
	}
})();
*/
// Good
(async () => {
	class C {
		public constructor() {}
	}
	interface IFoo {
		new (): C;
	}
})();
// END!>
