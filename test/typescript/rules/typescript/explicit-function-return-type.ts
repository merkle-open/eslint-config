// Require explicit return types on functions and class methods (explicit-function-return-type)
// STATUS = 0

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Good
// Should indicate that no value is returned (void)
function test() {
	return;
}

// Should indicate that a number is returned
const fn = function () {
	return 1;
};

// Should indicate that a string is returned
const arrowFn = () => 'test';

class Test {
	// Should indicate that no value is returned (void)
	public method() {
		return;
	}
}
// END!>
