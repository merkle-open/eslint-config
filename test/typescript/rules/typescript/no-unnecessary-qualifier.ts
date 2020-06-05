// DESCRIPTION = Warns when a namespace qualifier is unnecessary. (no-unnecessary-qualifier)
// STATUS = 2

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint @typescript-eslint/no-extraneous-class: 0*/
/* eslint @typescript-eslint/no-empty-interface: 0*/
/* eslint @typescript-eslint/no-namespace: 0*/

// <!START
// Bad
/*
namespace A {
	export type B = number;
	const x: A.B = 3;
}
*/
// Good
namespace X {
	export type B = number;
}
namespace Y {
	export const x: X.B = 3;
}
// END!>
