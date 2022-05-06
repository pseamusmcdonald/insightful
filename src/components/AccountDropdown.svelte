<script>
	import { onMount } from 'svelte'
	import { fade } from "svelte/transition"
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
	<div class='flex items-center gap-2'>
		<button on:click|stopPropagation={() => {isOpen = !isOpen}}>{selected_account ? selected_account.name : 'All Accounts'}</button>
		<div class='icon' aria-expanded={isOpen}>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		</div>
	</div>
	{#if isOpen}
		<div class='mt-2 p-1 px-3 bg-white rounded-md absolute z-30' transition:fade={{duration: 150}}>
			{#each accounts as account}
			<li class='text-zinc-900 min-w-max'>
				<button on:click={handleSelection(account)}>{account.name} ******{account.mask}</button>
			</li>
			{/each}
		</div>
	{/if}
</ul>

<style>
	.icon {
		transition: .25s ease-in-out all;
	}

	[aria-expanded=true].icon { transform: rotate(-0.5turn); }
</style>