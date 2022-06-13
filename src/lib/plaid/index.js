import dotenv from 'dotenv'
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid'

dotenv.config()

const PLAID_CLIENT_ID = process.env['PLAID_CLIENT_ID']
export const PLAID_SECRET = process.env['PLAID_SECRET']
const PLAID_ENV = process.env['PLAID_ENV']

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