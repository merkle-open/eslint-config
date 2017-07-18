// DESCRIPTION = restrict what can be thrown as an exception
// STATUS = 2

/* eslint no-unreachable: 0*/
// <!START
// Bad
/*
throw 'error';
*/

// Good
throw new Error("error");
// END!>
