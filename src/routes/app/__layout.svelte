<script>
	import { onMount } from 'svelte'
	import { user } from '$stores/user'
	import { Users } from '$lib/db'
	import Sidenav from './_components/Sidenav.svelte'

	let resolvePromise = null
	
	const promise = new Promise(resolve => resolvePromise = resolve)

	onMount(async () => {
		$user.data = await Users.get($user.id)
		resolvePromise()
	})
</script>

{#await promise then loaded}
	<div class="flex max-h-full w-full">
		<Sidenav />
		<div class="w-4/5 h-full py-6 overflow-y-auto">
			<slot></slot>
		</div>
	</div>
{/await}