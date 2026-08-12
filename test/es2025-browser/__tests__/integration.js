// Integration test: ES2025 browser code
async function fetchData(url) {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Request failed');
	}
	return response.json();
}

function formatDate(date) {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date);
}

const utils = {
	fetchData,
	formatDate,
};

export { utils };
