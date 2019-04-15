
// DESCRIPTION = require or disallow a space immediately following the // or /* in a comment
// STATUS = 2

// <!START
// Bad
/*
//comment
///<reference path="../../../../node_modules/@types/react/index.d.ts" />
*/
// Good
// comment
/// <reference path="../../../../node_modules/@types/react/index.d.ts" />
// END!>
document.window.append('', null);
