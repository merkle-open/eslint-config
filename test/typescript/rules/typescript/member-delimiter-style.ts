// Require a specific member delimiter style for interfaces and type literals (member-delimiter-style)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Bad
/*
interface IFoo {
	name: string,
	greet(): void,
}
*/
// Good
interface IFoo {
	name: string;
	greet(): void;
}
// END!>
