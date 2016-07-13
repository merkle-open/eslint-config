module.exports = {

	extends: [
		'../rules/es6-disable',
		'../rules/node-disable',
		'../rules/best-practices',
		'../rules/errors',
		'../rules/style',
		'../rules/variables'
	].map(require.resolve),
	env: {},
	parserOptions: {
		ecmaVersion: 5,
		sourceType: 'module'
	}

};
