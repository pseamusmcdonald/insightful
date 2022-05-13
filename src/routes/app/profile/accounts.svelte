<script>
	import PlaidButton from '$components/PlaidButton.svelte'
	import { getContext } from 'svelte'

	const page_data = getContext('page_data')
</script>

<div>
	<div class='flex justify-between border-b border-zinc-500 py-1'>
		<h2 class='text-lg'>Linked Accounts</h2>
		<div>Securely link your brokerage accounts with Plaid</div>
	</div>
	<div class='flex flex-col divide-y divide-zinc-500'>
		{#each $page_data.Plaid_Items.data as item}
			<div class='py-8 flex justify-between'>
				<div>{item.institution_name}</div>
				<button class='text-red-400 font-medium'>Remove</button>
			</div>
		{/each}
		<div class='flex justify-center py-8 border-b border-zinc-500'>
			<PlaidButton />
		</div>
	</div>
</div>