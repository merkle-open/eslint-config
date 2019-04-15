// Enforce consistent indentation (indent)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

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
