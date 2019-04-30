// Disallow generic Array constructors (no-array-constructor)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint no-array-constructor: 0*/

// <!START
// Bad
/*
(async () => {
	const arr1 = Array(0, 1, 2);
	const arr2 = new Array(0, 1, 2);
})();
*/
// Good
(async () => {
	const arr1 = Array<number>(0, 1, 2);
	const arr2 = new Array<number>(0, 1, 2);

	const arr3 = Array(500);
	const arr4 = new Array(arr1.length);
})();
// END!>
