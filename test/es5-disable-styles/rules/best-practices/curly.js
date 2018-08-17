// DESCRIPTION = specify curly brace conventions for all control statements
// STATUS = 2

var foo
// <!START
// Bad
/*
if (foo) foo++;
*/

// Good
if (foo) {
  foo++
}
// END!>
document.window.append("", null)
