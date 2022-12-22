module.exports = {
	parser: 'babel-eslint',
	extends: [
		'./es7.js',
		'../rules/node.js',
	].map(require.resolve),
	env: {
		browser: false,
		node: true,
		amd: false,
		mocha: true,
		jasmine: true,
		jest: true,
		jquery: true,
		serviceworker: true,
		worker: true,
	},
};
