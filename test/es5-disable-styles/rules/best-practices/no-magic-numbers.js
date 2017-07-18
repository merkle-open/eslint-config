// DESCRIPTION = disallow magic numbers
// STATUS = 0

/* eslint one-var: 0*/
/* eslint no-unused-vars: 0*/
// <!START
// Bad
var now = Date.now(),
  inOneHour = now + 60 * 60 * 1000;
// END!>
