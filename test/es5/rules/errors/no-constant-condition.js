
// DESCRIPTION = disallow use of constant expressions in conditions
// STATUS = 2

/* eslint no-undef: 0*/
// <!START
// Bad
/*
if (false) {
	doSomethingUnfinished();
}
*/
// END!>
