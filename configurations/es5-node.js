module.exports = {
	parser: 'babel-eslint',
	plugins: [
		'security',
	],
	extends: [
		'./es5.js',
		'../rules/node.js',
		'../rules/node-security.js',
	].map(require.resolve),
	env: {
		browser: false,
		node: true,
		amd: false,
		mocha: false,
		jasmine: false,
	},
};
