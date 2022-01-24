import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid'

const PLAID_CLIENT_ID = import.meta.env.VITE_PLAID_CLIENT_ID
const PLAID_SECRET = import.meta.env.VITE_PLAID_SECRET
const PLAID_ENV = import.meta.env.VITE_PLAID_ENV

const PLAID_PRODUCTS = ('transactions').split(
  ',',
)
const PLAID_COUNTRY_CODES = ('US').split(
  ',',
)

// Create config object and initialize client

const configuration = new Configuration({
  basePath: PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
      'PLAID-SECRET': PLAID_SECRET,
			'Plaid-Version': '2020-09-14',
    },
  },
})

const client = new PlaidApi(configuration)


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
	}
	const linkTokenResponse = await client.linkTokenCreate(configs)
	return linkTokenResponse.data
}



// Exchange a Link public_token for an API access_token

export const getAccessToken = async (token) => {
	const accessTokenResponse = await client.itemPublicTokenExchange({
		public_token: token,
	})
	return accessTokenResponse.data.access_token
}