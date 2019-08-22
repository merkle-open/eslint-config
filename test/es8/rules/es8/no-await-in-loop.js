// DESCRIPTION = Disallow await inside of loops
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
/* eslint object-shorthand: 0*/
// <!START
// Bad
/*
async function foo(things) {
	const results = [];
	for (const thing of things) {
		// Bad: each loop iteration is delayed until the entire asynchronous operation completes
		results.push(await bar(thing));
	}
	return baz(results);
}
*/

// Good
async function foo(things) {
	const results = [];
	for (const thing of things) {
		// Good: all asynchronous operations are immediately started.
		results.push(bar(thing));
	}
	// Now that all the asynchronous operations are running, here we wait until they all complete.
	return baz(await Promise.all(results));
}
// END!>
