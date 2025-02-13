<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<div class="text-white">
	<Navbar />
	{@render children()}
</div>
