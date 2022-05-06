<script>
	import { onMount } from 'svelte'
	import { clickOutside } from '$lib/helpers'
	import db from '$lib/db'

	export let selected_account

	let accounts = [{mark: 1234, institution_name: 'Merrill Lynch', id: 1213}]
	let isOpen = false

	onMount(async () => {
		accounts = await db.accounts.getUserAccounts()
	})

	const handleSelection = (account) => {
		selected_account = account
		isOpen = !isOpen
	}
</script>

<ul class='w-fit relative mb-6' use:clickOutside on:outclick={() => {isOpen = false}}>
	<button on:click|stopPropagation={() => {isOpen = !isOpen}}>All Accounts</button>
	{#if isOpen}
		<div class='mt-2 p-1 px-3 bg-white rounded-sm absolute z-30'>
			{#each accounts as account}
			<li class='text-zinc-900 min-w-max'>
				<button on:click={handleSelection(account)}>{account.name} ******{account.mask}</button>
			</li>
			{/each}
		</div>
	{/if}
</ul>