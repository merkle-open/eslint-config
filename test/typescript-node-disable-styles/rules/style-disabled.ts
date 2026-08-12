// DESCRIPTION = Verify style rules are disabled in typescript-node-disable-styles
// STATUS = 0

/* eslint no-unused-vars: 0 */
/* eslint @typescript-eslint/no-unused-vars: 0 */

// These "violations" should NOT produce errors because style rules are disabled:

// Wrong indentation
const x=1;

// Missing semicolon
const y = 2

// Wrong spacing
function foo(){return x}

// Wrong quotes
const str = "double quotes instead of single";

// All these style issues should be ignored
const obj={a:1,b:2};
