
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



### [Array callback-return](http://eslint.org/docs/rules/array-callback-return)

> enforces return statements in callbacks of array's methods


&#10003; Enabled (error)

```javascript



```
<br />



### [Block scoped-var](http://eslint.org/docs/rules/block-scoped-var)

> treat var statements as if they were block scoped


&#10003; Enabled (error)

```javascript



```
<br />



### [Complexity](http://eslint.org/docs/rules/complexity)

> specify the maximum cyclomatic complexity allowed in a program


&#10006; Disabled

```javascript



```
<br />



### [Consistent return](http://eslint.org/docs/rules/consistent-return)

> require return statements to either always or never specify values


&#10003; Enabled (error)

```javascript



```
<br />



### [Curly](http://eslint.org/docs/rules/curly)

> specify curly brace conventions for all control statements


&#10003; Enabled (error)

```javascript



```
<br />



### [Default case](http://eslint.org/docs/rules/default-case)

> require default case in switch statements


&#10003; Enabled (error)

```javascript



```
<br />



### [Dot location](http://eslint.org/docs/rules/dot-location)

> enforces consistent newlines before or after dots


&#10006; Disabled

```javascript



```
<br />



### [Dot notation](http://eslint.org/docs/rules/dot-notation)

> encourages use of dot notation whenever possible


&#10003; Enabled (error)

```javascript



```
<br />



### [Eqeqeq](http://eslint.org/docs/rules/eqeqeq)

> require the use of === and !==


&#10003; Enabled (error)

```javascript



```
<br />



### [Guard for-in](http://eslint.org/docs/rules/guard-for-in)

> make sure for-in loops have an if statement


&#10003; Enabled (error)

```javascript



```
<br />



### [No alert](http://eslint.org/docs/rules/no-alert)

> disallow the use of alert, confirm, and prompt


&#10003; Enabled (warning)

```javascript



```
<br />



### [No caller](http://eslint.org/docs/rules/no-caller)

> disallow use of arguments.caller or arguments.callee


&#10003; Enabled (error)

```javascript



```
<br />



### [No case-declarations](http://eslint.org/docs/rules/no-case-declarations)

> disallow lexical declarations in case/default clauses


&#10003; Enabled (error)

```javascript



```
<br />



### [No div-regex](http://eslint.org/docs/rules/no-div-regex)

> disallow division operators explicitly at beginning of regular expression


&#10006; Disabled

```javascript



```
<br />



### [No else-return](http://eslint.org/docs/rules/no-else-return)

> disallow else after a return in an if


&#10003; Enabled (error)

```javascript



```
<br />



### [No empty-function](http://eslint.org/docs/rules/no-empty-function)

> disallow empty functions, except for standalone funcs/arrows


&#10006; Disabled

```javascript



```
<br />



### [No empty-pattern](http://eslint.org/docs/rules/no-empty-pattern)

> disallow empty destructuring patterns


&#10003; Enabled (error)

```javascript



```
<br />



### [No eq-null](http://eslint.org/docs/rules/no-eq-null)

> disallow comparisons to null without a type-checking operator


&#10006; Disabled

```javascript



```
<br />



### [No eval](http://eslint.org/docs/rules/no-eval)

> disallow use of eval()


&#10003; Enabled (error)

```javascript



```
<br />



### [No extend-native](http://eslint.org/docs/rules/no-extend-native)

> disallow adding to native types


&#10003; Enabled (error)

```javascript



```
<br />



### [No extra-bind](http://eslint.org/docs/rules/no-extra-bind)

> disallow unnecessary function binding


&#10003; Enabled (error)

```javascript



```
<br />



### [No extra-label](http://eslint.org/docs/rules/no-extra-label)

> disallow Unnecessary Labels


&#10003; Enabled (error)

```javascript



```
<br />



### [No fallthrough](http://eslint.org/docs/rules/no-fallthrough)

> disallow fallthrough of case statements


&#10003; Enabled (error)

```javascript



```
<br />



### [No floating-decimal](http://eslint.org/docs/rules/no-floating-decimal)

> disallow the use of leading or trailing decimal points in numeric literals


&#10003; Enabled (error)

```javascript



```
<br />



### [No implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion)

> disallow the type conversions with shorter notations


&#10006; Disabled

```javascript



```
<br />



### [No implicit-globals](http://eslint.org/docs/rules/no-implicit-globals)

> disallow var and named functions in global scope


&#10006; Disabled

```javascript



```
<br />



### [No implied-eval](http://eslint.org/docs/rules/no-implied-eval)

> disallow use of eval()-like methods


&#10003; Enabled (error)

```javascript



```
<br />



### [No invalid-this](http://eslint.org/docs/rules/no-invalid-this)

> disallow this keywords outside of classes or class-like objects


&#10006; Disabled

```javascript



```
<br />



### [No iterator](http://eslint.org/docs/rules/no-iterator)

> disallow usage of __iterator__ property


&#10003; Enabled (error)

```javascript



```
<br />



### [No labels](http://eslint.org/docs/rules/no-labels)

> disallow use of labels for anything other then loops and switches


&#10003; Enabled (error)

```javascript



```
<br />



### [No lone-blocks](http://eslint.org/docs/rules/no-lone-blocks)

> disallow unnecessary nested blocks


&#10003; Enabled (error)

```javascript



```
<br />



### [No loop-func](http://eslint.org/docs/rules/no-loop-func)

> disallow creation of functions within loops


&#10003; Enabled (error)

```javascript



```
<br />



### [No magic-numbers](http://eslint.org/docs/rules/no-magic-numbers)

> disallow magic numbers


&#10006; Disabled

```javascript



```
<br />



### [No multi-spaces](http://eslint.org/docs/rules/no-multi-spaces)

> disallow use of multiple spaces


&#10003; Enabled (error)

```javascript



```
<br />



### [No multi-str](http://eslint.org/docs/rules/no-multi-str)

> disallow use of multiline strings


&#10003; Enabled (error)

```javascript



```
<br />



### [No native-reassign](http://eslint.org/docs/rules/no-native-reassign)

> disallow reassignments of native objects


&#10003; Enabled (error)

```javascript



```
<br />



### [No new-func](http://eslint.org/docs/rules/no-new-func)

> disallow use of new operator for Function object


&#10003; Enabled (error)

```javascript



```
<br />



### [No new-wrappers](http://eslint.org/docs/rules/no-new-wrappers)

> disallows creating new instances of String, Number, and Boolean


&#10003; Enabled (error)

```javascript



```
<br />



### [No new](http://eslint.org/docs/rules/no-new)

> disallow use of new operator when not part of the assignment or comparison


&#10003; Enabled (error)

```javascript



```
<br />



### [No octal-escape](http://eslint.org/docs/rules/no-octal-escape)

> disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';


&#10003; Enabled (error)

```javascript



```
<br />



### [No octal](http://eslint.org/docs/rules/no-octal)

> disallow use of (old style) octal literals


&#10003; Enabled (error)

```javascript



```
<br />



### [No param-reassign](http://eslint.org/docs/rules/no-param-reassign)

> disallow reassignment of function parameters + disallow parameter object manipulation


&#10003; Enabled (error)

```javascript



```
<br />



### [No proto](http://eslint.org/docs/rules/no-proto)

> disallow usage of __proto__ property


&#10003; Enabled (error)

```javascript



```
<br />



### [No redeclare](http://eslint.org/docs/rules/no-redeclare)

> disallow declaring the same variable more then once


&#10003; Enabled (error)

```javascript



```
<br />



### [No return-assign](http://eslint.org/docs/rules/no-return-assign)

> disallow use of assignment in return statement


&#10003; Enabled (error)

```javascript



```
<br />



### [No script-url](http://eslint.org/docs/rules/no-script-url)

> disallow use of `javascript:` urls.


&#10003; Enabled (error)

```javascript



```
<br />



### [No self-assign](http://eslint.org/docs/rules/no-self-assign)

> disallow self assignment


&#10003; Enabled (error)

```javascript



```
<br />



### [No self-compare](http://eslint.org/docs/rules/no-self-compare)

> disallow comparisons where both sides are exactly the same


&#10003; Enabled (error)

```javascript



```
<br />



### [No sequences](http://eslint.org/docs/rules/no-sequences)

> disallow use of comma operator


&#10003; Enabled (error)

```javascript



```
<br />



### [No throw-literal](http://eslint.org/docs/rules/no-throw-literal)

> restrict what can be thrown as an exception


&#10003; Enabled (error)

```javascript



```
<br />



### [No unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition)

> disallow unmodified conditions of loops


&#10006; Disabled

```javascript



```
<br />



### [No unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)

> disallow usage of expressions in statement position


&#10003; Enabled (error)

```javascript



```
<br />



### [No unused-labels](http://eslint.org/docs/rules/no-unused-labels)

> disallow unused labels


&#10003; Enabled (error)

```javascript



```
<br />



### [No useless-call](http://eslint.org/docs/rules/no-useless-call)

> disallow unnecessary .call() and .apply()


&#10006; Disabled

```javascript



```
<br />



### [No useless-concat](http://eslint.org/docs/rules/no-useless-concat)

> disallow useless string concatenation


&#10003; Enabled (error)

```javascript



```
<br />



### [No useless-escape](http://eslint.org/docs/rules/no-useless-escape)

> disallow unnecessary string escaping


&#10003; Enabled (error)

```javascript



```
<br />



### [No void](http://eslint.org/docs/rules/no-void)

> disallow use of void operator


&#10006; Disabled

```javascript



```
<br />



### [No warning-comments](http://eslint.org/docs/rules/no-warning-comments)

> disallow usage of configurable warning terms in comments: e.g.


&#10006; Disabled

```javascript



```
<br />



### [No with](http://eslint.org/docs/rules/no-with)

> disallow use of the with statement


&#10003; Enabled (error)

```javascript



```
<br />



### [Radix](http://eslint.org/docs/rules/radix)

> require use of the second argument for parseInt()


&#10003; Enabled (error)

```javascript



```
<br />



### [Vars on-top](http://eslint.org/docs/rules/vars-on-top)

> requires to declare all vars on top of their containing scope


&#10003; Enabled (error)

```javascript



```
<br />



### [Wrap iife](http://eslint.org/docs/rules/wrap-iife)

> require immediate function invocation to be wrapped in parentheses


&#10003; Enabled (error)

```javascript



```
<br />



### [Yoda](http://eslint.org/docs/rules/yoda)

> require or disallow Yoda conditions


&#10003; Enabled (error)

```javascript



```
<br />

