
## Errors


### [Comma dangle](http://eslint.org/docs/rules/comma-dangle)

> require trailing commas in multiline object literals


&#10003; Enabled (error)

```javascript

// Bad
/*
var bad = {
	bar: 'baz',
	qux: 'quux'
};
*/

// Good
var good = {
	bar: 'baz',
	qux: 'quux',
};

```
<br />



### [No cond assign](http://eslint.org/docs/rules/no-cond-assign)

> disallow assignment in conditional expressions


&#10003; Enabled (error)

```javascript

// Bad
/*
var x;
if (x = 0) {
	var b = 1;
}
*/

```
<br />



### [No console](http://eslint.org/docs/rules/no-console)

> disallow use of console


&#10003; Enabled (error)

```javascript

// Bad
/*
console.log('hello world');
*/

```
<br />



### [No constant condition](http://eslint.org/docs/rules/no-constant-condition)

> disallow use of constant expressions in conditions


&#10003; Enabled (error)

```javascript

// Bad
/*
if (false) {
	doSomethingUnfinished();
}
*/

```
<br />



### [No control regex](http://eslint.org/docs/rules/no-control-regex)

> disallow control characters in regular expressions


&#10003; Enabled (error)

```javascript

// Bad
/*
var pattern1 = /\x1f/;
var pattern2 = new RegExp('\x1f');
*/

// Good
var pattern1 = /\x20/;
var pattern2 = new RegExp('\x20');

```
<br />



### [No debugger](http://eslint.org/docs/rules/no-debugger)

> disallow use of debugger


&#10003; Enabled (error)

```javascript

// Bad
/*
function isTruthy(x) {
	debugger;
	return Boolean(x);
}
*/

```
<br />



### [No dupe args](http://eslint.org/docs/rules/no-dupe-args)

> disallow duplicate arguments in functions


&#10003; Enabled (error)

```javascript

// Bad
/*
function foo(a, b, a) {
	console.log('value of the second a:', a);
}
*/

```
<br />



### [No dupe keys](http://eslint.org/docs/rules/no-dupe-keys)

> disallow duplicate keys when creating object literals


&#10003; Enabled (error)

```javascript

// Bad
/*
var foo = {
	bar: 'baz',
	bar: 'qux'
};
*/

```
<br />



### [No duplicate case](http://eslint.org/docs/rules/no-duplicate-case)

> disallow a duplicate case label.


&#10003; Enabled (error)

```javascript

// Bad
/*
var a = 1;

switch (a) {
	case 1:
		break;
	case 2:
		break;
	case 1:
		break;
	default:
		break;
}
*/

```
<br />



### [No empty character class](http://eslint.org/docs/rules/no-empty-character-class)

> disallow the use of empty character classes in regular expressions


&#10003; Enabled (error)

```javascript

// Bad
/*
(/^abc[]/).test('abcdefg');
'abcdefg'.match(/^abc[]/);
*/

// Good
(/^abc/).test('abcdefg');
'abcdefg'.match(/^abc/);


```
<br />



### [No empty](http://eslint.org/docs/rules/no-empty)

> disallow empty statements


&#10003; Enabled (error)

```javascript

// Bad
/*
var foo = true;
if (foo) {

}
*/

```
<br />



### [No ex assign](http://eslint.org/docs/rules/no-ex-assign)

> disallow assigning to the exception in a catch block


&#10003; Enabled (error)

```javascript

// Bad
/*
try {
	// code
} catch (e) {
	e = 10;
}
*/

```
<br />



### [No extra boolean cast](http://eslint.org/docs/rules/no-extra-boolean-cast)

> disallow double-negation boolean casts in a boolean context


&#10006; Disabled

<br />



### [No extra parens](http://eslint.org/docs/rules/no-extra-parens)

> disallow unnecessary parentheses


&#10006; Disabled

```javascript

// Bad
var b = 1;
var c = 2;
var a = (b * c);
var d = (a * b) + c;

```
<br />



### [No extra semi](http://eslint.org/docs/rules/no-extra-semi)

> disallow unnecessary semicolons


&#10003; Enabled (error)

```javascript

// Bad
/*
var x = 5;;
*/

```
<br />



### [No func assign](http://eslint.org/docs/rules/no-func-assign)

> disallow overwriting functions written as function declarations


&#10003; Enabled (error)

```javascript

// Bad
/*
function foo() {}
foo = bar;
*/

```
<br />



### [No inner declarations](http://eslint.org/docs/rules/no-inner-declarations)

> disallow function or variable declarations in nested blocks


&#10003; Enabled (error)

```javascript

// Bad
/*
if (test) {
	function doSomethingElse() { }
}
*/

// Good
function doSomething() { }

```
<br />



### [No invalid regexp](http://eslint.org/docs/rules/no-invalid-regexp)

> disallow invalid regular expression strings in the RegExp constructor


&#10003; Enabled (error)

```javascript

// Bad
/*
RegExp('[');
RegExp('.', 'z');
new RegExp('\\');
*/

```
<br />



### [No irregular whitespace](http://eslint.org/docs/rules/no-irregular-whitespace)

> disallow irregular whitespace outside of strings and comments


&#10003; Enabled (error)

<br />



### [No negated in lhs](http://eslint.org/docs/rules/no-negated-in-lhs)

> disallow negation of the left operand of an in expression


&#10003; Enabled (error)

```javascript

// Bad
/*
if (!key in object) {
	// operator precedence makes it equivalent to (!key) in object
	// and type conversion makes it equivalent to (key ? "false" : "true") in object
}
*/

```
<br />



### [No obj calls](http://eslint.org/docs/rules/no-obj-calls)

> disallow the use of object properties of the global object (Math and JSON) as functions


&#10003; Enabled (error)

```javascript

// Bad
/*
var math = Math();
var json = JSON();
*/

```
<br />



### [No prototype builtins](http://eslint.org/docs/rules/no-prototype-builtins)

> disallow use of Object.prototypes builtins directly


&#10003; Enabled (error)

```javascript

// Bad
/*
var hasBarProperty = foo.hasOwnProperty('bar');
var isPrototypeOfBar = foo.isPrototypeOf(bar);
var barIsEnumerable = foo.propertyIsEnumerable('bar');
*/

// Good
var hasBarProperty = {}.hasOwnProperty.call(foo, 'bar');
var isPrototypeOfBar = {}.isPrototypeOf.call(foo, bar);
var barIsEnumerable = {}.propertyIsEnumerable.call(foo, 'bar');

```
<br />



### [No regex spaces](http://eslint.org/docs/rules/no-regex-spaces)

> disallow multiple spaces in a regular expression literal


&#10003; Enabled (error)

```javascript

// Bad
/*
var re = /foo   bar/;
var re = new RegExp('foo   bar');
*/

// Good
var re = /foo {3}bar/;
var re = new RegExp('foo {3}bar');

```
<br />



### [No sparse arrays](http://eslint.org/docs/rules/no-sparse-arrays)

> disallow sparse arrays


&#10003; Enabled (error)

```javascript

// Bad
/*
var items = [, ];
var colors = ['red',, 'blue'];
*/

// Good
var items = [];
var items = new Array(23);
var colors = ['red', 'blue'];

```
<br />



### [No unexpected multiline](http://eslint.org/docs/rules/no-unexpected-multiline)

> Avoid code that looks like two expressions but is actually one


&#10006; Disabled

```javascript

// Bad
let a = function () {}
`hello`

// Good
let b = function () {};
`hello`

```
<br />



### [No unreachable](http://eslint.org/docs/rules/no-unreachable)

> disallow unreachable statements after a return, throw, continue, or break statement


&#10003; Enabled (error)

```javascript

// Bad
/*
function foo() {
	return true;
	console.log('done');
}
*/

```
<br />



### [No unsafe finally](http://eslint.org/docs/rules/no-unsafe-finally)

> disallow return/throw/break/continue inside finally blocks


&#10003; Enabled (error)

```javascript

// Bad
/*
let foo = function () {
	try {
		return 1;
	} catch (err) {
		return 2;
	} finally {
		return 3;
	}
};
*/

```
<br />



### [Use isnan](http://eslint.org/docs/rules/use-isnan)

> disallow comparisons with the value NaN


&#10003; Enabled (error)

```javascript

// Bad
/*
if (foo === NaN) {
	// ...
}
*/

// Good
if (isNaN(foo)) {
	// ...
}

```
<br />



### [Valid jsdoc](http://eslint.org/docs/rules/valid-jsdoc)

> ensure JSDoc comments are valid


&#10003; Enabled (error)

<br />



### [Valid typeof](http://eslint.org/docs/rules/valid-typeof)

> ensure that the results of typeof are compared against a valid string


&#10003; Enabled (error)

```javascript

// Bad
/*
typeof foo === 'strnig';
typeof foo === 'undefimed';
typeof bar !== 'nunber';
typeof bar !== 'fucntion';
*/

// Good
typeof foo === 'string';
typeof foo === 'undefined';
typeof bar !== 'number';
typeof bar !== 'function';

```
<br />


