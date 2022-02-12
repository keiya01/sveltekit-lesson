import type { User as BaseUser } from '../../../../server/infra/user';

export type User = BaseUser;

export type Methods = {
	post: {
		reqBody: {
			name: string;
			password: string;
		};
		resBody: {
			user: User;
			token: string;
			message?: string;
		};
		status: 200 | 401;
	};
};
