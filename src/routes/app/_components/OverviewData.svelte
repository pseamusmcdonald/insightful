<script>
	export let selected_account
</script>

<div class='mb-4'>
	<div class='flex justify-between border-b border-zinc-500 py-2'>
		<div>Overview</div>
		<button>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
				<path d="M1.66675 15H7.50008V16.6667H1.66675V15ZM1.66675 9.16668H9.16675V10.8333H1.66675V9.16668ZM1.66675 3.33334H18.3334V5.00001H1.66675V3.33334ZM17.2284 10.8542L18.1917 10.5283L19.0251 11.9717L18.2617 12.6425C18.3578 13.0981 18.3578 13.5686 18.2617 14.0242L19.0251 14.695L18.1917 16.1383L17.2284 15.8125C16.8867 16.1208 16.4801 16.3583 16.0326 16.5042L15.8334 17.5H14.1667L13.9667 16.5033C13.5245 16.3588 13.1174 16.1232 12.7717 15.8117L11.8084 16.1383L10.9751 14.695L11.7384 14.0242C11.6423 13.5686 11.6423 13.0981 11.7384 12.6425L10.9751 11.9717L11.8084 10.5283L12.7717 10.8542C13.1134 10.5458 13.5201 10.3083 13.9676 10.1625L14.1667 9.16668H15.8334L16.0334 10.1633C16.4801 10.3083 16.8867 10.5467 17.2284 10.855V10.8542ZM15.0001 15C15.4421 15 15.866 14.8244 16.1786 14.5119C16.4912 14.1993 16.6667 13.7754 16.6667 13.3333C16.6667 12.8913 16.4912 12.4674 16.1786 12.1548C15.866 11.8423 15.4421 11.6667 15.0001 11.6667C14.5581 11.6667 14.1341 11.8423 13.8216 12.1548C13.509 12.4674 13.3334 12.8913 13.3334 13.3333C13.3334 13.7754 13.509 14.1993 13.8216 14.5119C14.1341 14.8244 14.5581 15 15.0001 15Z" fill="#F9F9F9"/>
			</svg>
		</button>
	</div>
	<div class='flex py-4 divide-x'>
		<div class='metricBlock flex flex-col gap-2 w-1/3'>
			<div class='flex justify-between text-sm font-bold'>
				<div>Net Liquidity</div>
				<div>$255,xxx</div>
			</div>
			<div class='flex justify-between text-sm'>
				<div>Equity</div>
				<div>$150,xxx</div>
			</div>
			<div class='flex justify-between text-sm'>
				<div>Cash</div>
				<div>$105,xxx</div>
			</div>
		</div>
		<div class='metricBlock flex flex-col gap-2 w-1/3'>
			<div class='flex justify-between text-sm'>
				<div>Net Liquidity</div>
				<div>$255,xxx</div>
			</div>
			<div class='flex justify-between text-sm'>
				<div>Net Liquidity</div>
				<div>$255,xxx</div>
			</div>
			<div class='flex justify-between text-sm'>
				<div>Net Liquidity</div>
				<div>$255,xxx</div>
			</div>
		</div>
		<div class='metricBlock flex flex-col gap-2 w-1/3'>
			<div class='flex justify-between text-sm'>
				<div>Net Liquidity</div>
				<div>$255,xxx</div>
			</div>
			<div class='flex justify-between text-sm'>
				<div>Net Liquidity</div>
				<div>$255,xxx</div>
			</div>
			<div class='flex justify-between text-sm'>
				<div>Net Liquidity</div>
				<div>$255,xxx</div>
			</div>
		</div>
	</div>
</div>


<style>
	.metricBlock {
		padding: 0 2rem;
	}
	.metricBlock:first-of-type {
		padding-left: 0;
	}

	.metricBlock:last-of-type {
		padding-right: 0;
	}
</style>