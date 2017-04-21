
module.exports = {

	'parser': 'babel-eslint',
	'plugins': [
		'flowtype',
	],
	'extends': [
		'../rules/flow.js',
	],
	'settings': {
		'flowtype': {
			'onlyFilesWithFlowAnnotation': true,
		},
	},
};
