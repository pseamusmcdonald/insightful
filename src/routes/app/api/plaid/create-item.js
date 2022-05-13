import { exchangePublicToken, getAccountPositions } from '$lib/plaid/helpers'
import { Accounts, Plaid_Items, Positions } from '$lib/db'

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

	await Plaid_Items.set(new_item)
		.catch(err => error = err)

	const mappedAccounts = params.metadata.accounts.map((account) => {
		return {
			id: account.id,
			name: account.name,
			type: account.type,
			subtype: account.subtype,
			access_token: access_token,
			user_id: req.locals.session.user.id,
			mask: account.mask,
		}
	})
	
	await Accounts.set(mappedAccounts)
		.catch(err => error = err)

	const positions = await getAccountPositions(access_token)
	
	const mappedPositions = positions.map((position) => {
		return {
			name: position.name,
			security_id: position.security_id,
			account_id: position.account_id,
			cost_basis: position.cost_basis,
			quantity: position.quantity,
			ticker: position.ticker_symbol,
			cusip: position.cusip,
			isin: position.isin,
		}
	})
	
	await Positions.set(mappedPositions)
		.catch(err => error = err)

	return {
		status: !error ? 200 : 500
	}
}