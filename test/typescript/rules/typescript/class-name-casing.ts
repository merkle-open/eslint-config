// Require PascalCased class and interface names (class-name-casing)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint @typescript-eslint/no-extraneous-class: 0*/

// <!START
// Bad
/*
class invalidClassName {}
class Another_Invalid_Class_Name {}
const bar = class invalidName {};
interface someInterface {}
*/
// Good
class ValidClassName {}
class AnotherValidClassName {}
const bar = class ValidName {};
interface ISomeInterface {
	name: string;
}
// END!>
