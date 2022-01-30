<script>
	let accounts = [{mark: 1234, institution_name: 'Merrill Lynch'}]
	let isOpen = false
</script>

<div>
	<ul class='w-fit relative mb-6'>
		<li>
			<button on:click={() => {isOpen = !isOpen}}>All Accounts</button>
		</li>
		{#if isOpen}
			<div class='mt-2 p-1 px-3 bg-white rounded-sm absolute z-30 w-max'>
				{#each accounts as account}
				<li class='text-zinc-900 w-full'>
					<button>{account.institution_name} ******{account.mark}</button>
				</li>
				{/each}
			</div>
		{/if}
	</ul>
	<!-- Chart -->
</div>