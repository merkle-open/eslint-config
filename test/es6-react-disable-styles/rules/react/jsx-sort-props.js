// DESCRIPTION = Enforce props alphabetical sorting
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
/* eslint react/react-in-jsx-scope: 0*/
/* eslint react/prefer-stateless-function: 0*/
/* eslint react/prefer-es6-class: 0*/
/* eslint react/prop-types: 0*/
/* eslint react/jsx-no-undef: 0*/
/* eslint object-shorthand: 0*/
/* eslint no-unused-expressions: 0*/
// <!START
// Bad
/*
<Hello
	active
	onClick={this.handleClick}
	tel={5555555}
	validate
	firstName="John"
	lastName="Smith"
/>;
*/

// Good
<Hello active validate firstName="John" lastName="Smith" tel={5555555} onClick={this.handleClick} />;
// END!>
