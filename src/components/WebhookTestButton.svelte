<script>
	import { testWebhook } from '$lib/plaid/webhook_helpers'
</script>

<button
	on:click={testWebhook()}
>TEST WEBHOOK</button>