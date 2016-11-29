
// DESCRIPTION = Prevent img alt text from containing redundant words like "image", "picture", or "photo"
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
/* eslint object-shorthand: 0*/
/* eslint react/jsx-indent: 0*/
// <!START
// Bad
/*
<img alt="Photo of foo being weird." src="foo" />;
<img alt="Image of me at a bar!" src="bar" />;
<img alt="Picture of baz fixing a bug." src="baz" />;
*/

// Good
<img alt="Foo eating a sandwich." src="foo" />;
<img
	aria-hidden
	alt="Picture of me taking a photo of an image"
	src="bar"
/>;
<img alt={`Baz taking a ${photo}`} src="baz" />;
// END!>
