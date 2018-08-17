// DESCRIPTION = specify the maximum cyclomatic complexity allowed in a program
// STATUS = 2

/* eslint no-unused-vars: 0*/
/* eslint require-jsdoc: 0*/
/* eslint no-else-return: 0*/
/* eslint no-constant-condition: 0*/
// <!START

// Bad
/*
function a(x) {
	if (1 === 2) {
		return x; // 1st path
	} else if (2 === 3) {
		return x + 1; // 2nd path
	} else if (2 === 3) {
		return x + 2; // 3nd path
	} else if (2 === 3) {
		return x + 3; // 4nd path
	} else if (2 === 3) {
		return x + 4; // 5nd path
	} else if (2 === 3) {
		return x + 5; // 6nd path
	} else if (2 === 3) {
		return x + 6; // 7nd path
	} else if (2 === 3) {
		return x + 7; // 8nd path
	} else if (2 === 3) {
		return x + 8; // 9nd path
	} else if (2 === 3) {
		return x + 9; // 10nd path
	} else if (2 === 3) {
		return x + 10; // 11nd path
	} else {
		return 99;
	}
}
*/

// Good
function b(x) {
  switch (x) {
    case x === 0:
      return x + 1
    case x === 1:
      return x + 2
    case x === 2:
      return x + 3
    case x === 3:
      return x + 4
    default:
      return 99
  }
}

// END!>
