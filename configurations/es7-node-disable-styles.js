module.exports = {

	extends: [
		'./es7-disable-styles.js',
		'../rules/node-disable-styles.js',
	].map(require.resolve),

};
