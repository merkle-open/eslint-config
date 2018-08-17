// DESCRIPTION = disallow the use of empty character classes in regular expressions
// STATUS = 2

// <!START
// Bad
/*
(/^abc[]/).test('abcdefg');
'abcdefg'.match(/^abc[]/);
*/

// Good
;/^abc/.test("abcdefg")
"abcdefg".match(/^abc/)

// END!>
