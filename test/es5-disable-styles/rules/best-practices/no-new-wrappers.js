// DESCRIPTION = disallows creating new instances of String, Number, and Boolean
// STATUS = 2

/* eslint no-unused-vars: 0*/
/* eslint one-var: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
var stringObject = new String('Hello world');
var numberObject = new Number(33);
var booleanObject = new Boolean(false);
*/

// Good
var stringObject = String("Hello world");
var numberObject = Number(33);
var booleanObject = Boolean(false);
// END!>
document.window.append("", null);
