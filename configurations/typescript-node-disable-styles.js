module.exports = {
	extends: [
		'./typescript-disable-styles.js',
		'../rules/node-disable-styles.js',
	].map(require.resolve),
};
