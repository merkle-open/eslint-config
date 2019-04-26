// DESCRIPTION = Require that member overloads be consecutive (adjacent-overload-signatures from TSLint)
// STATUS = 2

/* eslint @typescript-eslint/unified-signatures: 0*/

// <!START
// Bad
/*
interface IFoo {
	foo(s: string): void;
	foo(n: number): void;
	bar(): void;
	foo(sn: string | number): void;
}
*/
// Good
interface IFoo {
	foo(sn: string | number): void;
	foo(s: string): void;
	foo(n: number): void;
	bar(): void;
}
// END!>
