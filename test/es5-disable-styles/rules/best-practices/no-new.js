// DESCRIPTION = disallow use of new operator when not part of the assignment or comparison
// STATUS = 2

/* eslint vars-on-top: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-undef: 0*/
// <!START
// Bad
/*
new Person();
*/

// Good
var person = new Person();

// END!>
