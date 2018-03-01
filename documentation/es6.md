
## Es6


### [Arrow body style](http://eslint.org/docs/rules/arrow-body-style)

> enforces no braces where they can be omitted


:x: Disabled

```javascript

// Good
const a = () => 0;

// Bad
const b = () => {
	return 0;
};

```
<br />



### [Arrow parens](http://eslint.org/docs/rules/arrow-parens)

> require parens in arrow function arguments


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
a => {};
a => a;
a => { '\n'; };
a.then(foo => {});
a.then(foo => a);
*/

// Good
() => {};
(a) => {};
(a) => a;
(a) => { '\n'; };
a.then((foo) => {});


```
<br />



### [Arrow spacing](http://eslint.org/docs/rules/arrow-spacing)

> require space before/after arrow function's arrow


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
()=>{};
()=> {};
() =>{};
*/

// Good
() => {};

```
<br />



### [Constructor super](http://eslint.org/docs/rules/constructor-super)

> verify super() callings in constructors


:x: Disabled

<br />



### [Generator star spacing](http://eslint.org/docs/rules/generator-star-spacing)

> enforce the spacing around the * in generator functions


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
function *generator() {
	yield '44';
	yield '55';
}
*/

// Good
function* generator() {
	yield '44';
	yield '55';
}


```
<br />



### [No class assign](http://eslint.org/docs/rules/no-class-assign)

> disallow modifying variables of class declarations


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
class A { }
A = 0;
*/

```
<br />



### [No confusing arrow](http://eslint.org/docs/rules/no-confusing-arrow)

> disallow arrow functions where they could be confused with comparisons


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
var x = a => 1 ? 2 : 3;
var x = (a) => 1 ? 2 : 3;
*/

// Good
var x = a => { return 1 ? 2 : 3; };
var x = (a) => { return 1 ? 2 : 3; };

```
<br />



### [No const assign](http://eslint.org/docs/rules/no-const-assign)

> disallow modifying variables that are declared using const


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const a = 0;
a = 1;
*/

```
<br />



### [No dupe class members](http://eslint.org/docs/rules/no-dupe-class-members)

> disallow duplicate class members


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
class Foo {
	bar() { }
	bar() { }
}

class Foo {
	bar() { }
	get bar() { }
}
*/

```
<br />



### [No duplicate imports](http://eslint.org/docs/rules/no-duplicate-imports)

> disallow importing from the same path more than once


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';
*/

// Good
import { merge, find } from 'module';
import something from 'another-module';

```
<br />



### [No new symbol](http://eslint.org/docs/rules/no-new-symbol)

> disallow symbol constructor


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const foo = new Symbol('foo');
*/

// Good
const foo = Symbol('foo');

```
<br />



### [No restricted imports](http://eslint.org/docs/rules/no-restricted-imports)

> disallow specific imports


:x: Disabled

<br />



### [No this before super](http://eslint.org/docs/rules/no-this-before-super)

> disallow to use this/super before super() calling in constructors.


:x: Disabled

<br />



### [No useless computed key](http://eslint.org/docs/rules/no-useless-computed-key)

> disallow useless computed property keys


:white_check_mark: Enabled (error)

<br />



### [No useless constructor](http://eslint.org/docs/rules/no-useless-constructor)

> disallow unnecessary constructor


:white_check_mark: Enabled (error)

<br />



### [No useless rename](http://eslint.org/docs/rules/no-useless-rename)

> disallow renaming import, export, and destructured assignments to the same name


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
import { foo as foo } from 'bar';
export { foo as foo };
export { foo as foo } from 'bar';
let { foo: foo } = bar;
let { 'foo': foo } = bar;
*/

```
<br />



### [No var](http://eslint.org/docs/rules/no-var)

> require let or const instead of var


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
var test = 'a';
*/

```
<br />



### [Object shorthand](http://eslint.org/docs/rules/object-shorthand)

> require method and property shorthand syntax for object literals


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const foo = {
	w: function () {},
	x: function* () {},
	[y]: function () {},
	z: z
};
*/

```
<br />



### [Prefer arrow callback](http://eslint.org/docs/rules/prefer-arrow-callback)

> suggest using arrow functions as callbacks


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
foo(function (a) { return a; });
foo(function () { return this.a; }.bind(this));
*/

// Good
foo((a) => { return a; });
foo(() => { return this.a; });

```
<br />



### [Prefer const](http://eslint.org/docs/rules/prefer-const)

> suggest using of const declaration for variables that are never modified after declared


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
let a;
a = 0;

// `i` is redefined (not reassigned) on each loop step.
for (let i in [1, 2, 3]) {

}
*/

```
<br />



### [Prefer reflect](http://eslint.org/docs/rules/prefer-reflect)

> suggest using Reflect methods where applicable


:x: Disabled

<br />



### [Prefer rest params](http://eslint.org/docs/rules/prefer-rest-params)

> use rest parameters instead of arguments


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
function foo() {
	console.log(arguments);
}

function foo(action) {
	const args = [].slice.call(arguments, 1);
	action.apply(null, args);
}
*/

// Good
function foo(...args) {
	console.log(args);
}

function foo(action, ...args) {
	action(...args);
}

```
<br />



### [Prefer spread](http://eslint.org/docs/rules/prefer-spread)

> suggest using the spread operator instead of .apply()


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
foo.apply(null, args);
*/

// Good
foo(...args);

```
<br />



### [Prefer template](http://eslint.org/docs/rules/prefer-template)

> suggest using template literals instead of string concatenation


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
const str = 'Hello, ' + name + '!';
*/

// Good
const str = `Hello, ${name}!`;

```
<br />



### [Require jsdoc](http://eslint.org/docs/rules/require-jsdoc)

> do not require jsdoc


:white_check_mark: Enabled (error)

```javascript

// BAD
/*
class Test {

	constructor() {
		this.test = '12';
	}
}
*/

// GOOD
/**
 * @constructor Test
 */
class Test {

	/**
	 * @returns {void}
	 */
	constructor() {
		this.test = '12';
	}
}

// OKAY
const testArrow = () => 'testArrow';


```
<br />



### [Require yield](http://eslint.org/docs/rules/require-yield)

> disallow generator functions that do not have yield


:x: Disabled

<br />



### [Sort imports](http://eslint.org/docs/rules/sort-imports)

> import sorting


:x: Disabled

<br />



### [Template curly spacing](http://eslint.org/docs/rules/template-curly-spacing)

> enforce usage of spacing in template strings


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
`hello, ${ people.name}!`;
`hello, ${people.name }!`;
*/

// Good
`hello, ${people.name}!`;

```
<br />



### [Yield star spacing](http://eslint.org/docs/rules/yield-star-spacing)

> enforce spacing around the * in yield* expressions


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
function* generator() {
	yield *other();
}
*/

```
<br />


