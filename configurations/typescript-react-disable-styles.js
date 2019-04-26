module.exports = {
	'extends': [
		'./typescript-disable-styles.js',
		'../rules/react-disable-styles.js',
		'../rules/react-a11y-disable-styles.js',
	].map(require.resolve),
};
