// Integration test: TypeScript browser code
interface User {
	id: string;
	name: string;
	email: string;
}

async function fetchUser(id: string): Promise<User> {
	const response = await fetch(`/api/users/${id}`);
	if (!response.ok) {
		throw new Error('User not found');
	}
	return response.json();
}

function formatUserDisplay(user: User): string {
	return `${user.name} <${user.email}>`;
}

export { fetchUser, formatUserDisplay };
export type { User };
