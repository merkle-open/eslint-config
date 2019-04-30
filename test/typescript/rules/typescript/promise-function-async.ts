// Functions that return promises must be async (promise-function-async)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint no-alert: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad
/*
(() => {
	const arrowFunctionReturnsPromise = () => Promise.resolve('value');

	function functionReturnsPromise() {
		return Math.random() > 0.5 ? Promise.resolve('value') : false;
	}
})();
*/
// Good
(() => {
	const arrowFunctionReturnsPromise = async () => 'value';

	async function functionReturnsPromise() {
		return Math.random() > 0.5 ? 'value' : false;
	}
})();
// END!>
