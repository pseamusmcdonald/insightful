<script>
	import { onMount } from 'svelte'
	import { initializeChart, updateChart, destroyChart } from '$lib/d3Utils'

	export let data

	onMount(() => {
		initializeChart(data)
	})

	afterUpdate(() => {
		updateChart(data)
	})

	onDestroy(() => {
		destroyChart()
	})
</script>

<div id="chart-wrapper" class='w-full h-full'>
	<svg id="chart"/>
</div>