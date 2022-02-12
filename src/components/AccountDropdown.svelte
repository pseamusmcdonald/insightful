<script>
	import { clickOutside } from '$lib/helpers'

	export let selectedAccount
	let accounts = [{mark: 1234, institution_name: 'Merrill Lynch', id: 1213}]
	let isOpen = false

	const handleSelection = (account) => {
		selectedAccount = account
		isOpen = !isOpen
	}
</script>

<ul class='w-fit relative mb-6' use:clickOutside on:outclick={() => {isOpen = !isOpen}}>
	<li>
		<button on:click|stopPropagation ={() => {isOpen = !isOpen}}>All Accounts</button>
	</li>
	{#if isOpen}
		<div class='mt-2 p-1 px-3 bg-white rounded-sm absolute z-30 w-max'>
			{#each accounts as account}
			<li class='text-zinc-900 w-full'>
				<button on:click|self={handleSelection(account)}>{account.institution_name} ******{account.mark}</button>
			</li>
			{/each}
		</div>
	{/if}
</ul>