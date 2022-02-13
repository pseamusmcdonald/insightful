<script>
	import { setContext, onMount } from 'svelte' 
	import { writable } from 'svelte/store'
	import { user } from '$stores/user'
	import db from '$lib/db'
	import Sidenav from './_components/Sidenav.svelte'

	const user_data = writable({
		data: {},
		updating: false,
	})
	
	setContext('user', user_data)

	onMount(async () => {
		$user_data.data = await db.users.get($user.id)
		console.log($user_data)
	})
</script>

<div class="flex max-h-full w-full">
	<Sidenav />
	<div class="w-4/5 h-full py-6 overflow-y-auto">
		<slot></slot>
	</div>
</div>