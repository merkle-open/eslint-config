// Disallow the use of variables before they are defined (no-use-before-define)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-alert: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad
/*
(() => {
	class A {
		constructor() {}
	}
})();
*/
// Good
(() => {
	class A {
		public constructor() {
			this._doSomething();
		}
		private _doSomething() {
			document.write('something');
		}
	}
})();
// END!>
