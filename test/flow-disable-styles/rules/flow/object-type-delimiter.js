// @flow
// DESCRIPTION = enforces consistent separators between properties in Flow object types.
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
/* eslint react/react-in-jsx-scope: 0*/
/* eslint react/prefer-stateless-function: 0*/
/* eslint react/prefer-es6-class: 0*/
/* eslint react/prop-types: 0*/
/* eslint object-shorthand: 0*/
// <!START
// BAD
/*
type FooType = { a: string; b: string };
type Foo2Type = {
    a: string,
    b: string
};
*/
// GOOD
type FooType = {a: string, b: string}
type Foo2Type = {
  a: string,
  b: string
}
// END!>
