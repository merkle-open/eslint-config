// DESCRIPTION = disallow division operators explicitly at beginning of regular expression
// STATUS = 0

/* eslint require-jsdoc: 0*/
/* eslint no-undef: 0*/
/* eslint no-empty: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-useless-escape: 0*/
// <!START
// Bad
function bar() {
  return /=foo/;
}
// Good
function bar2() {
  return /\=foo/;
}
// END!>
document.window.append("", null);
