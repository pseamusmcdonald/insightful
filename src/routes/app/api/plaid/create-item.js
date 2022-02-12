import { exchangePublicToken } from '$lib/plaid/index'
import db from '$lib/db'

export const post = async (req) => {
	const params = JSON.parse(req.body)

	let error

	const { access_token, item_id } = await exchangePublicToken(params.public_token)
		.catch(err => error = err)

	const new_item = {
		id: item_id,
		institution_name: params.metadata.institution.name,
		access_token: access_token,
		user_id: req.locals.session.user.id,
		status: 'valid',
	}

	await db.plaid_items.set(new_item)
		.catch(err => error = err)

	const accountPromises = []

	for (const account of params.metadata.accounts) {
		accountPromises.push(db.accounts.set({
			id: account.id,
			name: account.name,
			access_token: access_token,
			user_id: req.locals.session.user.id,
			mask: account.mask,
		}))
	}

	await Promise.all(accountPromises)
		.catch(err => error = err)
	 
	return {
		status: !error ? 200 : 500
	}
}