// DESCRIPTION = enforces consistent naming when capturing the current execution context
// STATUS = 2

/* eslint no-unused-vars: 0*/
// <!START
// Bad
/*
const self = this;
*/
// Good
const _this = this;

// END!>
