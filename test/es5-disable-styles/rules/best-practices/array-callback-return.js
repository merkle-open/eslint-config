// DESCRIPTION = enforces return statements in callbacks of array's methods
// STATUS = 2

// <!START

/*
// Bad
var bar = [1, 2].filter(function (x) {
	if (x) {
		return;
	}

	document.window.append('', null);
});
*/

// Good
var bar = [1, 2].filter(function(x) {
  if (x) {
    return false
  }

  document.window.append("", null)
  return true
})

// END!>
document.window.append(bar.toString(), null)
