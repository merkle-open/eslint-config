// DESCRIPTION = disallow declaration of variables that are not used in the code
// STATUS = 2

// <!START
// Bad
/*
var someUnusedVar = 42;
var x;
var y = 10;
y = 5;

var z = 0;
z = z + 1;
*/
// END!>
