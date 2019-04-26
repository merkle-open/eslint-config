// Enforces naming conventions for class members by visibility. (member-naming)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Bad
/*
class HappyClass {
	private foo: string;
	private bar = 123;
	public _fizz() {}
}
*/
// Good
class HappyClass {
	private _foo: string;
	private _bar = 123;
	public fizz() {}
}
// END!>
