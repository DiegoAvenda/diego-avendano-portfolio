<script>
	let isOpen = $state(false);
</script>

<button
	onclick={() => (isOpen = !isOpen)}
	class="relative h-12 w-12 focus:outline-none"
	aria-label="Menu"
>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
		<!-- Primera línea -->
		<div
			class={[
				'absolute h-0.5 w-6 transform bg-black transition-all duration-300 ease-in-out',
				isOpen ? 'rotate-45' : '-translate-y-1.5'
			].join(' ')}
		></div>
		<!-- Segunda línea -->
		<div
			class={[
				'absolute h-0.5 w-6 transform bg-black transition-all duration-300 ease-in-out',
				isOpen ? '-rotate-45' : 'translate-y-1.5'
			].join(' ')}
		></div>
	</div>
</button>
