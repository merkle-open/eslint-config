
// DESCRIPTION = Disallow the use of custom TypeScript modules and namespaces (no-namespace)
// STATUS = 2

/* eslint no-console: 0*/
/* eslint @typescript-eslint/no-unused-vars: 0*/

// <!START
// Bad
/*
module foo {}
namespace foo {}
declare module foo {}
declare namespace foo {}
*/
// Good
declare module 'foo' {}
// END!>
