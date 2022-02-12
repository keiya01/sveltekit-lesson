import type { Prisma, User as PrismaUser } from '@prisma/client';
import { prisma } from './base';

export type User = PrismaUser;

export const createUser = (data: Prisma.UserCreateArgs['data']) => prisma.user.create({ data });

export const findUser = (name: string) =>
	prisma.user.findUnique({
		where: {
			name
		}
	});
