// Require a consistent member declaration order (member-ordering)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Bad
/*
class Foo {
	private _c: string; // -> field
	protected static e: string; // -> field
	public d: string; // -> field

	public static a(): void {} // -> method
	public b(): void {} // -> method

	public constructor() {
		console.log('constructor');
	} // -> constructor
}
*/
// Good
class Foo {
	protected static e: string; // -> field
	public d: string; // -> field
	private _c: string; // -> field

	public constructor() {
		console.log('constructor');
	} // -> constructor

	public static a(): void {} // -> method
	public b(): void {} // -> method
}
// END!>
