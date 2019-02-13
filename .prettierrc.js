const config = require('@namics/prettier-config');
module.exports = Object.assign(config, {
	printWidth: 400,
	tabWidth: 2,
	useTabs: false,
	singleQuote: false,
	trailingComma: 'none',
	bracketSpacing: false,
	jsxBracketSameLine: false,
	arrowParens: 'avoid',
});
