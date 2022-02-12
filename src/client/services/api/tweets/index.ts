import type { Tweet as BaseTweet } from '../../../../server/infra/tweet';

export type Tweet = BaseTweet;

export type Methods = {
	get: {
		resBody: {
			tweets: Tweet[];
		};
	};
	post: {
		reqBody: {
			token: string;
			content: string;
			userId: number;
		};
		resBody: {
			tweet: Tweet,
			message?: string;
		},
		status: 200 | 401;
	};
};
