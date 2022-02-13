<script>
	import OverviewChart from './_components/OverviewChart.svelte'
	import OverviewData from './_components/OverviewData.svelte'
	import HighlightedPositions from './_components/HighlightedPositions.svelte'
	import AccountDropdown from '$components/AccountDropdown.svelte'

	let selected_account
</script>

<div class='w-5/6 mx-auto mt-3'>
	<AccountDropdown bind:selected_account/>
	<OverviewChart {selected_account}/>
	<OverviewData {selected_account}/>
	<HighlightedPositions {selected_account}/>
</div>