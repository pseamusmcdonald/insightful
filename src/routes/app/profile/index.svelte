<script>
	import { getContext } from 'svelte'
	import Avatar from '$components/Avatar.svelte'

	const user = getContext('user')
</script>

<div class='flex flex-col gap-3'>
	<div>
		<div class='flex justify-between border-b border-zinc-500 py-1'>
			<h2 class='text-lg'>Profile</h2>
			<div>Edit your profile information below</div>
		</div>
		<div class='flex flex-col divide-y divide-zinc-500'>
			<div class='grid grid-cols-3 justify-between py-6'>
				<div class='w-fit justify-self-start'>Name</div>
				<div class='w-fit justify-self-center'>{`${$user.data.first_name} ${$user.data.last_name}`}</div>
				<button class='w-fit justify-self-end font-medium' class:disabled={true} disabled>Edit</button>
			</div>
			<div class='grid grid-cols-3 justify-between py-6'>
				<div class='w-fit justify-self-start'>Email</div>
				<div class='w-fit justify-self-center'>{$user.data.email}</div>
				<button class='w-fit justify-self-end font-medium'>Edit</button>
			</div>
			<div class='grid grid-cols-3 justify-between py-6'>
				<div class='w-fit justify-self-start'>Phone Number</div>
				<div class='w-fit justify-self-center'>{$user.data.phone || 'N/A'}</div>
				<button class='w-fit justify-self-end font-medium'>Edit</button>
			</div>
			<div class='grid grid-cols-3 items-center justify-between py-6'>
				<div class='w-fit h-fit justify-self-start'>Image</div>
				<div class='w-fit justify-self-center'>
					<Avatar size={75}/>
				</div>
				<button class='w-fit justify-self-end font-medium'>Edit</button>
			</div>
		</div>
	</div>
</div>

<style>
	.disabled {
		@apply text-zinc-400;
	}
</style>