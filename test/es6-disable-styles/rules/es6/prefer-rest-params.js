// DESCRIPTION = use rest parameters instead of arguments
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
/* eslint no-console: 0*/
// <!START
// Bad
/*
function foo() {
	console.log(arguments);
}

function foo(action) {
	const args = [].slice.call(arguments, 1);
	action.apply(null, args);
}
*/

// Good
function foo(...args) {
  console.log(args)
}

function foo(action, ...args) {
  action(...args)
}
// END!>
