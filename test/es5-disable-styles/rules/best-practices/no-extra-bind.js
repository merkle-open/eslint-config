// DESCRIPTION = disallow unnecessary function binding
// STATUS = 2

/* eslint no-console: 0*/
/* eslint one-var: 0*/
// <!START
// Bad
/*
var boundGetName = (function getName() {
	return 'ESLint';
}).bind({ name: 'ESLint' });
console.log(boundGetName());
// "ESLint"
*/

// Good
var boundGetName2 = function getName() {
  return this.name;
}.bind({ name: "ESLint" });
console.log(boundGetName2());
// "ESLint"
// END!>
