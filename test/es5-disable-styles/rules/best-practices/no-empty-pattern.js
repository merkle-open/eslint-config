// DESCRIPTION = disallow empty destructuring patterns
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-empty: 0*/
/* eslint no-unused-vars: 0*/
/* eslint one-var: 0*/
// <!START
// doesn't create any variables
/*
var { a: {} } = foo;
*/

// creates variable b
var {
  a: {b}
} = foo

// creates variable a
var {a = {}} = foo
// END!>
