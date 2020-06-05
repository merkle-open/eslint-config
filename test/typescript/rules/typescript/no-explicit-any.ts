// DESCRIPTION = Disallow usage of the any type (no-explicit-any)
// STATUS = 0

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad

/*
const age: any = 'seventeen';
*/
// Good
// not that good but okay in this configuration
const age: any = 'seventeen';
// END!>
