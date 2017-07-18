// DESCRIPTION = disallow control characters in regular expressions
// STATUS = 2

/* eslint no-unused-vars: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
var pattern1 = /\x1f/;
var pattern2 = new RegExp('\x1f');
*/

// Good
var pattern1 = /\x20/;
var pattern2 = new RegExp("\x20");
// END!>
