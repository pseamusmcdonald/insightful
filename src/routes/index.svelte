<script>
import { goto } from '$app/navigation';

	import { Email_List } from '$lib/db'

	let email_data = {
		email: '',
	}
	
	const handleFormSubmit = async () => {
		await Email_List.set(email_data)
		email_data.email = ''
		goto('/signup-success')
	}
</script>

<div class='w-4/5 m-auto'>
	<h2 class='text-right text-4xl leading-relaxed mb-20'>Tired of updating spreadsheets to track your positions?
	<br/>Want better tools for prospecting?</h2>

	<div>
		<form on:submit={handleFormSubmit} class='flex flex-col w-fit'>
			<label for="email" class='text-lg mb-4'>Join our mailing list for pre-launch access.</label>
			<div class='flex justify-between border-b'>
				<input
					class='pl-2 py-3 grow'
					bind:value={email_data.email}
					type='email'
					name='email'
					placeholder='enter your email address'
					required
				/>
				<button class='px-2 py-1' type='submit'>Submit</button>
			</div>
		</form>
	</div>
</div>

<style>
	
	input {
		@apply bg-inherit;
	}
	
	input:focus-visible {
		outline: none;
	}
	
	input:-webkit-autofill {
		background: none;
	}

	input:autofill {
		background: none;
	}
	
	input:-internal-autofill-selected {
		appearance: none !important;
		background: none !important;
		background-color: inherit !important;
		color: currentColor !important;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
			-webkit-box-shadow: 0 0 0px 1000px var(--background) inset !important;
			-webkit-text-stroke-color: var(--text) !important;
			-webkit-text-fill-color: var(--text) !important;
			border: none !important;
			outline: none !important;
	}
</style>