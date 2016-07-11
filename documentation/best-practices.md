
## Best practices


### [Accessor pairs](http://eslint.org/docs/rules/accessor-pairs)

> enforces getter/setter pairs in objects


&#10006; Disabled

```javascript

var example;

// Bad
example = {
	set a(value) {
		this.val = value;
	}
};


// Good
example = {
	set a(value) {
		this.val = value;
	},
	get a() {
		return this.val;
	}
};

```
<br />



### [Array callback return](http://eslint.org/docs/rules/array-callback-return)

> enforces return statements in callbacks of array's methods


&#10003; Enabled (error)

```javascript


/*
// Bad
var bar = [1, 2].filter(function (x) {
	if (x) {
		return;
	}

	document.window.append('', null);
});
*/

// Good
var bar = [1, 2].filter(function (x) {
	if (x) {
		return false;
	}

	document.window.append('', null);
	return true;
});


```
<br />



### [Block scoped var](http://eslint.org/docs/rules/block-scoped-var)

> treat var statements as if they were block scoped


&#10003; Enabled (error)

```javascript

// Bad
/*
example = {
	doIf: function () {
		if (1 === 2) {
			var build = true;
		}

		document.window.append(build.toString(), null);
	}
};
*/

// Good
example = {
	doIf: function () {
		var build = true;

		if (1 === 2) {
			build = false;
		}

		document.window.append(build.toString(), null);
	}
};


```
<br />



### [Complexity](http://eslint.org/docs/rules/complexity)

> specify the maximum cyclomatic complexity allowed in a program


&#10003; Enabled (error)

```javascript


// Bad
/*
function a(x) {
	if (1 === 2) {
		return x; // 1st path
	} else if (2 === 3) {
		return x + 1; // 2nd path
	} else if (2 === 3) {
		return x + 2; // 3nd path
	} else if (2 === 3) {
		return x + 3; // 4nd path
	} else if (2 === 3) {
		return x + 4; // 5nd path
	} else if (2 === 3) {
		return x + 5; // 6nd path
	} else if (2 === 3) {
		return x + 6; // 7nd path
	} else if (2 === 3) {
		return x + 7; // 8nd path
	} else if (2 === 3) {
		return x + 8; // 9nd path
	} else if (2 === 3) {
		return x + 9; // 10nd path
	} else if (2 === 3) {
		return x + 10; // 11nd path
	} else {
		return 99;
	}
}
*/

// Good
function b(x) {
	switch (x) {
		case x === 0:
			return x + 1;
		case x === 1:
			return x + 2;
		case x === 2:
			return x + 3;
		case x === 3:
			return x + 4;
		default:
			return 99;
	}
}


```
<br />



### [Consistent return](http://eslint.org/docs/rules/consistent-return)

> require return statements to either always or never specify values


&#10006; Disabled

```javascript

// Bad
function doSomething(condition) {
	if (condition) {
		return true;
	} else {
		return;
	}
}

// Good
function doSomething(condition) {
	if (condition) {
		return true;
	} else {
		return false;
	}
}

```
<br />



### [Curly](http://eslint.org/docs/rules/curly)

> specify curly brace conventions for all control statements


&#10003; Enabled (error)

```javascript

// Bad
/*
if (foo) foo++;
*/

// Good
if (foo) {
	foo++;
}

```
<br />



### [Default case](http://eslint.org/docs/rules/default-case)

> require default case in switch statements


&#10003; Enabled (error)

```javascript

// Bad
/*
switch (foo) {
	case 1:
		doSomething();
		break;

	case 2:
		doSomething();
		break;
}
*/

// Good
switch (foo) {
	case 1:
		doSomething();
		break;

	case 2:
		doSomething();
		break;

	default:
	// do nothing
}

```
<br />



### [Dot location](http://eslint.org/docs/rules/dot-location)

> enforces consistent newlines before or after dots


&#10006; Disabled

```javascript

// Bad
var b = universe
	.galaxy;

// Good
var a = universe.
	galaxy;

```
<br />



### [Dot notation](http://eslint.org/docs/rules/dot-notation)

> encourages use of dot notation whenever possible


&#10003; Enabled (error)

```javascript

// Bad
/*
var x = foo['bar'];
*/

// Good
var x = foo.bar;
var x = foo[bar];

```
<br />



### [Eqeqeq](http://eslint.org/docs/rules/eqeqeq)

> require the use of === and !==


&#10003; Enabled (error)

```javascript

// Bad
/*
if (x == 42) {

}
*/
// Good
if (x === 42) {

}

```
<br />



### [Guard for in](http://eslint.org/docs/rules/guard-for-in)

> make sure for-in loops have an if statement


&#10003; Enabled (error)

```javascript

// Bad
/*
for (key in foo) {
	doSomething(key);
}
*/
// Good
for (key in foo) {
	if ({}.hasOwnProperty.call(foo, key)) {
		doSomething(key);
	}
}

```
<br />



### [No alert](http://eslint.org/docs/rules/no-alert)

> disallow the use of alert, confirm, and prompt


&#10003; Enabled (error)

```javascript

// Bad
/*
alert('hallo');
*/

```
<br />



### [No caller](http://eslint.org/docs/rules/no-caller)

> disallow use of arguments.caller or arguments.callee


&#10003; Enabled (error)

```javascript

// Bad
/*
function foo(n) {
	if (n <= 0) {
		return;
	}

	arguments.callee(n - 1);
}
*/

// Good
function foo(n) {
	if (n <= 0) {
		return;
	}

	foo(n - 1);
}

```
<br />



### [No case declarations](http://eslint.org/docs/rules/no-case-declarations)

> disallow lexical declarations in case/default clauses


&#10003; Enabled (error)

```javascript

// Bad
/*
switch (foo) {
	case 1:
		let x = 1;
		break;
	case 2:
		const y = 2;
		break;
	case 3:
		function f() {}
		break;
	default:
		class C {}
}
*/
// Good
switch (foo) {
	case 1: {
		let x = 1;
		break;
	}
	case 2: {
		const y = 2;
		break;
	}
	case 3: {
		function f() {}
		break;
	}
	default: {
		class C {}
	}
}

```
<br />



### [No div regex](http://eslint.org/docs/rules/no-div-regex)

> disallow division operators explicitly at beginning of regular expression


&#10006; Disabled

```javascript

// Bad
function bar() {
	return /=foo/;
}
// Good
function bar2() {
	return /\=foo/;
}

```
<br />



### [No else return](http://eslint.org/docs/rules/no-else-return)

> disallow else after a return in an if


&#10003; Enabled (error)

```javascript

// Bad
/*
function foo() {
	if (x) {
		return y;
	} else {
		return z;
	}
}
*/

// Good
function foo() {
	if (x) {
		return y;
	}

	return z;
}

```
<br />



### [No empty function](http://eslint.org/docs/rules/no-empty-function)

> disallow empty functions, except for standalone funcs/arrows


&#10006; Disabled

```javascript

// Bad
function foo() {
	// do nothing.
}

// Good
function foo2() {
	document.window.append('', null);
}

```
<br />



### [No empty pattern](http://eslint.org/docs/rules/no-empty-pattern)

> disallow empty destructuring patterns


&#10003; Enabled (error)

```javascript

// doesn't create any variables
/*
var { a: {} } = foo;
*/

// creates variable b
var { a: { b } } = foo;

// creates variable a
var { a = {} } = foo;

```
<br />



### [No eq null](http://eslint.org/docs/rules/no-eq-null)

> disallow comparisons to null without a type-checking operator


&#10003; Enabled (error)

```javascript

// Bad
/*
if (foo == null) {
	bar();
}
*/
// Good
if (foo === null) {
	bar();
}

```
<br />



### [No eval](http://eslint.org/docs/rules/no-eval)

> disallow use of eval()


&#10003; Enabled (error)

```javascript

// Bad
/*
var obj = { x: 'foo' },
	key = 'x',
	value = eval('obj.' + key);
*/

```
<br />



### [No extend native](http://eslint.org/docs/rules/no-extend-native)

> disallow adding to native types


&#10003; Enabled (error)

```javascript

// Bad
/*
Object.prototype.extra = 55;
*/

```
<br />



### [No extra bind](http://eslint.org/docs/rules/no-extra-bind)

> disallow unnecessary function binding


&#10003; Enabled (error)

```javascript

// Bad
/*
var boundGetName = (function getName() {
	return 'ESLint';
}).bind({ name: 'ESLint' });
console.log(boundGetName());
// "ESLint"
*/

// Good
var boundGetName2 = (function getName() {
	return this.name;
}).bind({ name: 'ESLint' });
console.log(boundGetName2());
// "ESLint"

```
<br />



### [No extra label](http://eslint.org/docs/rules/no-extra-label)

> disallow Unnecessary Labels


&#10003; Enabled (error)

```javascript

// Bad
/*
A: switch (a) {
	case 0:
		break A;
}
*/

// Good
B: switch (a) {
	case 0:
		break;
}

```
<br />



### [No fallthrough](http://eslint.org/docs/rules/no-fallthrough)

> disallow fallthrough of case statements


&#10003; Enabled (error)

```javascript

// Bad
/*
switch (foo) {
	case 1:
		doSomething();

	case 2:
		doSomethingElse();
}
*/

// Good
switch (foo) {
	case 1:
		doSomething();
		break;
	case 2:
		doSomethingElse();
}

```
<br />



### [No floating decimal](http://eslint.org/docs/rules/no-floating-decimal)

> disallow the use of leading or trailing decimal points in numeric literals


&#10003; Enabled (error)

```javascript

// Bad
/*
var num1 = .5;
var num2 = 2.;
var num3 = -.7;
*/

// Good
var num1 = 0.5;
var num2 = 2.0;
var num3 = -0.7;

```
<br />



### [No implicit coercion](http://eslint.org/docs/rules/no-implicit-coercion)

> disallow the type conversions with shorter notations


&#10003; Enabled (error)

```javascript

// Bad
/*
var b = !!foo;
var b = ~foo.indexOf('.');
var n = +foo;
var n = 1 * foo;
var s = '' + foo;
foo += '';
*/

// Good
var b = Boolean(foo);
var b = foo.indexOf('.') !== -1;
var n = Number(foo);
var n = Number(foo);
var s = String(foo);
foo = String(foo);

```
<br />



### [No implicit globals](http://eslint.org/docs/rules/no-implicit-globals)

> disallow var and named functions in global scope


&#10006; Disabled

```javascript

// Bad
var foo = 1;
function bar() {}

// Good
window.foo = 1;
window.bar = function () {};

// Good
(function () {
	var foo = 1;
	function bar() {}
})();

```
<br />



### [No implied eval](http://eslint.org/docs/rules/no-implied-eval)

> disallow use of eval()-like methods


&#10003; Enabled (error)

```javascript

// Bad
/*
setTimeout('doSomething();', 100);
*/

// Good
setTimeout(doSomething, 100);

```
<br />



### [No invalid this](http://eslint.org/docs/rules/no-invalid-this)

> disallow this keywords outside of classes or class-like objects


&#10006; Disabled

```javascript

// Bad
foo(function () {
	this.a = 0;
});

```
<br />



### [No iterator](http://eslint.org/docs/rules/no-iterator)

> disallow usage of __iterator__ property


&#10003; Enabled (error)

```javascript

// Bad
/*
Foo.prototype.__iterator__ = function () {
	return new FooIterator(this);
};
*/

```
<br />



### [No labels](http://eslint.org/docs/rules/no-labels)

> disallow use of labels for anything other then loops and switches


&#10003; Enabled (error)

```javascript

// Bad
/*
label:
	switch (a) {
		case 0:
			break label;
	}
*/

```
<br />



### [No lone blocks](http://eslint.org/docs/rules/no-lone-blocks)

> disallow unnecessary nested blocks


&#10003; Enabled (error)

```javascript

// Bad
/*
{
	foo = bar();
}
*/

```
<br />



### [No loop func](http://eslint.org/docs/rules/no-loop-func)

> disallow creation of functions within loops


&#10003; Enabled (error)

```javascript

// Bad
/*
for (var i = 0; i < 10; i++) {
	funcs[i] = function () {
		return i;
	};
}
*/

```
<br />



### [No magic numbers](http://eslint.org/docs/rules/no-magic-numbers)

> disallow magic numbers


&#10006; Disabled

```javascript

// Bad
var now = Date.now(),
	inOneHour = now + (60 * 60 * 1000);

```
<br />



### [No multi spaces](http://eslint.org/docs/rules/no-multi-spaces)

> disallow use of multiple spaces


&#10003; Enabled (error)

```javascript

// Bad
/*
if (foo  === 'bar') {}
*/

```
<br />



### [No multi str](http://eslint.org/docs/rules/no-multi-str)

> disallow use of multiline strings


&#10003; Enabled (error)

```javascript

// Bad
/*
var x = 'Line 1 \
         Line 2';
*/

```
<br />



### [No native reassign](http://eslint.org/docs/rules/no-native-reassign)

> disallow reassignments of native objects


&#10003; Enabled (error)

```javascript

// Bad
/*
String = new Object();
*/

```
<br />



### [No new func](http://eslint.org/docs/rules/no-new-func)

> disallow use of new operator for Function object


&#10003; Enabled (error)

```javascript

// Bad
/*
var x = new Function('a', 'b', 'return a + b');
*/

```
<br />



### [No new wrappers](http://eslint.org/docs/rules/no-new-wrappers)

> disallows creating new instances of String, Number, and Boolean


&#10003; Enabled (error)

```javascript

// Bad
/*
var stringObject = new String('Hello world');
var numberObject = new Number(33);
var booleanObject = new Boolean(false);
*/

// Good
var stringObject = String('Hello world');
var numberObject = Number(33);
var booleanObject = Boolean(false);

```
<br />



### [No new](http://eslint.org/docs/rules/no-new)

> disallow use of new operator when not part of the assignment or comparison


&#10003; Enabled (error)

```javascript

// Bad
/*
new Person();
*/

// Good
var person = new Person();


```
<br />



### [No octal escape](http://eslint.org/docs/rules/no-octal-escape)

> disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';


&#10003; Enabled (error)

```javascript

// Bad
/*
var foo = 'Copyright \251';
*/

```
<br />



### [No octal](http://eslint.org/docs/rules/no-octal)

> disallow use of (old style) octal literals


&#10003; Enabled (error)

```javascript

// Bad
/*
var num = 07;
*/

```
<br />



### [No param reassign](http://eslint.org/docs/rules/no-param-reassign)

> disallow reassignment of function parameters + disallow parameter object manipulation


&#10006; Disabled

```javascript

// Bad
function foo(bar) {
	bar = 13;
}

```
<br />



### [No proto](http://eslint.org/docs/rules/no-proto)

> disallow usage of __proto__ property


&#10003; Enabled (error)

```javascript

// Bad
/*
var a = obj.__proto__;
*/

```
<br />



### [No redeclare](http://eslint.org/docs/rules/no-redeclare)

> disallow declaring the same variable more then once


&#10003; Enabled (error)

```javascript

// Bad
/*
var a = 3;
var a = 10;
*/

```
<br />



### [No return assign](http://eslint.org/docs/rules/no-return-assign)

> disallow use of assignment in return statement


&#10003; Enabled (error)

```javascript

// Bad
/*
function doSomething() {
	return foo = bar + 2;
}
*/

```
<br />



### [No script url](http://eslint.org/docs/rules/no-script-url)

> disallow use of `javascript:` urls.


&#10003; Enabled (error)

```javascript

// Bad
/*
location.href = 'javascript:void(0)';
*/

```
<br />



### [No self assign](http://eslint.org/docs/rules/no-self-assign)

> disallow self assignment


&#10003; Enabled (error)

```javascript

// Bad
/*
foo = foo;
*/

```
<br />



### [No self compare](http://eslint.org/docs/rules/no-self-compare)

> disallow comparisons where both sides are exactly the same


&#10003; Enabled (error)

```javascript

// Bad
/*
var x = 10;
if (x === x) {
	x = 20;
}
*/

```
<br />



### [No sequences](http://eslint.org/docs/rules/no-sequences)

> disallow use of comma operator


&#10003; Enabled (error)

```javascript

// Bad
/*
var a = (3, 5); // a = 5
a = b += 5, a + b;
*/

// Good
var a = (3, 5);
// a = 5
a = (b += 5, a + b);

```
<br />



### [No throw literal](http://eslint.org/docs/rules/no-throw-literal)

> restrict what can be thrown as an exception


&#10003; Enabled (error)

```javascript

// Bad
/*
throw 'error';
*/

// Good
throw new Error('error');

```
<br />



### [No unmodified loop condition](http://eslint.org/docs/rules/no-unmodified-loop-condition)

> disallow unmodified conditions of loops


&#10006; Disabled

```javascript

// Bad
var node;
while (node) {
	doSomething(node);
}
node = other;

// Good
var node = 1;
while (node) {
	doSomething(node);
	node = 2;
}

```
<br />



### [No unused expressions](http://eslint.org/docs/rules/no-unused-expressions)

> disallow usage of expressions in statement position


&#10003; Enabled (error)

```javascript

// Bad
/*
a && b();
*/

```
<br />



### [No unused labels](http://eslint.org/docs/rules/no-unused-labels)

> disallow unused labels


&#10003; Enabled (error)

```javascript

// Bad
/*
OUTER_LOOP:
	for (const student of students) {
		if (checkScores(student.scores)) {
			continue;
		}
		doSomething(student);
	}
*/

// Good
OUTER_LOOP:
	for (const student of students) {
		if (!checkScores(student.scores)) {
			break OUTER_LOOP;
		}
		doSomething(student);
	}

```
<br />



### [No useless call](http://eslint.org/docs/rules/no-useless-call)

> disallow unnecessary .call() and .apply()


&#10006; Disabled

```javascript

// Bad
foo.call(undefined, 1, 2, 3);

// Good
foo(1, 2, 3);

```
<br />



### [No useless concat](http://eslint.org/docs/rules/no-useless-concat)

> disallow useless string concatenation


&#10003; Enabled (error)

```javascript

// Bad
/*
var foo = 'a' + 'b';
*/

// Good
var foo = 'ab';

```
<br />



### [No useless escape](http://eslint.org/docs/rules/no-useless-escape)

> disallow unnecessary string escaping


&#10003; Enabled (error)

```javascript

// Bad
/*
let foo = 'hol\a';
let bar = /\:/;
*/

// Good
let foo = 'hola';
let bar = /:/;

```
<br />



### [No void](http://eslint.org/docs/rules/no-void)

> disallow use of void operator


&#10003; Enabled (error)

```javascript

// Bad
/*
function test() {
	return void 0;
}
*/
// Good
function test() {
	return;
}

```
<br />



### [No warning comments](http://eslint.org/docs/rules/no-warning-comments)

> disallow usage of configurable warning terms in comments: e.g.


&#10006; Disabled

```javascript

// TODO: do something
// FIXME: this is not a good idea

```
<br />



### [No with](http://eslint.org/docs/rules/no-with)

> disallow use of the with statement


&#10003; Enabled (error)

```javascript

// Bad
/*
with (point) {
	r = Math.sqrt(x * x + y * y); // is r a member of point?
}
*/

// Good
const r = ({ x, y }) => Math.sqrt(x * x + y * y);

```
<br />



### [Radix](http://eslint.org/docs/rules/radix)

> require use of the second argument for parseInt()


&#10003; Enabled (error)

```javascript

// Bad
/*
var num = parseInt('71');
*/

// Good
var num = parseInt('71', 10);


```
<br />



### [Vars on top](http://eslint.org/docs/rules/vars-on-top)

> requires to declare all vars on top of their containing scope


&#10006; Disabled

```javascript


// Bad
/*
function test() {
	var a = 1;
	var b = 2;

	if (a === 0) {
		// do something
	}

	var c = 3;
}
*/

// Good
function test() {
	var a = 1;
	var b = 2;
	var c;

	if (a === 0) {
		// do something
	}

	c = 3;
}



```
<br />



### [Wrap iife](http://eslint.org/docs/rules/wrap-iife)

> require immediate function invocation to be wrapped in parentheses


&#10003; Enabled (error)

```javascript

// Bad
/*
var x = function () { return { y: 1 }; }();
*/

// Good
var x = function () { return { y: 1 }; };

```
<br />



### [Yoda](http://eslint.org/docs/rules/yoda)

> require or disallow Yoda conditions


&#10003; Enabled (error)

```javascript

// Bad
/*
if ('red' === color) {
	// ...
}
*/

// Good
if (color === 'red') {
	// ...
}

```
<br />


