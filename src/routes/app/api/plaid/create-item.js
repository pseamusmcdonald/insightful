import { exchangePublicToken, getAccountPositions } from '$lib/plaid/helpers'
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
			type: account.type,
			subtype: account.subtype,
			access_token: access_token,
			user_id: req.locals.session.user.id,
			mask: account.mask,
		}))
	}
	
	await Promise.all(accountPromises)
		.catch(err => error = err)

	const positionPromises = []
	const positions = await getAccountPositions(access_token)
	for (const position of positions) {
		positionPromises.push(db.positions.set({
			account_id: position.account_id,
			cost_basis: position.cost_basis,
			quantity: position.quantity,
			ticker: position.ticker_symbol,
			cusip: position.cusip,
			isin: position.isin,
		}))
	}
	await Promise.all(positionPromises)
		.catch(err => error = err)

	return {
		status: !error ? 200 : 500
	}
}