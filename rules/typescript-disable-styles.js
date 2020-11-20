const styles = require('./style-disable-styles');
const variables = require('./variables-disable-styles');
const errors = require('./errors-disable-styles');
const es6 = require('./es6-disable-styles');
const bestPractices = require('./best-practices-disable-styles');

const replaceRule = (name, ruleSet) => {
	return typeof ruleSet.rules[name] === 'undefined'
		? {}
		: { [`@typescript-eslint/${name}`]: ruleSet.rules[name] };
};

/* [12.04.2019] add typescript support */
module.exports = {
	rules: {
		// default overrides
		...replaceRule('brace-style', styles),
		...replaceRule('comma-dangle', errors),
		...replaceRule('comma-spacing', styles),
		...replaceRule('default-param-last', styles),
		...replaceRule('dot-notation', bestPractices),
		...replaceRule('func-call-spacing', styles),
		...replaceRule('indent', styles),
		...replaceRule('init-declarations', variables),
		...replaceRule('keyword-spacing', styles),
		...replaceRule('lines-between-class-members', styles),
		...replaceRule('no-array-constructor', styles),
		...replaceRule('no-dupe-class-members', es6),
		...replaceRule('no-duplicate-imports', es6),
		...replaceRule('no-empty-function', bestPractices),
		...replaceRule('no-extra-parens', errors),
		...replaceRule('no-extra-semi', errors),
		...replaceRule('no-implied-eval', bestPractices),
		...replaceRule('no-invalid-this', bestPractices),
		...replaceRule('no-loop-func', bestPractices),
		...replaceRule('no-loss-of-precision', bestPractices),
		...replaceRule('no-magic-numbers', bestPractices),
		...replaceRule('no-redeclare', bestPractices),
		...replaceRule('no-shadow', variables),
		...replaceRule('no-throw-literal', bestPractices),
		...replaceRule('no-unused-expressions', bestPractices),
		...replaceRule('no-unused-vars', variables),
		...replaceRule('no-use-before-define', variables),
		...replaceRule('no-useless-constructor', es6),
		...replaceRule('quotes', styles),
		...replaceRule('require-await', styles),
		...replaceRule('return-await', styles),
		...replaceRule('semi', styles),
		...replaceRule('space-before-function-paren', styles),
		...replaceRule('space-infix-ops', styles),
		'@typescript-eslint/indent': 0,
		'@typescript-eslint/member-delimiter-style': 0,
		'@typescript-eslint/type-annotation-spacing': 0,
		'@typescript-eslint/triple-slash-reference': 0,
	},
};
