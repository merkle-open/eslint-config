// DESCRIPTION = disallow unnecessary nested blocks
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
var foo
// <!START
// Bad
/*
{
	foo = bar();
}
*/
// END!>
