// DESCRIPTION = Bans // @ts-<directive> comments from being used or requires descriptions after directive (ban-ts-comment)
// STATUS = 2

/* eslint max-len: 0*/
/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint no-constant-condition: 0*/

// <!START
// Bad
/*
(() => {
	if (false) {
		// @ts-expect-error
		console.log('hello');
		// @ts-ignore
		console.log('hello');
		// @ts-nocheck
		console.log('hello');
		// @ts-check
		console.log('hello');
	}
})();
*/
// END!>
