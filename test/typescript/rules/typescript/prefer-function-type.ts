// DESCRIPTION = Use function types instead of interfaces with call signatures (prefer-function-type)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-alert: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad
/*
(() => {
	interface IFoo {
		(): string;
	}

	function foo(bar: { (): number }): number {
		return bar();
	}

	interface IFoo2 extends Function {
		(): void;
	}
})();
*/
// Good
(() => {
	interface IFoo {
		(): void;
		bar: number;
	}

	function foo(bar: { (): string; baz: number }): string {
		return bar();
	}

	interface IFoo2 {
		bar: string;
	}
	interface IBar extends IFoo2 {
		(): void;
	}
})();
// END!>
