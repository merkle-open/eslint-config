
## React hooks


### [Exhaustive deps](https://reactjs.org/docs/hooks-rules.html)

> Checks effect dependencies


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
// https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js
function MyComponent() {
	const local = {};
	useEffect(() => {
		console.log(local);
	}, []);
}
*/

// Good
function MyComponent2() {
	const local = {};
	useEffect(() => {
		console.log(local);
	}, [local]);
}

```
<br />



### [Rules of hooks](https://reactjs.org/docs/hooks-rules.html)

> Checks rules of Hooks


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
function getFriendStatus(friendID) {
	const [isOnline, setIsOnline] = useState(null);
	// ...
	return isOnline;
}

function Foo({ alt, src }) {
	const [name, setName] = useState('Mary');
	const [surname, setSurname] = useState('Poppins');

	// 🔴 We're breaking the first rule by using a Hook in a condition
	if (name !== '') {
		useEffect(function persistForm() {
			localStorage.setItem('formData', name);
		});
	}

	return <img alt={alt} src={src} />;
}
*/

// Good
function useFriendStatus(friendID) {
	const [isOnline, setIsOnline] = useState(null);
	// ...
	return isOnline;
}

function Foo2({ alt, src }) {
	// 1. Use the name state variable
	const [name, setName] = useState('Mary');

	// 2. Use an effect for persisting the form
	useEffect(function persistForm() {
		localStorage.setItem('formData', name);
	});

	// 3. Use the surname state variable
	const [surname, setSurname] = useState('Poppins');

	// 4. Use an effect for updating the title
	useEffect(function updateTitle() {
		document.title = name + ' ' + surname;
	});
	return <img alt={alt} src={src} />;
}

```
<br />


