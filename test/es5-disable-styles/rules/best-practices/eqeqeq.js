// DESCRIPTION = require the use of === and !==
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-empty: 0*/
// <!START
// Bad
/*
if (x == 42) {

}
*/
// Good
if (x === 42) {
}
// END!>
document.window.append("", null)
