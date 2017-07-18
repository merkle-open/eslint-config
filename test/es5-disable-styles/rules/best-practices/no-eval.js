// DESCRIPTION = disallow use of eval()
// STATUS = 2

/* eslint no-undef: 0*/
/* eslint no-empty: 0*/
/* eslint no-unused-vars: 0*/
// <!START
// Bad
/*
var obj = { x: 'foo' },
	key = 'x',
	value = eval('obj.' + key);
*/
// END!>
