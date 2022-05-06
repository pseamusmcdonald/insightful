<script>
	import Sidenav from './_components/Sidenav.svelte'
</script>

<div class="flex max-h-full w-full">
	<Sidenav />
	<div class="w-4/5 h-full py-6 overflow-y-auto">
		<slot></slot>
	</div>
</div>