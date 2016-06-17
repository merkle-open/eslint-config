module.exports = {

	extends: [
		'./es5.js',
		'../rules/node.js'
	].map(require.resolve),
	env: {
		browser: false,
		node: true,
		amd: false,
		mocha: false,
		jasmine: false
	}
};
