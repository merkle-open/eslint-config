// DESCRIPTION = require things with onClick to have an aria role
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
/* eslint react/jsx-no-undef: 0*/
/* eslint object-shorthand: 0*/
/* eslint react/jsx-indent: 0*/
// <!START
// Bad
<div onClick={() => {}} />;
<div onClick={() => {}} {...props} />;
<div onClick={() => {}} aria-hidden={false} />;
<a onClick={() => {}} />;

// Good
<div onClick={() => {}} role="button" />;
// Interactive element does not require role.
<input type="text" onClick={() => {}} />;
// tabIndex makes this interactive.
<a tabIndex="0" onClick={() => {}} />;
// button is interactive.
<button onClick={() => {}} className="foo" />;
// This is hidden from screenreader.
<div onClick={() => {}} role="button" aria-hidden />;
// This is a higher-level DOM component
<Input onClick={() => {}} type="hidden" />;
// END!>
