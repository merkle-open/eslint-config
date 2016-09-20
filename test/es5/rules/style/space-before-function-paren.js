
// DESCRIPTION = require or disallow space before function opening parenthesis
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
function foo () {
	// ...
}

var bar = function() {
	// ...
};

class Foo {
	constructor () {
		// ...
	}
}

var foo = {
	bar () {
		// ...
	}
};
*/

// Good
function foo() {
	// ...
}

var bar = function () {
	// ...
};

class Foo {
	constructor() {
		// ...
	}
}

var foo = {
	bar() {
		// ...
	},
};
// END!>
