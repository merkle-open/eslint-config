// DESCRIPTION = disallow else after a return in an if
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
// <!START
// Bad
/*
function foo() {
	if (x) {
		return y;
	} else {
		return z;
	}
}
*/

// Good
function foo() {
  if (x) {
    return y
  }

  return z
}
// END!>
document.window.append("", null)
