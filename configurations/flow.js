
module.exports = {

	'parser': 'babel-eslint',
	'plugins': [
		'flowtype',
	],
	'extends': [
		'../rules/flow.js',
	].map(require.resolve),
	'settings': {
		'flowtype': {
			'onlyFilesWithFlowAnnotation': true,
		},
	},
};
