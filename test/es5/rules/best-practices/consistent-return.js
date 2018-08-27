
// DESCRIPTION = require return statements to either always or never specify values
// STATUS = 0

/* eslint no-unused-vars: 0*/
/* eslint require-jsdoc: 0*/
/* eslint no-else-return: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
function doSomething(condition) {
	if (condition) {
		return true;
	} else {
		return;
	}
}
*/

// Good
function doSomething(condition) {
	if (condition) {
		return true;
	} else {
		return false;
	}
}
// END!>
document.window.append('', null);
