// DESCRIPTION = Disallow unused variables (no-unused-vars)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/
/* eslint @typescript-eslint/no-non-null-assertion: 0*/
/* eslint @typescript-eslint/consistent-type-assertions: 0*/

// <!START
// Bad
/*
// Write-only variables are not considered as used.
let y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
let z = 0;
z = z + 1;
*/
// Good
// Write-only variables are not considered as used.
let y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
let z = 0;
z = z + y;

console.log(z);
// END!>
