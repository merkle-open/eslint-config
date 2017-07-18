// DESCRIPTION = disallow duplicate keys when creating object literals
// STATUS = 2

/* eslint no-unused-vars: 0*/

// <!START
// Bad
/*
var foo = {
	bar: 'baz',
	bar: 'qux'
};
*/
// END!>
