// @flow
// DESCRIPTION = Warns against weak type annotations *any*, *Object* and *Function*. These types can cause flow to silently skip over portions of your code, which would have otherwise caused type errors.
// STATUS = 0

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
function foo(thing: string): any { return true; }

// GOOD
function foo(thing: string): boolean { return true; }
// END!>
