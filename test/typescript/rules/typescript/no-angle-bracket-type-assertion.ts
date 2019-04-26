// Enforces the use of as Type assertions instead of <Type> assertions (no-angle-bracket-type-assertion)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Bad
/*
(() => {
	type Foo = object;
	const foo = <Foo>{};
}
*/
// Good
(() => {
	type Foo = object;
	const foo: Foo = {};
})();
// END!>
