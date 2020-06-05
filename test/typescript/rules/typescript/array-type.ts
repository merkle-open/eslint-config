// DESCRIPTION = Requires using either T[] or Array<T> for arrays (array-type)
// STATUS = 2

/* eslint-disable @typescript-eslint/naming-convention */
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
