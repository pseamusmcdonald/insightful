<script>
	import { writable } from 'svelte/store'
	import { setContext } from 'svelte'
	import OverviewChart from './_components/OverviewChart.svelte'
	import OverviewData from './_components/OverviewData.svelte'
	import HighlightedPositions from './_components/HighlightedPositions.svelte'
	import AccountDropdown from '$components/AccountDropdown.svelte'
	import { Accounts } from '$lib/db'

	let selected_account

	const page_data = writable({
		updating: true,
	})
	
	setContext('page_data', page_data)

	$: updatePageData($page_data.updating)
	
	const updatePageData = async () => {
		if ($page_data.updating) {
			await Accounts.getUserAccounts()
				.then(data => $page_data = {...$page_data, ...data})
			$page_data.updating = false
		}
	}
</script>

<div class='w-5/6 mx-auto mt-3'>
	<div class='mb-4'>
		<AccountDropdown bind:selected_account/>
	</div>
	<OverviewChart {selected_account}/>
	<OverviewData {selected_account}/>
	<HighlightedPositions {selected_account}/>
</div>