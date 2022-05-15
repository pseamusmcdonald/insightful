<script>
	import { onMount } from 'svelte'
	import { fade } from "svelte/transition"
	import { clickOutside } from '$lib/helpers'
	import { Accounts } from '$lib/db'

	export let selected_account

	let accounts = []
	let isOpen = false

	onMount(async () => {
		accounts = await Accounts.getUserAccounts()
	})

	const handleSelection = (account) => {
		selected_account = account
		isOpen = !isOpen
	}
</script>

<ul class='w-fit relative' use:clickOutside on:outclick={() => {isOpen = false}}>
	<button
	on:click|stopPropagation={() => {isOpen = !isOpen}}
	class='flex items-center gap-2'	
	>
		<span>{selected_account ? selected_account.name : 'All Accounts'}</span>
		<span>
			<div class='icon' aria-expanded={isOpen}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</div>
		</span>
	</button>
	{#if isOpen}
		<div 
			class='mt-2 bg-custom-menu rounded shadow-xl absolute z-30 divide-y max-h-56 overflow-y-auto'
			transition:fade={{duration: 150}}
		>
			<li>
				<button
					on:click={() => handleSelection(null)}
					class='text-left w-full text-sm min-w-max px-4 py-3 hover:bg-custom-hover'
					class:selected={selected_account == null}
				>All Acounts</button>
			</li>
			{#each accounts as account}
				<li>
					<button
						on:click={handleSelection(account)}
						class='w-full text-left text-sm min-w-max px-4 py-3 hover:bg-custom-hover'
						class:selected={selected_account == account}
					>{account.name} ******{account.mask}</button>
				</li>
			{/each}
		</div>
	{/if}
</ul>

<style>
	.selected {
		@apply bg-custom-selected;
	}

	.icon {
		transition: .25s ease-in-out all;
	}

	[aria-expanded=true].icon { transform: rotate(-0.5turn); }

	*::-webkit-scrollbar {
		width: 8px;
	}
		
	*::-webkit-scrollbar-track {
		@apply rounded-md bg-zinc-300;
	}
	
	*::-webkit-scrollbar-thumb {
		@apply rounded-md bg-zinc-600 border-none;
	}
</style>