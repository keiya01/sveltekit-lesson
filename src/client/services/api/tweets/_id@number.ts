import type { Tweet as BaseTweet } from '../../../../server/infra/tweet';

export type Tweet = BaseTweet;

export type Methods = {
	get: {
		resBody: {
			tweet: Tweet;
		};
	};
};
