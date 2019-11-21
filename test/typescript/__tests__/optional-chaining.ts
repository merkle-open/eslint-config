const apiResult: {
	name: string;
	office?: {
		primary?: {
			city: string;
		};
	};
} = {
	name: 'eslint',
};

const city = apiResult.office?.primary?.city;

// eslint-disable-next-line
console.log(city);
