/* eslint require-jsdoc: 0*/
/* eslint no-use-before-define: 0*/
/* eslint no-undef: 0*/
/* eslint no-unused-vars: 0*/
/* eslint no-unreachable: 0*/
/* eslint no-empty: 0*/
/* eslint no-empty-function: 0*/
/* eslint no-shadow: 0*/
/* eslint no-redeclare: 0*/
/* eslint no-unused-expressions: 0*/
/* eslint react/react-in-jsx-scope: 0*/
/* eslint react/prefer-stateless-function: 0*/
/* eslint react/prefer-es6-class: 0*/
/* eslint react/prop-types: 0*/
/* eslint react/jsx-sort-props: 0*/
/* eslint react/jsx-no-undef: 0*/
/* eslint object-shorthand: 0*/
/* eslint react/jsx-indent: 0*/
// DESCRIPTION = Enforce tabIndex value is not greater than zero.
// STATUS = 0

// <!START
// Bad
;<span tabIndex="5">foo</span>
;<span tabIndex="3">bar</span>
;<span tabIndex="1">baz</span>
;<span tabIndex="2">never really sure what goes after baz</span>

// Good
;<span tabIndex="0">foo</span>
;<span tabIndex="-1">bar</span>
;<span tabIndex={0}>baz</span>
// END!>
