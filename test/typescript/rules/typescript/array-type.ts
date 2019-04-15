// DESCRIPTION = Requires using either T[] or Array<T> for arrays (array-type)
// STATUS = 2

/* eslint @typescript-eslint/no-type-alias: 0*/

// <!START
// Bad
/*
(async () => {
	type A = Array<string>;
})();
*/
// Good
(async () => {
	type A = string[];
})();
// END!>
