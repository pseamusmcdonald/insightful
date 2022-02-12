import { client } from '$lib/plaid'


export const post = async (req) => {
	let error

	const request = {
		access_token: 'access-sandbox-69844067-992c-4cac-b3d2-11a683d6925b',
		webhook_code: 'DEFAULT_UPDATE'
	}
	const res = await client.sandboxItemFireWebhook(request)
	console.log(res)
	
	return {
		status: !error ? 200 : 500
	}
}