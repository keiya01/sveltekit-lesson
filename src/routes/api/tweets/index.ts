import type { RequestHandler } from '@sveltejs/kit';
import { createTweet, findAllTweet } from '../../../server/infra/tweet';

export const get: RequestHandler = async () => {
	const tweets = await findAllTweet({ orderBy: { createdAt: 'desc' } });

	return { status: 200, body: { tweets } };
};

export const post: RequestHandler = async (event) => {
	const reqBody = await event.request.json();

	if (reqBody.token !== '12345') {
		return { status: 401, body: { message: 'ログインしてください。' } };
	}

	const userId = Math.trunc(Number(reqBody.userId));
	const content = reqBody.content;
	const tweet = await createTweet({ data: { content, author: { connect: { id: userId } } } });

	return { status: 200, body: { tweet } };
};
