
## Security


### [Detect buffer noassert](https://www.npmjs.com/package/eslint-plugin-security#detect-buffer-noassert)

> Detects calls to buffer with noAssert flag set From the Node.js API docs: "Setting noAssert to true skips validation of the offset. This allows the offset to be beyond the end of the Buffer."


:white_check_mark: Enabled (error)

```javascript

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


```
<br />



### [Detect child process](https://www.npmjs.com/package/eslint-plugin-security#detect-child-process)

> Detects instances of child_process & non-literal exec()


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const t1 = require('child_process');
	t1.exec(com);
})();
*/
// Good
(() => {
	const t1 = child_process.exec('ls');
})();


```
<br />



### [Detect disable mustache escape](https://www.npmjs.com/package/eslint-plugin-security#detect-disable-mustache-escape)

> Detects object.escapeMarkup = false, which can be used with some template engines to disable escaping of HTML entities. This can lead to Cross-Site Scripting (XSS) vulnerabilities.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const a = {};
	a.escapeMarkup = false;
})();
*/
// Good
(() => {
	escapeMarkup = false;
})();


```
<br />



### [Detect eval with expression](https://www.npmjs.com/package/eslint-plugin-security#detect-eval-with-expression)

> Detects eval(variable) which can allow an attacker to run arbitary code inside your process.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const t1 = eval(a);
})();
*/
// Good
(() => {
	const t1 = eval('alert()');
})();


```
<br />



### [Detect no csrf before method override](https://www.npmjs.com/package/eslint-plugin-security#detect-no-csrf-before-method-override)

> Detects Express csrf middleware setup before method-override middleware. This can allow GET requests (which are not checked by csrf) to turn into POST requests later.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	express.csrf();
	express.methodOverride()
})();
*/
// Good
(() => {
	express.methodOverride();
	express.csrf();
})();


```
<br />



### [Detect non literal fs filename](https://www.npmjs.com/package/eslint-plugin-security#detect-non-literal-fs-filename)

> Detects variable in filename argument of fs calls, which might allow an attacker to access anything on your system.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const t1 = fs.open(c);
})();
*/
// Good
(() => {
	const t1 = fs.open('test');
})();


```
<br />



### [Detect non literal regexp](https://www.npmjs.com/package/eslint-plugin-security#detect-non-literal-regexp)

> Detects RegExp(variable), which might allow an attacker to DOS your server with a long-running regular expression.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const t1 = new RegExp(c, 'i');
})();
*/
// Good
(() => {
	const t1 = new RegExp('ab+c', 'i');
})();


```
<br />



### [Detect non literal require](https://www.npmjs.com/package/eslint-plugin-security#detect-non-literal-require)

> Detects require(variable), which might allow an attacker to load and run arbitrary code, or access arbitrary files on disk.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const t1 = require(c);
})();
*/
// Good
(() => {
	const t1 = require('test');
})();


```
<br />



### [Detect object injection](https://www.npmjs.com/package/eslint-plugin-security#detect-object-injection)

> Detects variable[key] as a left- or right-hand assignment operand.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	var a = {};
	a[b] = 4;
})();
*/
// Good
(() => {
	var a = {};
})();


```
<br />



### [Detect possible timing attacks](https://www.npmjs.com/package/eslint-plugin-security#detect-possible-timing-attacks)

> Detects insecure comparisons (==, !=, !== and ===), which check input sequentially.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
    if (password === 'mypass') {}
    if ('mypass' === password) {}
})();
*/
// Good
(() => {
	if (age === 5) {}
})();


```
<br />



### [Detect pseudoRandomBytes](https://www.npmjs.com/package/eslint-plugin-security#detect-pseudoRandomBytes)

> Detects if pseudoRandomBytes() is in use, which might not give you the randomness you need and expect.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	crypto.pseudoRandomBytes();
})();
*/
// Good
(() => {
	crypto.randomBytes();
})();


```
<br />



### [Detect unsafe regex](https://www.npmjs.com/package/eslint-plugin-security#detect-unsafe-regex)

> Locates potentially unsafe regular expressions, which may take a very long time to run, blocking the event loop.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(() => {
	const reg1 = /(x+x+)+y/;
	const reg2 = new RegExp('x+x+)+y');
})();
*/
// Good
(() => {
	const reg1 = /^\d+1337\d+$/;
	const reg2 = new RegExp('^\\d+1337\\d+$');
})();


```
<br />


