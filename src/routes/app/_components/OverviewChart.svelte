<script>
	let accounts = [{mark: 1234}]
	let isOpen = false
</script>

<ul class='w-fit'>
	<li>
		<button on:click={() => {isOpen = !isOpen}}>All Accounts</button>
	</li>
	{#if isOpen}
		<div class='bg-white'>
			{#each accounts as account}
			<li class='text-zinc-900'>
				<button>******{account.mark}</button>
			</li>
			{/each}
		</div>
	{/if}
</ul>