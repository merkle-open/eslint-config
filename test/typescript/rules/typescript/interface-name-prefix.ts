// Require that interface names be prefixed with I (interface-name-prefix)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad
/*
interface Animal {
	name: string;
}
*/
// Good
interface IAnimal {
	name: string;
}
// END!>
