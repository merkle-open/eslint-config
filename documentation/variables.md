
## Variables


### [Init declarations](http://eslint.org/docs/rules/init-declarations)

> enforce or disallow variable initializations at definition


&#10006; Disabled

```javascript

// Bad
function bad() {
	let bar;
	let baz;
	bar = 3;
	baz = 4;
}

// Good
function good() {
	let bar = 1;
	let baz = 2;
	bar = 3;
	baz = 4;
}

```
<br />



### [No catch shadow](http://eslint.org/docs/rules/no-catch-shadow)

> disallow the catch clause parameter name being the same as a variable in the outer scope


&#10006; Disabled

<br />



### [No delete var](http://eslint.org/docs/rules/no-delete-var)

> disallow deletion of variables


&#10003; Enabled (error)

```javascript

// Bad
/*
var x;
delete x;
*/

```
<br />



### [No label var](http://eslint.org/docs/rules/no-label-var)

> disallow labels that share a name with a variable


&#10006; Disabled

<br />



### [No restricted globals](http://eslint.org/docs/rules/no-restricted-globals)

> disallow specific globals


&#10006; Disabled

<br />



### [No shadow restricted names](http://eslint.org/docs/rules/no-shadow-restricted-names)

> disallow shadowing of names such as arguments


&#10003; Enabled (error)

```javascript

// Bad
/*
function NaN() {}

!function (Infinity) {};

var undefined;
*/

```
<br />



### [No shadow](http://eslint.org/docs/rules/no-shadow)

> disallow declaration of variables already declared in the outer scope


&#10003; Enabled (error)

```javascript

// Bad
/*
var a = 3;
function b() {
	var a = 10;
}
*/

// Good
var a = 3;
function b() {
	var c = 10;
}

```
<br />



### [No undef init](http://eslint.org/docs/rules/no-undef-init)

> disallow use of undefined when initializing variables


&#10006; Disabled

```javascript

// Bad
var foo = undefined;
let bar = undefined;

```
<br />



### [No undef](http://eslint.org/docs/rules/no-undef)

> disallow use of undeclared variables unless mentioned in a /*global */ block


&#10003; Enabled (error)

```javascript

// Bad
/*
var a = someFunction();
b = 10;
*/

```
<br />



### [No undefined](http://eslint.org/docs/rules/no-undefined)

> disallow use of undefined variable


&#10006; Disabled

```javascript

// Bad
var foo = undefined;

```
<br />



### [No unused vars](http://eslint.org/docs/rules/no-unused-vars)

> disallow declaration of variables that are not used in the code


&#10003; Enabled (error)

```javascript

// Bad
/*
var someUnusedVar = 42;
var x;
var y = 10;
y = 5;

var z = 0;
z = z + 1;
*/

```
<br />



### [No use before define](http://eslint.org/docs/rules/no-use-before-define)

> disallow use of variables before they are defined


&#10003; Enabled (error)

```javascript

// Bad
/*
alert(a);
var a = 10;

f();
function f() {}
*/

// Good
var a = 10;
alert(a);

function f() {}
f();

```
<br />


