<script>
	let value
</script>

<div class="flex bg-custom-search rounded py-2 pl-4 pr-2">
	<input class="w-56" bind:value type="text" name="search" autocomplete="off"/>
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
	</svg>
</div>

<style>
	input {
		background: none;
		border: none;
	}

	input:focus-visible {
		outline: none;
	}
</style>