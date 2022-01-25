<script>
	import { page } from '$app/stores'
</script>

<div class="flex flex-col w-2/3 m-auto">
	<div class="flex flex-col mb-8">
		<h1 class='py-3 mb-6 text-2xl font-normal border-b border-zinc-500'>Settings</h1>
		<ul class="flex gap-8">
			<li><a
				href='/app/profile'
				class='pb-1.5'
				class:selected={$page.url.pathname == '/app/profile'}
			>General</a></li>
			<li><a 
				href='/app/profile/accounts'
				class='pb-1.5'
				class:selected={$page.url.pathname == '/app/profile/accounts'}
			>Accounts</a></li>
			<li><a
				href='/app/profile/notifications'
				class='pb-1.5'
				class:selected={$page.url.pathname == '/app/profile/notifications'}
			>Notifications</a></li>
			<li><a
				href='/app/profile/preferences'
				class='pb-1.5'
				class:selected={$page.url.pathname == '/app/profile/preferences'}
			>Preferences</a></li>
		</ul>
	</div>
	<slot></slot>
</div>

<style>
	.selected {
		@apply border-b border-zinc-500;
	}
</style>