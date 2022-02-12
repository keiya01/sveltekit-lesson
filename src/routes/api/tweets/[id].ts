import type { RequestHandler } from '@sveltejs/kit';
import { findTweet } from '../../../server/infra/tweet';

export const get: RequestHandler = async (event) => {
	const tweetId = event.params.id;

	const tweet = await findTweet(Math.trunc(Number(tweetId)));

	return { status: 200, body: { tweet } };
};
