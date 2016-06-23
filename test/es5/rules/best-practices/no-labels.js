
// DESCRIPTION = disallow use of labels for anything other then loops and switches
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-extra-label: 0*/
/* eslint no-restricted-syntax: 0*/
/* eslint default-case: 0*/
// <!START
// Bad
/*
label:
	switch (a) {
		case 0:
			break label;
	}
*/
// END!>
