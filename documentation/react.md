
## React


### [Display name](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md)

> Prevent missing displayName in a React component definition


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const Hello = React.createClass({
	render: function () {
		return (<div>Hello {this.props.name}</div>);
	}
});
*/

```
<br />



### [Forbid prop types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)

> Forbid certain propTypes (any, array, object)


:x: Disabled

<br />



### [Jsx boolean value](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

> Enforce boolean attributes notation in JSX


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const Hello = <Hello personal={true} />;
*/

// Good
const Hello = <Hello personal />;

```
<br />



### [Jsx closing bracket location](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

> Validate closing bracket location in JSX


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<Hello
	firstName="John"
	lastName="Smith" />;

<Hello
	firstName="John"
	lastName="Smith"
	/>;
*/

// Good
<Hello
	firstName="John"
	lastName="Smith"
/>;

```
<br />



### [Jsx curly spacing](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

> Enforce or disallow spaces inside of curly braces in JSX attributes


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<Hello name={ firstname } />;
<Hello name={ firstname} />;
<Hello name={firstname } />;
*/

// Good
<Hello name={firstname} />;
<Hello name={{ firstname: 'John', lastname: 'Doe' }} />;
<Hello name={
	firstname
}
/>;

```
<br />



### [Jsx equals spacing](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)

> enforce spacing around jsx equals signs


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<Hello name = {firstname} />;
<Hello name ={firstname} />;
<Hello name= {firstname} />;
*/

// Good
<Hello name={firstname} />;
<Hello name />;
<Hello {...props} />;

```
<br />



### [Jsx first prop new line](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)

> Require that the first prop in a JSX element be on a new line when the element is multiline


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<Hello personal
	prop />;
*/

// Good
<Hello
	personal
	prop
/>;

```
<br />



### [Jsx handler names](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)

> Enforce event handler naming conventions in JSX


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<MyComponent handleChange={this.handleChange} />;
<MyComponent onChange={this.componentChanged} />;
*/

// Good
<MyComponent onChange={this.handleChange} />;
<MyComponent onChange={this.props.onFoo} />;

```
<br />



### [Jsx indent props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)

> Validate props indentation in JSX


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
// 2 spaces indentation
<Hello
  firstName="John"
/>;

// no indentation
<Hello
firstName="John"
/>;
*/

// Good
<Hello
	firstName="John"
/>;

```
<br />



### [Jsx indent](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)

> enforce JSX indentation


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
// 2 spaces indentation
<App>
  <Hello />
</App>;

// no indentation
<App>
<Hello />
</App>;
*/

// Good
// 1 tab indentation
<App>
	<Hello />
</App>;

```
<br />



### [Jsx key](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)

> Validate JSX has key prop when in array or iterator


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
[<Hello />, <Hello />, <Hello />];
out.map((x) => <Hello>x</Hello>);
*/

// Good
[<Hello key="1" />, <Hello key="2" />, <Hello key="3" />];
out.map((x, i) => <Hello key={i}>x</Hello>);

```
<br />



### [Jsx max props per line](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md)

> Limit maximum of props on a single line in JSX


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<Hello firstName="John" lastName="Smith" tel={5555555} />;
*/

// Good
<Hello firstName="John" lastName="Smith" />;
<Hello
	firstName="John"
	lastName="Smith"
	tel={5555555}
/>;

```
<br />



### [Jsx no bind](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

> Prevent usage of .bind() in JSX props


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<div onClick={this.handleClick.bind(this)}></div>;
*/

// Good
<div onClick={this.handleClick}></div>;

```
<br />



### [Jsx no duplicate props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)

> Prevent duplicate props in JSX


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<Hello name="John" name="John" />;
*/

// Good
<Hello firstname="John" lastname="Doe" />;

```
<br />



### [Jsx no literals](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md)

> Prevent usage of unwrapped JSX strings


:x: Disabled

```javascript

// Bad
const A = <div>test</div>;

// Good
const B = <div>{test}</div>;

```
<br />



### [Jsx no target blank](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)

> disallow target="_blank" on links


:x: Disabled

```javascript

// Bad
const Hello = <a target="_blank"></a>;

```
<br />



### [Jsx no undef](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)

> Disallow undeclared variables in JSX


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<Hello name="John" />;
*/

// Good
const Hello2 = require('./Hello');
<Hello2 name="John" />;

```
<br />



### [Jsx pascal case](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

> Enforce PascalCase for user-defined JSX components


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<Test_component />;
<TEST_COMPONENT />;
*/

// Good
<TestComponent />;

```
<br />



### [Jsx quotes](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-quotes.md)

> specify whether double or single quotes should be used in JSX attributes


:white_check_mark: Enabled (error)

<br />



### [Jsx sort props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md)

> Enforce props alphabetical sorting


:white_check_mark: Enabled (error)

```javascript

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
<Hello
	active
	validate
	firstName="John"
	lastName="Smith"
	tel={5555555}
	onClick={this.handleClick}
/>;

```
<br />



### [Jsx tag spacing](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

> Enforce spaces before the closing bracket of self-closing JSX elements


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<Hello/>;
<Hello firstName="John"/>;
*/

// Good
<Hello />;
<Hello firstName="John" />;

```
<br />



### [Jsx uses react](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)

> Prevent React to be incorrectly marked as unused


:white_check_mark: Enabled (error)

```javascript

const React = require('react');

```
<br />



### [Jsx uses vars](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)

> Prevent variables used in JSX to be incorrectly marked as unused


:white_check_mark: Enabled (error)

<br />



### [No danger](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md)

> Prevent usage of dangerous JSX properties


:x: Disabled

```javascript

const Hello = (<div dangerouslySetInnerHTML={{ __html: 'Hello World' }}></div>);

```
<br />



### [No deprecated](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)

> Prevent usage of deprecated methods


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
React.render(<MyComponent />, root);
React.unmountComponentAtNode(root);
React.findDOMNode(this.refs.foo);
React.renderToString(<MyComponent />);
React.renderToStaticMarkup(<MyComponent />);
*/

```
<br />



### [No did mount set state](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md)

> Prevent usage of setState in componentDidMount


:white_check_mark: Enabled (error)

```javascript

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

```
<br />



### [No did update set state](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)

> Prevent usage of setState in componentDidUpdate


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const Hello = React.createClass({
	componentDidUpdate() {
		this.setState({
			name: this.props.name.toUpperCase()
		});
	},
	render() {
		return <div>Hello {this.state.name}</div>;
	}
});
*/

```
<br />



### [No direct mutation state](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)

> Prevent direct mutation of this.state


:x: Disabled

```javascript

// Bad
/*
class Hello extends Component {
	constructor() {
		this.state = {
			isOpen: false
		};
	}
	handleClick() {
		this.state.isOpen = true;
	}
	render() {
		return <div onClick={this.handleClick}>Hello</div>;
	}
}
*/

// Good
class Hello extends Component {
	constructor() {
		this.state = {
			isOpen: false,
		};
	}
	handleClick() {
		this.setState({
			isOpen: true,
		});
	}
	render() {
		return <div onClick={this.handleClick}>Hello</div>;
	}
}

```
<br />



### [No is mounted](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

> Prevent usage of isMounted


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const Hello = React.createClass({
	handleClick() {
		if (this.isMounted()) {
			// do something
		}
	},
	render() {
		return <div onClick={this.handleClick}>Hello</div>;
	}
});
*/

```
<br />



### [No multi comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)

> Prevent multiple component definition per file


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const Hello = React.createClass({
	render() {
		return <div>Hello {this.props.name}</div>;
	}
});

const HelloJohn = React.createClass({
	render() {
		return <Hello name="John" />;
	}
});
*/

```
<br />



### [No set state](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md)

> Prevent usage of setState


:x: Disabled

<br />



### [No string refs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

> Prevent using string references


:x: Disabled

<br />



### [No unknown property](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)

> Prevent usage of unknown DOM property


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const Hello = <div class="hello">Hello World</div>;
*/

// Good
const Hello = <div className="hello">Hello World</div>;

```
<br />



### [Prefer es6 class](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)

> Require ES6 class declarations over React.createClass


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const Hello = React.createClass({
	render: function () {
		return <div>Hello {this.props.name}</div>;
	}
});
*/

// Good
class Hello extends React.Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}

```
<br />



### [Prefer stateless function](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

> Require stateless functions when not using lifecycle methods, setState or ref


:white_check_mark: Enabled (error)

```javascript

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

```
<br />



### [Prop types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

> Prevent missing props validation in a React component definition


:white_check_mark: Enabled (error)

```javascript

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

```
<br />



### [React in jsx scope](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

> Prevent missing React when using JSX


:white_check_mark: Enabled (error)

```javascript

// Good
const React = require('react');

```
<br />



### [Require extension](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-extension.md)

> Restrict file extensions that may be required


:x: Disabled

<br />



### [Require render return](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

> Require render() methods to return something


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
class Hello extends React.Component {
	render() {
		<div>Hello</div>;
	}
}
*/

// Good
class Hello extends React.Component {
	render() {
		return <div>Hello</div>;
	}
}

```
<br />



### [Self closing comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

> Prevent extra closing tags for components without children


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const HelloJohn = <Hello name="John"></Hello>;
*/

// Good
const HelloJohn = <Hello name="John" />;

```
<br />



### [Sort comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

> Enforce component methods order


:white_check_mark: Enabled (error)

```javascript

// Good
class Hello extends React.Component {

	// Static
	static isAllowed() {}

	// Lifecycle
	static getDerivedStateFromProps(props, state) {}
	componentDidMount() {}
	shouldComponentUpdate() {}
	getSnapshotBeforeUpdate() {}
	componentDidUpdate() {}
	componentWillUnmount() {}

	// Handle
	handleClick() {}

	// get set
	get test() {}
	set test(value) {}

	// everything else
	onClick() {}

	// render*
	renderButton() {}

	// render
	render() {
		return <div>{this.renderButton()}</div>;
	}
}

```
<br />



### [Sort prop types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md)

> Enforce propTypes declarations alphabetical sorting


:white_check_mark: Enabled (error)

```javascript

Test.propTypes = {
	ab: PropTypes.object.isRequired,
	aa: PropTypes.object,
	b: PropTypes.object,
	x: PropTypes.object,
	onClick: PropTypes.func,
};

Test2.propTypes = {
	ab: PropTypes.object.isRequired,
	onHover: PropTypes.func.isRequired,
	aa: PropTypes.object,
	b: PropTypes.object,
	x: PropTypes.object,
	onClick: PropTypes.func,
};

```
<br />



### [Wrap multilines](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

> Prevent missing parentheses around multilines JSX


:white_check_mark: Enabled (error)

<br />


