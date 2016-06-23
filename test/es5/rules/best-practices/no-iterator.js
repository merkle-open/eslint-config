
// DESCRIPTION = disallow usage of __iterator__ property
// STATUS = 2

/* eslint no-undef: 0*/
// <!START
// Bad
/*
Foo.prototype.__iterator__ = function () {
	return new FooIterator(this);
};
*/
// END!>
