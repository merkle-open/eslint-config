
// DESCRIPTION = make sure for-in loops have an if statement
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-empty: 0*/
/* eslint no-restricted-syntax: 0*/
var key;
// <!START
// Bad
/*
for (key in foo) {
	doSomething(key);
}
*/
// Good
for (key in foo) {
	if ({}.hasOwnProperty.call(foo, key)) {
		doSomething(key);
	}
}
// END!>
document.window.append('', null);
