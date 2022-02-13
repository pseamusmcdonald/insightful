import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid'

const PLAID_CLIENT_ID = import.meta.env.VITE_PLAID_CLIENT_ID
const PLAID_SECRET = import.meta.env.VITE_PLAID_SECRET
const PLAID_ENV = import.meta.env.VITE_PLAID_ENV

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

export default client = new PlaidApi(configuration)