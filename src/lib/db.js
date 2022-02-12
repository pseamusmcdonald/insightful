import supabase from "./supabase"
import { get } from 'svelte/store'
import { user } from '$stores/user'

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
		async getUserAccounts () {
			const { body, error } = await supabase
				.from(this.table)
				.select('*')
				.eq('user_id', user_id)
			console.log(error, user_id)
			return body
		},
		async getItemAccounts () {
			const { body, error } = await supabase
				.from(this.table)
				.select('*')
				.eq('plaid_id', user_id)
			console.log(error, user_id)
			return body
		},
		async set (account) {
			const { body, error } = await supabase
				.from(this.table)
				.insert(account)
			console.log(error)
			return body
		},
		update: async () => {
			
		},
	},
	auth: {
		async login (email, password) {
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
		async signUp (email, password) {
			const { error } = await supabase.auth.signUp({
				email: email,
				password: password,
			},
			{
				redirectTo: 'https://insightful-rho.vercel.app/auth/login',
			})
			if (error) {
				console.log(error)
				return error
			}
			return error
		},
	},
	notifications: {
		table: 'notifications',
		async delete () {

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
		async set (notification) {
			const { body, error } = await supabase
				.from(this.table)
				.insert(notification)
			console.log(error)
			return body
		},
		async update () {

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
		async getUserPlaidLogins () {
			const { body, error } = await supabase
				.from(this.table)
				.select('*')
				.eq('user_id', get(user).id)
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
		async updateStatus (id, status) {
			const { body, error } = await supabase
				.from(this.table)
				.update({status: status})
				.match({id: id})
			return body[0]
		},
	},
	positions: {
		table: 'positions',
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
	},
	users: {
		table: 'users',
		async delete () {

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
		async update () {

		},
	},
}