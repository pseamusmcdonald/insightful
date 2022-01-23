<script>
	import Sidenav from './_components/Sidenav.svelte'
</script>

<div class="flex h-full w-full">
	<Sidenav />
	<div class="w-4/5 h-full">
		<slot></slot>
	</div>
</div>