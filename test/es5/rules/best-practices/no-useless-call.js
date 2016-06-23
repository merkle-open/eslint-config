
// DESCRIPTION = disallow unnecessary .call() and .apply()
// STATUS = 0

/* eslint no-undef: 0*/
// <!START
// Bad
foo.call(undefined, 1, 2, 3);

// Good
foo(1, 2, 3);
// END!>
