// DESCRIPTION = disallow reassignments of native objects
// STATUS = 2

/* eslint no-new-object: 0*/
// <!START
// Bad
/*
String = new Object();
*/
// END!>
