<script>
	export let on = false
	export let label = 'Toggle'
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<!-- On: "bg-blue-600", Off: "bg-gray-200" -->
<div class="flex items-center space-x-3">
	<span class="ml-3" id="toggleLabel">
		<span class="text-sm font-medium text-gray-900"> {label} </span>
	</span>

	<button
		on:click={() => (on = !on)}
		type="button"
		aria-pressed="false"
		class="{on
			? 'bg-blue-600'
			: 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
	>
		<span class="sr-only">{label}</span>
		<!-- On: "translate-x-5", Off: "translate-x-0" -->
		<span
			class:translate-x-5={on}
			class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow ring-0"
		>
			<!-- On: "opacity-0 ease-out duration-100", Off: "opacity-100 ease-in duration-200" -->
			{#if !on}
				<span
					class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
					aria-hidden="true"
				>
					<svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
						<path
							d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
			{:else}
				<!-- On: "opacity-100 ease-in duration-200", Off: "opacity-0 ease-out duration-100" -->
				<span
					class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-100"
					aria-hidden="true"
				>
					<svg class="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 12 12">
						<path
							d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
						/>
					</svg>
				</span>
			{/if}
		</span>
	</button>
</div>
