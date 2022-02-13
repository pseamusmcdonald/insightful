<script>
	import { page } from '$app/stores'
	import { setContext, onMount } from 'svelte'
	import { writable } from 'svelte/store'
	import { user } from '$stores/user'
	import db from '$lib/db'

	const page_data = writable({
		plaid_items: {
			data: [],
			updating: false,
		},
		plaid_items: {
			data: [],
			updating: false,
		},
	})
	
	setContext('page_data', page_data)

	onMount(async () => {
		console.log($user)
		$page_data.plaid_items.data = await db.plaid_items.getUserPlaidLogins()
	})

	$: {
		for (let i = 0; i < Object.keys($page_data).length; i++) {
			if ($page_data[Object.keys($page_data)[i]].updating) {
				const update = async () => {
					$page_data[Object.keys($page_data)[i]].data = await db.plaid_items.getUserPlaidLogins()
					$page_data[Object.keys($page_data)[i]].updating = false
				}
				update()
			}
		}
	}

	
</script>

<div class="flex flex-col w-2/3 m-auto">
	<div class="flex flex-col mb-6">
		<h1 class='py-3 mb-5 text-2xl font-normal border-b border-zinc-500'>Settings</h1>
		<ul class="flex gap-8">
			<li><a
				href='/app/profile'
				class='pb-1.5'
				class:selected={$page.url.pathname == '/app/profile'}
			>General</a></li>
			<li><a 
				href='/app/profile/accounts'
				class='pb-1.5'
				class:selected={$page.url.pathname == '/app/profile/accounts'}
			>Accounts</a></li>
			<li><a
				href='/app/profile/notifications'
				class='pb-1.5'
				class:selected={$page.url.pathname == '/app/profile/notifications'}
			>Notifications</a></li>
			<li><a
				href='/app/profile/preferences'
				class='pb-1.5'
				class:selected={$page.url.pathname == '/app/profile/preferences'}
			>Preferences</a></li>
		</ul>
	</div>
	<slot></slot>
</div>

<style>
	.selected {
		@apply border-b border-zinc-500;
	}
</style>