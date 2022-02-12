import { handleItemWebhook, handleHoldingsWebhook, unhandledWebhook } from '$lib/plaid/webhook_handlers'

export const post = async (req) => {
	// would be ideal to verify Plaid as sender
	const body = Object.fromEntries(req.body.entries())

	if (body.webhook_type.toLowerCase() === 'holdings') await handleHoldingsWebhook(body)
	else if (body.webhook_type.toLowerCase() === 'item') await handleItemWebhook(body)
	else console.log('failed')
	
	return
}