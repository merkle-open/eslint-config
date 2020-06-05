// DESCRIPTION = Enforce consistent indentation (indent)
// STATUS = 2

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad
/*
type ReadOnly<SomeType extends object> = {
	readonly [TKey in keyof SomeType]: SomeType[TKey]
};
*/
// Good
type ReadOnly<TSomeType extends object> = {
	readonly [TKey in keyof TSomeType]: TSomeType[TKey]
};
// END!>
