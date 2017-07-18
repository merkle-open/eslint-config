// DESCRIPTION = disallow this keywords outside of classes or class-like objects
// STATUS = 0

/* eslint no-undef: 0*/
// <!START
// Bad
foo(function() {
  this.a = 0;
});
// END!>
