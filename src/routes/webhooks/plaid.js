import { handleItemWebhook, handleHoldingsWebhook, unhandledWebhook } from '$lib/plaid/webhook_handlers'

export const post = async (req) => {

	if (req.body.webhook_type.toLowerCase() === 'holdings') await handleHoldingsWebhook(req.body)
	else if (req.body.webhook_type.toLowerCase() === 'item') await handleItemWebhook(req.body)
	else unhandledWebhook(req.body)

	return
}