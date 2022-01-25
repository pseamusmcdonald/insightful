import supabase from "./supabase"

export default {
	accounts: {
		table: 'accounts',
		delete: async () => {

		},
		async get (id) {
			const { body, error } = await supabase
				.from(this.table)
				.select('*')
				.eq('id', id)
				.single()
			console.log(error)
			return body
		},
		async set (item) {
			const { body, error } = await supabase
				.from(this.table)
				.insert(item)
			console.log(error)
			return body
		},
		update: async () => {
			
		},
	},
	auth: {
		login: async (email, password) => {
			const { session, user, error } = await supabase.auth.signIn({
				email: email,
				password: password,
			})
			if (error) {
				console.log(error)
				return
			}
			const { body } = await supabase.from('users').select('*').eq('id', user.id)
			session.user = {...user, ...body[0]}
			document.cookie = `session=${JSON.stringify(session)}; path=/; max-age=5400; secure;`
			return session.user
		},
		signUp: async (email, password) => {
			const { error } = await supabase.auth.signUp({
				email: email,
				password: password,
			})
			if (error) {
				console.log(error)
				return error
			}
			return error
		},
	},
	plaid_items: {
		table: 'plaid_items',
		async delete (id) {

		},
		async get (id) {
			const { body, error } = await supabase
				.from(this.table)
				.select('*')
				.eq('id', id)
				.single()
			console.log(error)
			return body
		},
		async set (item) {
			const { body, error } = await supabase
				.from(this.table)
				.insert(item)
			console.log(error)
			return body
		},
		async update (id) {

		},
	},
	users: {
		table: 'users',
		delete: async () => {

		},
		get: async (id) => {
			const { body, error } = await supabase
				.from(this.table)
				.select('*')
				.eq('id', id)
				.single()
			console.log(error)
			return body
		},
		update: async () => {

		},
	},
}