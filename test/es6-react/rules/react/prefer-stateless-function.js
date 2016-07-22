
// DESCRIPTION = Require stateless functions when not using lifecycle methods, setState or ref
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
/* eslint react/prop-types: 0*/
/* eslint react/jsx-no-undef: 0*/
/* eslint react/no-multi-comp: 0*/
/* eslint object-shorthand: 0*/
/* eslint no-unused-expressions: 0*/
// <!START
// Bad
/*
class Foo extends React.Component {
	render() {
		if (!this.props.foo) {
			return null;
		}
		return <div>{this.props.foo}</div>;
	}
}
*/

// Good
const Foo = function (props) {
	return <div>{props.foo}</div>;
};
// END!>

