// DESCRIPTION = require or disallow Yoda conditions
// STATUS = 2

var color = "blue"
// <!START
// Bad
/*
if ('red' === color) {
	// ...
}
*/

// Good
if (color === "red") {
  // ...
}
// END!>
