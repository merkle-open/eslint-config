module.exports = {
	'extends': [
		'./es6-disable-styles.js',
		'../rules/react-disable-styles.js',
		'../rules/react-a11y-disable-styles.js',
	].map(require.resolve),

};
