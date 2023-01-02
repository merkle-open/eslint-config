const config = require('@merkle-open/prettier-config');
module.exports = Object.assign(config, {
	printWidth: 400,
	tabWidth: 2,
	useTabs: false,
	singleQuote: false,
	trailingComma: 'none',
	bracketSpacing: false,
	bracketSameLine: false,
	arrowParens: 'avoid',
});
