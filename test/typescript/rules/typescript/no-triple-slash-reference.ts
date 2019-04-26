// Disallow /// <reference path="" /> comments (no-triple-slash-reference)
// STATUS = 0

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Good
(() => {
	/// <reference path="../../../../node_modules/@types/react/index.d.ts" />
})();
// END!>
