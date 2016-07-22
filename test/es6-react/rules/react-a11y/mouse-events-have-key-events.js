
// DESCRIPTION = require that mouseover/out come with focus/blur, for keyboard-only users
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
<div onMouseOver={() => {}} />;
<div onMouseOut={() => {}} />;
<div onMouseOver={() => {}} />;
<div onMouseOut={() => {}} />;

// Good
<div onMouseOver={() => {}} onFocus={() => {}} />;
<div onMouseOut={() => {}} onBlur={() => {}} />;
<div onMouseOver={() => {}} onFocus={() => {}} />;
<div onMouseOut={() => {}} onBlur={() => {}} />;
// END!>

