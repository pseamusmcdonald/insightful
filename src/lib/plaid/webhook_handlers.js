import db from '$lib/db'

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

const handleUpdatedHoldings = (req_body) => {
	
}

export const handleItemWebhook = async (reqBody) => {
	if (reqBody.webhook_code === 'ERROR') handleItemError(reqBody.item_id)
	else if (reqBody.webhook_code === 'PENDING_EXPIRATION') handlePendingItemExp(reqBody.item_id)
	else if (reqBody.webhook_code === 'USER_PERMISSION_REVOKED') handleRevokedItem(reqBody.item_id)
	else unhandledWebhook(reqBody)
}

export const handleHoldingsWebhook = async (reqBody) => {
	if (reqBody.webhook_code === 'DEFAULT_UPDATE') handleUpdatedHoldings(reqBody)
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
