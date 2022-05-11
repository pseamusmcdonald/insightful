<script>
	import { goto } from '$app/navigation'
	import { Auth } from '$lib/db'

	let email
	let password
	let passConf

	const handleSignUp = async () => {
		if (password == passConf) {
			const error = await Auth.signUp(email, password)
			if (!error) goto('./sign-up/success')
		}
		else alert('Passwords don\'t match')
	}
</script>

<form 
	on:submit|preventDefault={handleSignUp}
	class="flex flex-col gap-5 w-96"
>
	<div class="flex flex-col gap-3">
		<div class="flex flex-col gap-1">
			<label>Email</label>
			<input
				type="email"
				bind:value={email}
				class="px-4 py-2 rounded text-zinc-900"
			/>
		</div>
		<div class="flex flex-col gap-1">
			<label>Password</label>
			<input
				type="password"
				bind:value={password}
				class="px-4 py-2 rounded text-zinc-900"
			/>
		</div>
		<div class="flex flex-col gap-1">
			<label>Password Confirmation</label>
			<input
				type="password"
				bind:value={passConf}
				class="px-4 py-2 rounded text-zinc-900"
			/>
		</div>
	</div>
	<div class="flex flex-col gap-3">
		<button type="submit" class="py-3 bg-zinc-100 hover:bg-zinc-200 text-black rounded font-semibold">Sign Up</button>
		<div class="text-center">Have an account? <a href="./login" class="font-bold">Login!</a></div>
	</div>
</form>