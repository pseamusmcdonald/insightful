import { handleItemWebhook, handleHoldingsWebhook, unhandledWebhook } from '$lib/plaid/webhook_handlers'

export const post = async (req) => {
	console.log(req)

	const body = Object.fromEntries(req.body.entries())

	if (body.webhookType.toLowerCase() === 'holdings') handleHoldingsWebhook(body, req.locals.session.user.id)
	else if (body.webhookType.toLowerCase() === 'item') handleItemWebhook(body, req.locals.session.user.id)
	else unhandledWebhook(body)
	return
}