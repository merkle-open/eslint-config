module.exports = {
	rules: {
		// Require ARIA roles to be valid and non-abstract
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
		'jsx-a11y/aria-role': 2,

		// Enforce all aria-* props are valid.
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
		'jsx-a11y/aria-props': 2,

		// Enforce ARIA state and property values are valid.
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
		'jsx-a11y/aria-proptypes': 2,

		// Enforce that elements that do not support ARIA roles, states, and
		// properties do not have those attributes.
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
		'jsx-a11y/aria-unsupported-elements': 2,

		// disallow href "#"
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/href-no-hash.md
		'jsx-a11y/href-no-hash': 0,

		// Require <img> to have a non-empty `alt` prop, or role="presentation"
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
		'jsx-a11y/alt-text': 2,

		// Prevent img alt text from containing redundant words like "image", "picture", or "photo"
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
		'jsx-a11y/img-redundant-alt': 2,

		// require that JSX labels use "htmlFor"
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-for.md
		'jsx-a11y/label-has-for': 0,

		// require that mouseover/out come with focus/blur, for keyboard-only users
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
		'jsx-a11y/mouse-events-have-key-events': 0,

		// Prevent use of `accessKey`
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
		'jsx-a11y/no-access-key': 2,

		// require onBlur instead of onChange
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-onchange.md
		'jsx-a11y/no-onchange': 0,

		// Enforce that elements with onClick handlers must be focusable.
		// TODO: evaluate
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/onclick-has-focus.md
		'jsx-a11y/onclick-has-focus': 0,

		// require things with onClick to have an aria role
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/onclick-has-role.md
		'jsx-a11y/onclick-has-role': 0,

		// Enforce that elements with ARIA roles must have all required attributes
		// for that role.
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
		'jsx-a11y/role-has-required-aria-props': 2,

		// Enforce that elements with explicit or implicit roles defined contain
		// only aria-* properties supported by that role.
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
		'jsx-a11y/role-supports-aria-props': 2,

		// Enforce tabIndex value is not greater than zero.
		// https://github.com/devsenexx/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
		'jsx-a11y/tabindex-no-positive': 0,
	},
};
