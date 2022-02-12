import { client } from '$lib/plaid'


export async function post (req) {
	let error

	const request = {
		access_token: 'access-sandbox-ae38132e-d3c5-4641-8ad7-62007dc9b3bf',
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