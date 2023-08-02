
## React a11y


### [Alt tag](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-tag.md)

> Require <img> to have a non-empty `alt` prop, or role="presentation"


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
function Foo(src) {
	return <img src={src} />;
}
*/

// Good
function Foo({ alt, src }) {
	return <img alt={alt} src={src} />;
}

```
<br />



### [Aria props](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md)

> Enforce all aria-* props are valid.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<div id="address_label">Enter your address</div>;
<input aria-labeledby="address_label" />;
*/

// Good
<div id="address_label">Enter your address</div>;
<input aria-labelledby="address_label" />;

```
<br />



### [Aria proptypes](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md)

> Enforce ARIA state and property values are valid.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<span aria-hidden="yes">foo</span>;
*/

// Good
<span aria-hidden="true">foo</span>;

```
<br />



### [Aria role](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md)

> Require ARIA roles to be valid and non-abstract


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<div role="datepicker"></div>;
<div role="range"></div>;
<div role=""></div>;
*/

// Good
<div role="button"></div>;
<div role={role}></div>;
<div></div>;

```
<br />



### [Aria unsupported elements](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md)

> Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<meta aria-hidden="false" charSet="UTF-8" />;
*/

// Good
<meta charSet="UTF-8" />;

```
<br />



### [Href no hash](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/href-no-hash.md)

> disallow href "#"


:x: Disabled

```javascript

// Bad
<a href="#" />;
<a href={"#"} />;
<a href={`#`} />;

// Good
<a href="https://github.com" />;
<a href="#section" />;
<a href="foo" />;
<a href={undefined} />;

```
<br />



### [Img redundant alt](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md)

> Prevent img alt text from containing redundant words like "image", "picture", or "photo"


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<img alt="Photo of foo being weird." src="foo" />;
<img alt="Image of me at a bar!" src="bar" />;
<img alt="Picture of baz fixing a bug." src="baz" />;
*/

// Good
<img alt="Foo eating a sandwich." src="foo" />;
<img
	aria-hidden
	alt="Picture of me taking a photo of an image"
	src="bar"
/>;
<img alt={`Baz taking a ${photo}`} src="baz" />;

```
<br />



### [Label has for](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-for.md)

> require that JSX labels use "htmlFor"


:x: Disabled

```javascript

// Bad
/*
function Foo(props) {
	return <label {...props} />;
}
*/

// Good
function Foo({ htmlFor, props }) {
	return <label htmlFor={htmlFor} {...props} />;
}

```
<br />



### [Mouse events have key events](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md)

> require that mouseover/out come with focus/blur, for keyboard-only users


:x: Disabled

```javascript

// Bad
<div onMouseOver={() => {}} />;
<div onMouseOut={() => {}} />;
<div onMouseOver={() => {}} />;
<div onMouseOut={() => {}} />;

// Good
<div onMouseOver={() => {}} onFocus={() => {}} />;
<div onMouseOut={() => {}} onBlur={() => {}} />;
<div onMouseOver={() => {}} onFocus={() => {}} />;
<div onMouseOut={() => {}} onBlur={() => {}} />;

```
<br />



### [No access key](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md)

> Prevent use of `accessKey`


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<div accessKey="h" />;
*/

// Good
<div />;

```
<br />



### [No onchange](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-onchange.md)

> require onBlur instead of onChange


:x: Disabled

```javascript

// Bad
<select onChange={updateModel} />;

// Good
(
	<select onBlur={updateModel}>
		<option />
	</select>
);

(
	<select>
		<option onBlur={handleOnBlur} onChange={handleOnChange} />
	</select>
);

```
<br />



### [Onclick has focus](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/onclick-has-focus.md)

> Enforce that elements with onClick handlers must be focusable.


:x: Disabled

```javascript

// Bad
<span onClick="submitForm();">Submit</span>;
<a onClick="showNextPage();">Next page</a>;

// Good
<div aria-hidden onClick={() => {}} />;
<span onClick="doSomething();" tabIndex="0">Click me!</span>;
<span onClick="doSomething();" tabIndex="-1">Click me too!</span>;
<button onClick="doSomething();">Click the button :)</button>;

```
<br />



### [Onclick has role](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/onclick-has-role.md)

> require things with onClick to have an aria role


:x: Disabled

```javascript

// Bad
<div onClick={() => {}} />;
<div onClick={() => {}} {...props} />;
<div onClick={() => {}} aria-hidden={false} />;
<a onClick={() => {}} />;

// Good
<div onClick={() => {}} role="button" />;
// Interactive element does not require role.
<input type="text" onClick={() => {}} />;
// tabIndex makes this interactive.
<a tabIndex="0" onClick={() => {}} />;
// button is interactive.
<button onClick={() => {}} className="foo" />;
// This is hidden from screenreader.
<div
	onClick={() => {}}
	role="button"
	aria-hidden
/>;
// This is a higher-level DOM component
<Input onClick={() => {}} type="hidden" />;

```
<br />



### [Role has required aria props](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md)

> Enforce that elements with ARIA roles must have all required attributes for that role.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
<span
	role="checkbox"
	aria-labelledby="foo"
	tabIndex="0"
>
</span>;
*/

// Good
<span
	role="checkbox"
	aria-checked="false"
	aria-labelledby="foo"
	tabIndex="0"
>
</span>;

```
<br />



### [Role supports aria props](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md)

> Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.


:white_check_mark: Enabled (error)

```javascript

// Bad
/*
(
	<ul role="radiogroup" aria-labelledby="foo">
		<li aria-required tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
		<li aria-required tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
		<li aria-required tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
	</ul>
);
*/

// Good
(
	<ul role="radiogroup" aria-required aria-labelledby="foo">
		<li tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
		<li tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
		<li tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
	</ul>
);

```
<br />



### [Tabindex no positive](https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md)

> Enforce tabIndex value is not greater than zero.


:x: Disabled

```javascript

// Bad
<span tabIndex="5">foo</span>;
<span tabIndex="3">bar</span>;
<span tabIndex="1">baz</span>;
<span tabIndex="2">never really sure what goes after baz</span>;

// Good
<span tabIndex="0">foo</span>;
<span tabIndex="-1">bar</span>;
<span tabIndex={0}>baz</span>;

```
<br />


