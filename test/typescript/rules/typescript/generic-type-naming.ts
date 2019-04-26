// Enforces naming of generic type variables (generic-type-naming)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/
/* eslint @typescript-eslint/no-type-alias: 0*/

// <!START
// Bad
/*
(() => {
	type ReadOnly<SomeType extends object> = {
		readonly [TKey in keyof SomeType]: SomeType[TKey]
	};
})();
*/
// Good
(() => {
	type IReadOnly<TSomeType extends object> = {
		readonly [TKey in keyof TSomeType]: TSomeType[TKey]
	};
})();
// END!>
