
// DESCRIPTION = Enforce that elements with onClick handlers must be focusable.
// STATUS = 0

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
/* eslint object-shorthand: 0*/
// <!START
// Bad
<span onClick="submitForm();">Submit</span>;
<a onClick="showNextPage();">Next page</a>;

// Good
<div aria-hidden onClick={() => {}} />;
<span onClick="doSomething();" tabIndex="0">Click me!</span>;
<span onClick="doSomething();" tabIndex="-1">Click me too!</span>;
<button onClick="doSomething();">Click the button :)</button>;
// END!>
