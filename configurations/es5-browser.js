module.exports = {
	parser: '@babel/eslint-parser',
	extends: ['./es5.js'].map(require.resolve),
	env: {
		browser: true,
		node: false,
		amd: false,
		mocha: false,
		jasmine: false,
	},
};
