<script>
	const handleWebhookTest = async () => {
	const res =	await fetch('/app/api/plaid/test-webhook', {
		method: 'POST',
	})
	const data = await res.json()
	console.log(data)
	}
</script>

<button
	on:click={handleWebhookTest}
>TEST WEBHOOK</button>