
// DESCRIPTION = disallow duplicate arguments in functions
// STATUS = 2

// <!START
// Bad
/*
function foo(a, b, a) {
	console.log('value of the second a:', a);
}
*/
// END!>
