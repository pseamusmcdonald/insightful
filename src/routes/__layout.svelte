<script>
	import '../app.css'
	import { user } from '../stores/user'
	import { session, page } from '$app/stores'

	if ($session != null) {
		$user = JSON.parse($session).user
	}

	$: segment = $page.url.pathname.split('/')[1]
</script>

{#if segment == 'app'}
	<main>
		<slot />
	</main>
{:else}
	<header></header>
	<main>
		<slot />
	</main>
	<footer class="text-center py-4">&copy; Insightful</footer>
{/if}
