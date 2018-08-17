// DESCRIPTION = disallow empty functions, except for standalone funcs/arrows
// STATUS = 0

/* eslint require-jsdoc: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
// <!START
// Bad
function foo() {
  // do nothing.
}

// Good
function foo2() {
  document.window.append("", null)
}
// END!>
