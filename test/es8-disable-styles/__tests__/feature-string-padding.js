/* eslint require-jsdoc: 0*/
/* eslint no-unused-vars: 0*/
// padStart
"abc".padStart(10)
// "       abc"
"abc".padStart(10, "foo")
// "foofoofabc"
"abc".padStart(6, "123465")
// "123abc"
"abc".padStart(8, "0")
// "00000abc"
"abc".padStart(1)
// "abc"

// padEnd
"abc".padEnd(10)
// "abc       "
"abc".padEnd(10, "foo")
// "abcfoofoof"
"abc".padEnd(6, "123456")
// "abc123"
"abc".padEnd(1)
// "abc"
