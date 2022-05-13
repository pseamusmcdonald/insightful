import client from './index'

const PLAID_PRODUCTS = ('investments').split(
  ',',
)
const PLAID_COUNTRY_CODES = ('US').split(
  ',',
)

// Create a link token with configs which we can then use to initialize Plaid Link client-side.

export const createLinkToken = async (user_id) => {
	const configs = {
		user: {
			client_user_id: user_id,
		},
		client_name: 'Insightful',
		products: PLAID_PRODUCTS,
		country_codes: PLAID_COUNTRY_CODES,
		language: 'en',
		webhook: 'https://insightful-rho.vercel.app/webhooks/plaid',
		account_filters: {
			investment: {
				account_subtypes: ['all'],
			},
		}
	}
	const linkTokenResponse = await client.linkTokenCreate(configs)
	return linkTokenResponse.data
}

// Exchange a Link public_token for an API access_token

export const exchangePublicToken = async (token) => {
	const accessTokenResponse = await client.itemPublicTokenExchange({
		public_token: token,
	})
	return accessTokenResponse.data
}

// Get account Positions

export const getAccountPositions = async (access_token) => {
	const response = await client.investmentsHoldingsGet({access_token: access_token})
  const { holdings, securities } = response.data
	const map = new Map()
	securities.forEach(security => map.set(security.security_id, security))
	const merged = holdings.map(holding => ({...map.get(holding.security_id), ...holding}))
	return merged
}