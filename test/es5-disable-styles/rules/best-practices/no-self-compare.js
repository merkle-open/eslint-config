// DESCRIPTION = disallow comparisons where both sides are exactly the same
// STATUS = 2

// <!START
// Bad
/*
var x = 10;
if (x === x) {
	x = 20;
}
*/
// END!>
