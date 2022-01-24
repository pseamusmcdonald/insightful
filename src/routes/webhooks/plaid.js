import { handleHoldingsWebhook, handleItemWebhook, unhandledWebhook } from '$lib/plaid/webhook_handlers'

export const post = async (req) => {
  {/* {
		"webhook_type": "HOLDINGS",
		"webhook_code": "DEFAULT_UPDATE",
		"item_id": "wz666MBjYWTp2PDzzggYhM6oWWmBb",
		"error": null,
		"new_holdings": 19,
		"updated_holdings": 0
	} */}

	console.log(req)

	const body = Object.fromEntries(req.body.entries())

	const { 'webhook_type': webhookType } = body
	const type = webhookType.toLowerCase()

	const webhookHandlerMap = {
		holdings: handleHoldingsWebhook,
		item: handleItemWebhook,
	}

	const webhookHandler = webhookHandlerMap[type] || unhandledWebhook
	webhookHandler(body)
	return
}