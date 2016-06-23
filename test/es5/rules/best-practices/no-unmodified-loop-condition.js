
// DESCRIPTION = disallow unmodified conditions of loops
// STATUS = 0

/* eslint vars-on-top: 0*/
/* eslint one-var: 0*/
/* eslint no-undef: 0*/
/* eslint no-redeclare: 0*/
// <!START
// Bad
var node;
while (node) {
	doSomething(node);
}
node = other;

// Good
var node = 1;
while (node) {
	doSomething(node);
	node = 2;
}
// END!>
