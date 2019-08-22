// Forbids the use of classes as namespaces (no-extraneous-class)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint @typescript-eslint/no-inferrable-types: 0*/

// <!START
// Bad
/*
class ConstructorOnly {
	public constructor() {
		console.log('constructor');
	}
}
*/
// Good
class ConstructorOnly {
	private _version: string = '1.1.0'
	public constructor() {
		console.log(`constructor ${this._version}`);
	}
}
// END!>
