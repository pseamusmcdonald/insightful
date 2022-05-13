import { Notifications, Plaid_Items, Positions } from '$lib/db'
import { getAccountPositions } from './helpers'

const handleItemError = async (item_id) => {
	const body = await Plaid_Items.updateStatus(item_id, 'invalid')
	await Notifications.set({
		user_id: body.user_id,
		message: `Your account with ${body.institution_name} has been updated. Please re-authorize this account here.`
	})
	
	// **NEED TO DO - frontend**
	// link from notification to accounts, add update option
}

const handleRevokedItem = async (item_id) => {
	const body = await Plaid_Items.updateStatus(item_id, 'invalid')
	await Notifications.set({
		user_id: body.user_id,
		message: `Your account authorization with ${body.institution_name} has been revoked. Please re-connect this account here.`
	})
}

const handlePendingItemExp = async (item_id) => {
	const body = await Plaid_Items.updateStatus(item_id, 'invalid')
	await Notifications.set({
		user_id: body.user_id,
		message: `Your account authorization with ${body.institution_name} has been revoked. Please re-authorize this account here.`
	})
}

const handleUpdatedHoldings = async (item_id) => {
	const item = await Plaid_Items.get(item_id)

	const positions = await getAccountPositions(item.access_token)
	const mappedPositions = positions.map(position => {
		return {
			security_id: position.security_id,
			name: position.name,
			account_id: position.account_id,
			cost_basis: position.cost_basis,
			quantity: position.quantity,
			ticker: position.ticker_symbol,
			cusip: position.cusip,
			isin: position.isin,
		}
	})
	await Positions.upsert(mappedPositions)

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
