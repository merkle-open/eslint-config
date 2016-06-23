
// DESCRIPTION = disallow var and named functions in global scope
// STATUS = 0

/* eslint require-jsdoc: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint one-var: 0*/
/* eslint no-redeclare: 0*/
/* eslint vars-on-top: 0*/
/* eslint wrap-iife: 0*/
/* eslint no-shadow: 0*/
// <!START
// Bad
var foo = 1;
function bar() {}

// Good
window.foo = 1;
window.bar = function () {};

// Good
(function () {
	var foo = 1;
	function bar() {}
})();
// END!>
