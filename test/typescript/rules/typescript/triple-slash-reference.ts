// Disallow /// <reference path="" /> comments (triple-slash-reference)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Good
(() => {
	/// <reference path="../../../../node_modules/@types/react/index.d.ts" />
})();
// END!>
