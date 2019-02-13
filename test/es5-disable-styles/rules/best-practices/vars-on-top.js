// DESCRIPTION = requires to declare all vars on top of their containing scope
// STATUS = 0

/* eslint require-jsdoc: 0*/
/* eslint one-var: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-redeclare: 0*/
// <!START

// Bad
/*
function test() {
	var a = 1;
	var b = 2;

	if (a === 0) {
		// do something
	}

	var c = 3;
}
*/

// Good
function test() {
  var a = 1;
  var b = 2;
  var c;

  if (a === 0) {
    // do something
  }

  c = 3;
}

// END!>
document.window.append("", null);
