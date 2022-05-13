<script>
	import { theme } from '$stores/theme'
	import Toggle from '$components/Toggle.svelte'

	let on = $theme === 'light' ? true : false

	const resolveThemeBool = (bool) => {
		if (bool) return 'light'
		return 'dark'
	}

	const handleLightMode = (bool) => {
		$theme = resolveThemeBool(bool)
	}

	$: handleLightMode(on)
</script>

<button
	type="button"
	class:onButton={on}
	class="bg-gray-200 relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-white rounded-full cursor-pointer transition-colors ease-in-out duration-200"
	role="switch"
	on:click={() => on = !on}
>
  <span class="sr-only">Use setting</span>
	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-0 top-0 bottom-0 m-auto z-0 ml-1 stroke-zinc-50" fill="none" viewBox="0 0 24 24" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
	</svg>
  <span
		aria-hidden="true"
		class:onSpan={on}
		class="translate-x-0 pointer-events-none inline-block h-6 w-6 z-10 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
	></span>
	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute right-0 top-0 bottom-0 m-auto mr-1 stroke-zinc-800 z-0" fill="none" viewBox="0 0 24 24" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
	</svg>
</button>

<style>
	.onButton {
		@apply bg-zinc-700 border-zinc-900;
	}

	.onSpan {
		@apply translate-x-7;
	}
</style>