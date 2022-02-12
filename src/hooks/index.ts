import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	// サンプルなのでbooleanで:pray:
	event.locals.loggedin = !!cookies.loggedin;

	const response = await resolve(event);

	return response;
};
