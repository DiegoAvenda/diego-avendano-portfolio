<script>
	let isOpen = $state(false);

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<nav class="fixed z-1 mt-2 flex h-14 w-full items-center justify-between">
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
	<h1 class=" mr-4 font-bold"><a href="/">Diego Avendaño</a></h1>
</nav>

<div class="buttom-0 fixed top-0 h-full w-full bg-black sm:w-96" class:hidden={!isOpen}>
	<ul class="mt-28 ml-4 space-y-4 text-4xl font-bold">
		<li><a onclick={() => toggle()} href="#tools">Technologies</a></li>
		<li><a onclick={() => toggle()} href="#novastra">NovaastraCo</a></li>
		<li><a onclick={() => toggle()} href="#burger">Svelte Burger</a></li>
		<li><a onclick={() => toggle()} href="#barber">Barber shop</a></li>
		<li><a onclick={() => toggle()} href="#about">About</a></li>
		<li><a onclick={() => toggle()} href="#contact">Contact</a></li>
	</ul>
</div>
