// DESCRIPTION = Detects Express csrf middleware setup before method-override middleware. This can allow GET requests (which are not checked by csrf) to turn into POST requests later.
// STATUS = 2

/* eslint max-len: 0*/
/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
/* eslint no-unused-expressions: 0*/
// <!START
// Bad
/*
(() => {
	express.csrf();
	express.methodOverride()
})();
*/
// Good
(() => {
	express.methodOverride();
	express.csrf();
})();

// END!>
