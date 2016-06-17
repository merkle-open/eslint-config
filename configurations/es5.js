module.exports = {

	extends: [
		'../rules/best-practices',
		'../rules/errors',
		'../rules/node',
		'../rules/style',
		'../rules/variables',
		'../rules/imports'
	].map(require.resolve),
	env: {},
	parserOptions: {
		ecmaVersion: 5,
		sourceType: 'module'
	}

};
