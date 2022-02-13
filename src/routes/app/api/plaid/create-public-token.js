import { createLinkToken } from '$lib/plaid/helpers'

export const get = async (req) => {
	let error
	const token = await createLinkToken(req.locals.session.user.id)
	return {
		status: token ? 200 : 500,
		body: token ? token : `error creating link token: ${error}`,
	};
}