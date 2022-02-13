import db from '$lib/db'
import { getAccountPositions } from './helpers'

const handleItemError = async (item_id) => {
	const body = await db.plaid_items.updateStatus(item_id, 'invalid')
	await db.notifications.set({
		user_id: body.user_id,
		message: `Your account with ${body.institution_name} has been updated. Please re-authorize this account here.`
	})
	
	// **NEED TO DO - frontend**
	// link from notification to accounts, add update option
}

const handleRevokedItem = async (item_id) => {
	const body = await db.plaid_items.updateStatus(item_id, 'invalid')
	await db.notifications.set({
		user_id: body.user_id,
		message: `Your account with ${body.institution_name} has been revoked. Please re-authorize this account here.`
	})
}

const handlePendingItemExp = async (item_id) => {
	const body = await db.plaid_items.updateStatus(item_id, 'invalid')
	await db.notifications.set({
		user_id: body.user_id,
		message: `Your account with ${body.institution_name} has been revoked. Please re-authorize this account here.`
	})
}

const handleUpdatedHoldings = async (item_id) => {
	const item = await db.plaid_items.get(item_id)

	const positions = await getAccountPositions(item.access_token)
	const positionPromises = []
	for (const position of positions) {
		positionPromises.push(db.positions.upsert({
			security_id: position.security_id,
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

	return
}

export const handleItemWebhook = async (reqBody) => {
	if (reqBody.webhook_code === 'ERROR') handleItemError(reqBody.item_id)
	else if (reqBody.webhook_code === 'PENDING_EXPIRATION') handlePendingItemExp(reqBody.item_id)
	else if (reqBody.webhook_code === 'USER_PERMISSION_REVOKED') handleRevokedItem(reqBody.item_id)
	else unhandledWebhook(reqBody)
}

export const handleHoldingsWebhook = async (reqBody) => {
	if (reqBody.webhook_code === 'DEFAULT_UPDATE') handleUpdatedHoldings(reqBody.item_id)
	else unhandledWebhook(reqBody)
}

export const unhandledWebhook = (reqBody) => {
  const {
    webhook_type: webhookType,
    webhook_code: webhookCode,
    item_id: plaidItemId,
  } = reqBody
  console.log(
    `UNHANDLED ${webhookType} WEBHOOK: ${webhookCode}: Plaid item id ${plaidItemId}: unhandled webhook type received.`
  )
}
