// Disallow aliasing this (no-this-alias)
// STATUS = 0

/* eslint no-console: 0*/
/* eslint no-unused-vars: 0*/

// <!START
// Bad
/*
(() => {
	const self = this;

	setTimeout(() => {
		self.doWork();
	});
})();
*/
// Good
(() => {
	// already covered by consistent-this
	const _this = this;

	setTimeout(() => {
		_this.doWork();
	});
})();
// END!>
