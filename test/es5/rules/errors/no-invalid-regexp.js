
// DESCRIPTION = disallow invalid regular expression strings in the RegExp constructor
// STATUS = 2

/* eslint no-new: 0*/
// <!START
// Bad
/*
RegExp('[');
RegExp('.', 'z');
new RegExp('\\');
*/
// END!>
