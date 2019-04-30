// DESCRIPTION = Bans “// @ts-ignore” comments from being used (ban-ts-ignore)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint no-constant-condition: 0*/

// <!START
// Bad

/*
(() => {
	if (false) {
		// @ts-ignore
		console.log('hello');
	}
})();
*/
// END!>
