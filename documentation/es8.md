
## Es8


### [No await in loop](http://eslint.org/docs/rules/no-await-in-loop)

> Disallow await inside of loops


:white_check_mark: Enabled (error)

```javascript

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

```
<br />


