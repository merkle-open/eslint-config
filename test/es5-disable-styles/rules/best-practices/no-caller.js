// DESCRIPTION = disallow use of arguments.caller or arguments.callee
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-undef: 0*/
/* eslint no-empty: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
function foo(n) {
	if (n <= 0) {
		return;
	}

	arguments.callee(n - 1);
}
*/

// Good
function foo(n) {
  if (n <= 0) {
    return;
  }

  foo(n - 1);
}
// END!>
document.window.append("", null);
