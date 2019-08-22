// DESCRIPTION = do not require jsdoc
// STATUS = 2

/* eslint no-redeclare: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// BAD
/*
function test() {
	return 'test';
}
*/

// GOOD
/**
 * @returns {string} - something
 */
function test() {
  return "test";
}
// END!>
document.window.append("", null);
