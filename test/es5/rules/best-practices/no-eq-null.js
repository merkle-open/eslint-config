
// DESCRIPTION = disallow comparisons to null without a type-checking operator
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-empty: 0*/
// <!START
// Bad
/*
if (foo == null) {
	bar();
}
*/
// Good
if (foo === null) {
	bar();
}
// END!>
