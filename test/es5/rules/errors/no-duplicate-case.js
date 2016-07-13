
// DESCRIPTION = disallow a duplicate case label.
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
/*
var a = 1;

switch (a) {
	case 1:
		break;
	case 2:
		break;
	case 1:
		break;
	default:
		break;
}
*/
// END!>
