
// DESCRIPTION = disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
// STATUS = 2

// <!START
// Bad
/*
var foo = 'Copyright \251';
*/
// END!>
