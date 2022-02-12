import type { Prisma, Tweet as PrismaTweet } from '@prisma/client';
import { prisma } from './base';

export type Tweet = PrismaTweet;

export const findAllTweet = <T extends Prisma.TweetFindManyArgs>(
	args: Prisma.SelectSubset<T, Prisma.TweetFindManyArgs>
) => prisma.tweet.findMany(args);

export const findTweet = (id: number) => prisma.tweet.findUnique({ where: { id } });

export const createTweet = <T extends Prisma.TweetCreateArgs>(
	args: Prisma.SelectSubset<T, Prisma.TweetCreateArgs>
) => prisma.tweet.create(args);
