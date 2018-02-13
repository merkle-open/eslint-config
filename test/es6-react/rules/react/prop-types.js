
// DESCRIPTION = Prevent missing props validation in a React component definition
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
/* eslint react/jsx-no-undef: 0*/
/* eslint react/no-multi-comp: 0*/
/* eslint object-shorthand: 0*/
/* eslint no-unused-expressions: 0*/
/* eslint react/display-name: 0*/
// <!START
// Bad
/*
class Hello extends Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
});
*/

// Good
class Hello extends Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}
Hello.propTypes = {
	name: PropTypes.string.isRequired,
};
// END!>
