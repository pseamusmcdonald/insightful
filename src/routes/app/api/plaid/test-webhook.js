import { testWebhook } from '$lib/plaid/webhook_helpers'

export const post = async (req) => {
	let error

	await testWebhook()

	return {
		status: !error ? 200 : 500
	}
}