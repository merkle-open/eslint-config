module.exports = {
	plugins: [
		'security',
	],
	extends: [
		'./typescript.js',
		'../rules/node.js',
		'../rules/node-security.js',
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
