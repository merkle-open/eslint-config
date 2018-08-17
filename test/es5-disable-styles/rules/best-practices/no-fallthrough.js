// DESCRIPTION = disallow fallthrough of case statements
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint default-case: 0*/
// <!START
// Bad
/*
switch (foo) {
	case 1:
		doSomething();

	case 2:
		doSomethingElse();
}
*/

// Good
switch (foo) {
  case 1:
    doSomething()
    break
  case 2:
    doSomethingElse()
}
// END!>
