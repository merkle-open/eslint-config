// @flow
// DESCRIPTION = enforces consistent use of trailing commas in Object and Tuple annotations.
// STATUS = 2

/* eslint max-len: 0*/
/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
/* eslint object-shorthand: 0*/
// <!START
// BAD
/*
type AeType = {
	foo: string
};
*/
// GOOD
type BeType = {
  foo: string
}
// END!>
