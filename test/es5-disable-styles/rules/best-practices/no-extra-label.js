// DESCRIPTION = disallow Unnecessary Labels
// STATUS = 2

/* eslint no-labels: 0*/
/* eslint no-restricted-syntax: 0*/
/* eslint default-case: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-labels: 0*/
// <!START
// Bad
/*
A: switch (a) {
	case 0:
		break A;
}
*/

// Good
B: switch (a) {
  case 0:
    break;
}
// END!>
