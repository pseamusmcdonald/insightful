<script>
	import { onMount } from 'svelte'
	import { getContext } from 'svelte'

	const page_data = getContext('page_data')
	let handler

	onMount(async () => {
		const res = await fetch('/app/api/plaid/create-public-token')
		const { link_token } = await res.json()
		handler = Plaid.create({
			token: link_token,
			onSuccess: async (public_token, metadata) => {
				await fetch('/app/api/plaid/create-item', {
					method: 'POST',
					body: JSON.stringify({
						public_token: public_token,
						metadata: metadata,
					})
				})
				$page_data.items.updating = true
			},
			onLoad: () => {

			},
			onExit: (err, metadata) => {},
			onEvent: (eventName, metadata) => {},
			receivedRedirectUri: null,
		})
	})
</script>

<svelte:head>
	<script src="https://cdn.plaid.com/link/v2/stable/link-initialize.js"></script>
</svelte:head>

<button
	on:click={handler.open()}
	class=""
>Link New Account</button>