import supabase from "./supabase"
import { get } from 'svelte/store'
import { user } from '$stores/user'

export const Accounts = {
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
			.select('*, positions(*)')
			.eq('user_id', get(user).id)
		console.log(error)
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
	async set (accounts) {
		const { body, error } = await supabase
			.from(this.table)
			.insert(accounts)
		console.log(error)
		return body
	},
	update: async () => {
		
	}
};

export const Auth = {
	async login (email, password) {
		const { session, user, error } = await supabase.auth.signIn({
			email: email,
			password: password,
		})
		if (error) {
			console.log(error)
			return
		}
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
};

export const Email_List = {
	table: 'email_list',
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
	async set (email) {
		const { body, error } = await supabase
			.from(this.table)
			.insert(email)
		console.log(error)
		return body
	},
	async update () {

	},
};

export const Notifications = {
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
};

export const Plaid_Items = {
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
};

export const Positions = {
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
	async set (positions) {
		const { body, error } = await supabase
			.from(this.table)
			.insert(positions)
		console.log(error)
		return { body, error: err }
	},
	async upsert (positions) {
		const { body, error } = await supabase
			.from(this.table)
			.upsert(positions)
		console.log(error)
		return body
	},
	async getHighlightedPositions(selected_account) {
		console.log(selected_account)
		let query = supabase
			.from(this.table)
			.select('*, account:accounts(*)')
		if (selected_account) query = query.eq('account_id', selected_account.id)
		else query = query.neq('account.user_id', get(user).id)
		query = query.eq('highlighted', true)
		const { body, error } = await query
		console.log(error, body)
		return body
	},
};

export const Preferences = {

}

export const Users = {
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
};