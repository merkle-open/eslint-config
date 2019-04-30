// Disallow iterating over an array with a for-in loop (no-for-in-array)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint no-restricted-syntax: 0*/
/* eslint guard-for-in: 0*/

// <!START
// Bad
/*
for (const x in [3, 4, 5]) {
	console.log(x);
}
*/
// Good
// still not okay because not allowed by this rules: no-restricted-syntax, guard-for-in
for (const x in { a: 3, b: 4, c: 5 }) {
	console.log(x);
}
// END!>
