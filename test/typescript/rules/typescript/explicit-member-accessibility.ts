// DESCRIPTION = Require explicit return types on functions and class methods (explicit-function-return-type)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad
/*
class Animal {
	constructor(name) {
		this.animalName = name;
	}
	animalName: string;
	get name(): string {
		return this.animalName;
	}
	set name(value: string) {
		this.animalName = value;
	}
	walk() {
		// method
	}
}
*/
// Good
class Animal {
	private _animalName: string;
	public constructor(name: string) {
		this._animalName = name;
	}
	public get name(): string {
		return this._animalName;
	}
	public set name(value: string) {
		this._animalName = value;
	}
	public walk() {
		// method
	}
}
// END!>
