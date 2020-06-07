/* eslint-disable max-len */
module.exports = {
	rules: {
		// Locates potentially unsafe regular expressions, which may take a very long time to run, blocking the event loop.
		// https://www.npmjs.com/package/eslint-plugin-security#detect-unsafe-regex
		'security/detect-unsafe-regex': 2,

		// Detects calls to buffer with noAssert flag set From the Node.js API docs: "Setting noAssert to true skips validation of the offset. This allows the offset to be beyond the end of the Buffer."
		// https://www.npmjs.com/package/eslint-plugin-security#detect-buffer-noassert
		'security/detect-buffer-noassert': 2,

		// Detects instances of child_process & non-literal exec()
		// https://www.npmjs.com/package/eslint-plugin-security#detect-child-process
		'security/detect-child-process': 2,

		// Detects object.escapeMarkup = false, which can be used with some template engines to disable escaping of HTML entities. This can lead to Cross-Site Scripting (XSS) vulnerabilities.
		// https://www.npmjs.com/package/eslint-plugin-security#detect-disable-mustache-escape
		'security/detect-disable-mustache-escape': 2,

		// Detects eval(variable) which can allow an attacker to run arbitary code inside your process.
		// https://www.npmjs.com/package/eslint-plugin-security#detect-eval-with-expression
		'security/detect-eval-with-expression': 2,

		// Detects Express csrf middleware setup before method-override middleware. This can allow GET requests (which are not checked by csrf) to turn into POST requests later.
		// https://www.npmjs.com/package/eslint-plugin-security#detect-no-csrf-before-method-override
		'security/detect-no-csrf-before-method-override': 2,

		// Detects variable in filename argument of fs calls, which might allow an attacker to access anything on your system.
		// https://www.npmjs.com/package/eslint-plugin-security#detect-non-literal-fs-filename
		'security/detect-non-literal-fs-filename': 2,

		// Detects RegExp(variable), which might allow an attacker to DOS your server with a long-running regular expression.
		// https://www.npmjs.com/package/eslint-plugin-security#detect-non-literal-regexp
		'security/detect-non-literal-regexp': 2,

		// Detects require(variable), which might allow an attacker to load and run arbitrary code, or access arbitrary files on disk.
		// https://www.npmjs.com/package/eslint-plugin-security#detect-non-literal-require
		'security/detect-non-literal-require': 2,

		// Detects variable[key] as a left- or right-hand assignment operand.
		// https://www.npmjs.com/package/eslint-plugin-security#detect-object-injection
		'security/detect-object-injection': 2,

		// Detects insecure comparisons (==, !=, !== and ===), which check input sequentially.
		// https://www.npmjs.com/package/eslint-plugin-security#detect-possible-timing-attacks
		'security/detect-possible-timing-attacks': 2,

		// Detects if pseudoRandomBytes() is in use, which might not give you the randomness you need and expect.
		// https://www.npmjs.com/package/eslint-plugin-security#detect-pseudorandombytes
		'security/detect-pseudoRandomBytes': 2,
	},
};
