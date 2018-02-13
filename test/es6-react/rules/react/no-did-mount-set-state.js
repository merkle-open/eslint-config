
// DESCRIPTION = Prevent usage of setState in componentDidMount
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
/* eslint react/no-multi-comp: 0*/
/* eslint object-shorthand: 0*/
/* eslint no-unused-expressions: 0*/
// <!START
// Bad
/*
class Hello extends Component {
	componentDidMount() {
		this.setState({
 			isLoading: true
		});
	}
	render() {
		return <div>Hello {this.state.name}</div>;
	}
}
*/

// Good
class Hello extends Component {
	constructor() {
		// initialState
		this.state = {
			isLoading: true,
		};
	}
	render() {
		return <div>Hello {this.state.name}</div>;
	}
}
// END!>
