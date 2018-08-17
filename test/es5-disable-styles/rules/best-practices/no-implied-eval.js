// DESCRIPTION = disallow use of eval()-like methods
// STATUS = 2

/* eslint no-undef: 0*/
// <!START
// Bad
/*
setTimeout('doSomething();', 100);
*/

// Good
setTimeout(doSomething, 100)
// END!>
