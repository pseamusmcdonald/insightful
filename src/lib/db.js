import supabase from "./supabase"

export default {
	auth: {
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
	}, 
}