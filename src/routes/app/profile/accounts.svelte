<script>
	import PlaidButton from '$components/PlaidButton.svelte'
</script>

<div>
	<div class='flex justify-between border-b border-zinc-500 py-2'>
		<h2 class='text-lg'>Linked Accounts</h2>
		<div>Securely link your brokerage accounts with Plaid</div>
	</div>
	<div class='flex flex-col divide-y divide-zinc-500'>
		<div class='flex justify-center py-10 border-b border-zinc-500'>
			<PlaidButton />
		</div>
	</div>
</div>