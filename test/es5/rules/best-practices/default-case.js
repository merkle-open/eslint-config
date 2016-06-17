
// DESCRIPTION = require default case in switch statements
// STATUS = 2

/* eslint no-undef: 0*/
// <!START
// Bad
/*
switch (foo) {
	case 1:
		doSomething();
		break;

	case 2:
		doSomething();
		break;
}
*/

// Good
switch (foo) {
	case 1:
		doSomething();
		break;

	case 2:
		doSomething();
		break;

	default:
	// do nothing
}
// END!>
document.window.append('', null);
