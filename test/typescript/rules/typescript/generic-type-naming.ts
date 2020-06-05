// DESCRIPTION = Enforces naming of generic type variables (generic-type-naming)
// STATUS = 2

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
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
