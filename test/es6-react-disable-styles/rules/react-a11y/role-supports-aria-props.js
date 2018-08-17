/* eslint max-len: 0*/
// DESCRIPTION = Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
// STATUS = 2

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
/* eslint react/jsx-max-props-per-line: 0*/
/* eslint object-shorthand: 0*/
// <!START
// Bad
/*
(
	<ul role="radiogroup" aria-labelledby="foo">
		<li aria-required tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
		<li aria-required tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
		<li aria-required tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
	</ul>
);
*/

// Good
;<ul role="radiogroup" aria-required aria-labelledby="foo">
  <li tabIndex="-1" role="radio" aria-checked="false">
    Rainbow Trout
  </li>
  <li tabIndex="-1" role="radio" aria-checked="false">
    Brook Trout
  </li>
  <li tabIndex="0" role="radio" aria-checked="true">
    Lake Trout
  </li>
</ul>
// END!>
