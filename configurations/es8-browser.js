module.exports = {
	parser: '@babel/eslint-parser',
	extends: ['./es8.js'].map(require.resolve),
	env: {
		browser: true,
		node: false,
		amd: false,
		mocha: true,
		jasmine: true,
		jest: true,
		jquery: true,
		serviceworker: true,
		worker: true,
	},
};
