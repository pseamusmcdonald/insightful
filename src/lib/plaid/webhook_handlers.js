import db from '$lib/db'
import { handleItemError, handlePendingItemExp, handleRevokedItem } from './webhook_helpers'

export const handleItemWebhook = async (reqBody, user_id) => {
	if (reqBody.webhook_code === 'ERROR') handleItemError(reqBody.item_id, user_id)
	else if (reqBody.webhook_code === 'PENDING_EXPIRATION') handlePendingItemExp(reqBody.item_id, user_id)
	else if (reqBody.webhook_code === 'USER_PERMISSION_REVOKED') handleRevokedItem(reqBody.item_id, user_id)
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
