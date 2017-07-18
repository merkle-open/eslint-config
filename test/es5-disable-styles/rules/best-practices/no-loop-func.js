// DESCRIPTION = disallow creation of functions within loops
// STATUS = 2

/* eslint vars-on-top: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
// <!START
// Bad
/*
for (var i = 0; i < 10; i++) {
	funcs[i] = function () {
		return i;
	};
}
*/
// END!>
