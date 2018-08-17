// DESCRIPTION = enforce or disallow variable initializations at definition
// STATUS = 0

/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
/* eslint prefer-const: 0*/
// <!START
// Bad
function bad() {
  let bar
  let baz
  bar = 3
  baz = 4
}

// Good
function good() {
  let bar = 1
  let baz = 2
  bar = 3
  baz = 4
}
// END!>
