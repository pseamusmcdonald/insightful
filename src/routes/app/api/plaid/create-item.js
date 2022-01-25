import { getAccessToken } from '$lib/plaid/index'
import db from '$lib/db'

export const post = async (req) => {
	const params = JSON.parse(req.body)

	let error

	const plaid_access_token = await getAccessToken(params.public_token)
		.catch(err => error = err)

	const new_item = {
		id: plaid_access_token,
		user_id: req.locals.session.user.id,
	}

	const newa = await db.plaid_items.set(new_item)
		.catch(err => error = err)

	return {
		status: !error ? 200 : 500
	}
}