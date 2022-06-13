import client, { PLAID_SECRET } from '$lib/plaid'

export async function post (req) {
	let error

	const request = {
		access_token: PLAID_SECRET,
		webhook_code: 'DEFAULT_UPDATE'
	}
	await client.sandboxItemFireWebhook(request)
	.catch(err => {
		console.error(err)
	})

	return {
		status: !error ? 200 : 500
	}
}