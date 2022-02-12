import db from '$lib/db'

export const handleItemError = async (item_id, user_id) => {
	// update item status
	await db.plaid_items.updateStatus(item_id, 'invalid')
	const item_data = db.plaid_items.get(item_id)
	await db.notifications.set({
		user_id: user_id,
		message: `Your account with ${item_data.insitution_name} has been updated. Please re-authorize this account here.`
	})
	
	// **NEED TO DO - frontend**
	// link from notification to accounts, add update option
}

export const handleRevokedItem = (item_id, user_id) => {
	// update item status
	await db.plaid_items.updateStatus(item_id, 'invalid')
	const item_data = db.plaid_items.get(item_id)
	await db.notifications.set({
		user_id: user_id,
		message: `Your account with ${item_data.insitution_name} has been revoked. Please re-authorize this account here.`
	})
}

export const handlePendingItemExp = (item_id, user_id) => {
	// update item status
	await db.plaid_items.updateStatus(item_id, 'invalid')
	const item_data = db.plaid_items.get(item_id)
	await db.notifications.set({
		user_id: user_id,
		message: `Your account with ${item_data.insitution_name} has been revoked. Please re-authorize this account here.`
	})
}