/* [18.07.2016] approved by skill group core team */
export default {
	// enforce return after a callback
	'callback-return': 0,

	// require all requires be top-level
	// core rule removed in ESLint 9 — kept at 0 (silently ignored); use eslint-plugin-n to re-enable
	'global-require': 0,

	// enforces error handling in callbacks (node environment)
	'handle-callback-err': 0,

	// disallow mixing regular variable and require declarations
	'no-mixed-requires': [0, false],

	// disallow use of new operator with the require function
	'no-new-require': 0,

	// disallow string concatenation with __dirname and __filename
	'no-path-concat': 0,

	// disallow use of process.env
	'no-process-env': 0,

	// disallow process.exit()
	'no-process-exit': 0,

	// restrict usage of specified node modules
	'no-restricted-modules': 0,

	// disallow use of synchronous methods (off by default)
	'no-sync': 0,
};
