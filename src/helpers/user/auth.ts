export const getAuth = () => {
	const browser = typeof window !== 'undefined';
	const token = browser ? localStorage.getItem('token') : undefined;
	const userId = browser ? localStorage.getItem('userId') : undefined;
	return { token, userId };
};

export const setAuth = (userId: number, token: string) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('token', token);
		localStorage.setItem('userId', `${userId}`);
	}
};
