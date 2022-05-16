<script>
	import { goto } from '$app/navigation'
	import { user } from '../../stores/user'

	import { Auth } from '$lib/db'

	let email
	let password

	const handleLogin = async () => {
		await Auth.login(email, password)
			.then(res => $user = res)
			.catch(err => alert(err))
		goto('/app')
	}
</script>

<form 
	on:submit|preventDefault={handleLogin}
	class="flex flex-col gap-5 w-96"
>
	<div class="flex flex-col gap-3">
		<div class="flex flex-col gap-1">
			<label for='email'>Email</label>
			<input
				type="email"
				bind:value={email}
				class="px-4 py-2 rounded text-zinc-900"
			/>
		</div>
		<div class="flex flex-col gap-1">
			<label for='password'>Password</label>
			<input
				type="password"
				bind:value={password}
				class="px-4 py-2 rounded text-zinc-900"
			/>
		</div>
	</div>
	<div class="flex flex-col gap-3 items-center">
		<button type="submit" class="w-fit px-12 py-3 bg-zinc-100 hover:bg-zinc-200 text-black rounded font-semibold">Login</button>
		<div class="text-center">Need an account? <a href="./sign-up" class="font-bold">Sign Up!</a></div>
	</div>
</form>