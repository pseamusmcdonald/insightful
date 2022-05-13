<script>
	import { page } from '$app/stores'
	import { setContext, onMount } from 'svelte'
	import { writable } from 'svelte/store'
	import { user } from '$stores/user'
	import { Notifications, Plaid_Items, Preferences } from '$lib/db'

	const page_data = writable({
		Plaid_Items: {
			data: [],
			updating: false,
		},
		Notifications: {
			data: {},
			updating: false,
		},
		Preferences: {
			data: {},
			updating: false,
		},
	})
	
	setContext('page_data', page_data)

	onMount(async () => {
		console.log($user)
		$page_data.Plaid_Items.data = await Plaid_Items.getUserPlaidLogins()
	})

	$: {
		for (let i = 0; i < Object.keys($page_data).length; i++) {
			if ($page_data[Object.keys($page_data)[i]].updating) {
				update(Object.keys($page_data)[i])
			}
		}
	}

	const update = async (key) => {
		if (key === 'Notifications') $page_data[key].data = null
		else if (key === 'Plaid_Items') $page_data[key].data = Plaid_Items.getUserPlaidLogins()
		else if (key === 'Preferences') $page_data[key].data = null
		$page_data[key].updating = false
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