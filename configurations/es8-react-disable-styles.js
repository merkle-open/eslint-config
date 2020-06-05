module.exports = {
	'parser': 'babel-eslint',
	'extends': [
		'./es8-disable-styles.js',
		'../rules/react-disable-styles.js',
		'../rules/react-a11y-disable-styles.js',
		'../rules/react-hooks-disable-styles.js',
	].map(require.resolve),

};
