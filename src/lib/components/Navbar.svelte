<script>
	let isOpen = $state(false);

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<nav class="fixed z-2 mt-2 flex h-14 w-full items-center justify-between">
	<button onclick={() => (isOpen = !isOpen)} class="relative h-12 w-12" aria-label="Menu">
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<div
				class={[
					'absolute h-0.5 w-6 transform bg-white transition-all duration-300 ease-in-out',
					isOpen ? 'rotate-45' : '-translate-y-1.5'
				].join(' ')}
			></div>
			<div
				class={[
					'absolute h-0.5 w-6 transform bg-white transition-all duration-300 ease-in-out',
					isOpen ? '-rotate-45' : 'translate-y-1.5'
				].join(' ')}
			></div>
		</div>
	</button>
	<a class="mr-4" href="/">Diego Avendaño</a>
</nav>

<div class="fixed h-full w-full bg-black sm:w-96 lg:mx-auto lg:w-fit" class:hidden={!isOpen}>
	<ul class="mx-4 mt-28 space-y-4 text-4xl font-bold lg:mx-12 lg:text-6xl">
		<li><a onclick={() => toggle()} href="#tools">Technologies</a></li>
		<li><a onclick={() => toggle()} href="#novastra">NovaastraCo</a></li>
		<li><a onclick={() => toggle()} href="#burger">Svelte Burger</a></li>
		<li><a onclick={() => toggle()} href="#barber">Barber shop</a></li>
		<li><a onclick={() => toggle()} href="#about">About</a></li>
		<li><a onclick={() => toggle()} href="#contact">Contact</a></li>
	</ul>
</div>
