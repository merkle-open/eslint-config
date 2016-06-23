
// DESCRIPTION = disallow unnecessary string escaping
// STATUS = 2

/* eslint one-var: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-undef: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
let foo = 'hol\a';
let bar = /\:/;
*/

// Good
let foo = 'hola';
let bar = /:/;
// END!>
