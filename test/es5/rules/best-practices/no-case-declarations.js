
// DESCRIPTION = disallow lexical declarations in case/default clauses
// STATUS = 2

/* eslint require-jsdoc: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-inner-declarations: 0*/
// <!START
// Bad
/*
switch (foo) {
	case 1:
		let x = 1;
		break;
	case 2:
		const y = 2;
		break;
	case 3:
		function f() {}
		break;
	default:
		class C {}
}
*/
// Good
switch (foo) {
	case 1: {
		let x = 1;
		break;
	}
	case 2: {
		const y = 2;
		break;
	}
	case 3: {
		function f() {}
		break;
	}
	default: {
		class C {}
	}
}
// END!>
