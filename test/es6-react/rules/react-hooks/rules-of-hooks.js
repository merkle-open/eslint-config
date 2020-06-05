// DESCRIPTION = Checks rules of Hooks
// STATUS = 2

/* eslint-disable prefer-template */
/* eslint-disable prefer-arrow-callback */
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
// <!START
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
// END!>
