import cookie from 'cookie'

export const handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.session = cookies.session || null;

	const response = await resolve(request);

	if (request.locals.session === null && request.url.pathname.includes("/app")) {
		const redirect = {
			headers: {
				Location: '/auth/login',
			},
			status: 302,
		}
		return redirect
	} else if (request.locals.session !== null && !request.url.pathname.includes("/app")) {
		const redirect = {
			headers: {
				Location: '/app',
			},
			status: 302,
		}
		return redirect
	} else {
		return response
	}
}

export const getSession = (request) => {
	return cookie.parse(request.headers.cookie || '').session || null
}