import db from '$lib/db'
import { client } from '$lib/plaid'

export const testWebhook = async () => {
	const request = {
		access_token: 'access-sandbox-69844067-992c-4cac-b3d2-11a683d6925b',
		webhook_code: 'DEFAULT_UPDATE'
	}
	await client.sandboxItemFireWebhook(request)
	return
}

export const handleItemError = async (item_id) => {
	const body = await db.plaid_items.updateStatus(item_id, 'invalid')
	await db.notifications.set({
		user_id: body.user_id,
		message: `Your account with ${body.institution_name} has been updated. Please re-authorize this account here.`
	})
	
	// **NEED TO DO - frontend**
	// link from notification to accounts, add update option
}

export const handleRevokedItem = async (item_id) => {
	const body = await db.plaid_items.updateStatus(item_id, 'invalid')
	await db.notifications.set({
		user_id: body.user_id,
		message: `Your account with ${body.institution_name} has been revoked. Please re-authorize this account here.`
	})
}

export const handlePendingItemExp = async (item_id) => {
	const body = await db.plaid_items.updateStatus(item_id, 'invalid')
	await db.notifications.set({
		user_id: body.user_id,
		message: `Your account with ${body.institution_name} has been revoked. Please re-authorize this account here.`
	})
}

export const handleUpdatedHoldings = (req_body) => {
	
}