// DESCRIPTION = disallow assigning to the exception in a catch block
// STATUS = 2

// <!START
// Bad
/*
try {
	// code
} catch (e) {
	e = 10;
}
*/
// END!>
