// DESCRIPTION = Detects calls to buffer with noAssert flag set From the Node.js API docs: "Setting noAssert to true skips validation of the offset. This allows the offset to be beyond the end of the Buffer."
// STATUS = 2

/* eslint max-len: 0*/
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
// <!START
// Bad
/*
(() => {
	const t1 = a.readUInt8(0, true);
})();
*/
// Good
(() => {
	const t1 = a.readUInt8(0, false);
})();

// END!>
