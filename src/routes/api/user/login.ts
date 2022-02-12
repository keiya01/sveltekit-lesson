import type { RequestHandler } from '@sveltejs/kit';
import { findUser } from '../../../server/infra/user';

export const post: RequestHandler = async (event) => {
	const reqBody = await event.request.json();
	const name = reqBody.name;
	const password = reqBody.password;
	if (!name || !password) {
		return { status: 401, body: { message: '入力が足りていません。' } };
	}

	const user = await findUser(name);

	if (!user || password !== user.password) {
		// user hasn't created a todo list.
		// start with an empty array
		return { status: 401 };
	}

	return { status: 200, body: { user, token: '12345' } };
};
