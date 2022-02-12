import type { RequestHandler } from '@sveltejs/kit';
import { createUser } from '../../../server/infra/user';

export const post: RequestHandler = async (event) => {
	const reqBody = await event.request.json();
	const name = reqBody.name;
	const password = reqBody.password;
	if (!name || !password) {
		return { status: 400, body: { message: '入力が足りていません。' } };
	}

	const user = await createUser({ name, password });

	return { status: 200, body: { user, token: '12345' } };
};
