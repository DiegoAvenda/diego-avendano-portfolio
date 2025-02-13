<script>
	import { frontend } from '$lib/index';
	import { backend } from '$lib/index';
	import { tools } from '$lib/index';
</script>

<div
	class="flex h-screen flex-col items-center bg-[url(/blade-runner-2049.jpg)] bg-cover bg-center"
>
	<h1 class="mt-20 text-2xl font-bold">Diego Avendaño</h1>
	<h2 class="my-1 text-xl font-bold">Full stack developer</h2>
	<p class="mx-6">
		I specialize in building scalable, high-performance e-commerce platforms with a focus on clean
		architecture and exceptional user experience.
	</p>
</div>

<div
	id="tools"
	class="flex h-screen flex-col items-center justify-center gap-6 bg-[url(/blade-runner.jpg)] bg-cover bg-center px-4"
>
	<h2 class="text-3xl font-bold">Technologies</h2>

	<div class="flex max-w-4xl flex-wrap justify-center gap-8">
		<div class="flex flex-col items-center gap-4">
			<h3 class="text-xl font-semibold">Frontend</h3>
			<div class="grid grid-cols-3 gap-6">
				{#each frontend as front}
					<div class="flex flex-col items-center">
						<img class="h-14 w-14 object-contain" src={front.image} alt={front.name} />
						<h4 class="text-center text-sm font-medium">{front.name}</h4>
					</div>
				{/each}
			</div>
		</div>

		<div class="flex flex-col items-center gap-4">
			<h3 class="text-xl font-semibold">Backend</h3>
			<div class="grid grid-cols-3 gap-6">
				{#each backend as back}
					<div class="flex flex-col items-center">
						<img class="h-14 w-14 object-contain" src={back.image} alt={back.name} />
						<h4 class="text-center text-sm font-medium">{back.name}</h4>
					</div>
				{/each}
			</div>
		</div>

		<div class="flex flex-col items-center gap-4">
			<h3 class="text-xl font-semibold">Tools</h3>
			<div class="grid grid-cols-3 gap-6">
				{#each tools as tool}
					<div class="flex flex-col items-center">
						<img class="h-14 w-14 object-contain" src={tool.image} alt={tool.name} />
						<h4 class="text-center text-sm font-medium">{tool.name}</h4>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<div
	id="novastra"
	class="flex h-screen flex-col items-center justify-center bg-[url(/joi.webp)] bg-cover bg-center"
>
	<h2 class="text-2xl font-bold">Novastra</h2>
	<p class="px-8">Tarot readings</p>
	<div class="mt-3">
		<a class="btn btn-outline mr-2 rounded-4xl" href="https://novaastraco.vercel.app/">Live</a>
		<a class="btn btn-outline mr-2 rounded-4xl" href="/">Repo</a>
	</div>
</div>

<div
	id="barber"
	class="flex h-screen flex-col items-center justify-center bg-[url(/runner.jpg)] bg-cover bg-center"
>
	<h2 class="text-2xl font-bold">Barber Shop</h2>
	<p class="px-8">Appointments system</p>
	<div class="mt-3">
		<a class="btn btn-outline mr-2 rounded-4xl" href="https://nirvana-nails.vercel.app/">Live</a>
		<a class="btn btn-outline mr-2 rounded-4xl" href="/">Repo</a>
	</div>
</div>

<div
	id="burger"
	class="flex h-screen flex-col items-center justify-end bg-[url(/blade-runner-joi.webp)] bg-cover bg-center"
>
	<h2 class="text-2xl font-bold">Svelte Burger</h2>
	<p class="px-8">Dark Kitchen</p>
	<div class="mt-3 mb-18">
		<a class="btn btn-outline mr-2 rounded-4xl" href="https://chucky-burgers.vercel.app/">Live</a>
		<a class="btn btn-outline mr-2 rounded-4xl" href="/">Repo</a>
	</div>
</div>

<div
	id="about"
	class="flex h-screen flex-col items-center justify-center bg-[url(/blade.webp)] bg-cover bg-center"
>
	<h2 class="text-2xl font-bold">About me</h2>
	<p class="mt-2 px-8">
		I’m passionate about building efficient, scalable, and user-friendly applications. With
		experience in multiple e-commerce platforms, I prioritize performance, security, and seamless
		user interactions. My goal is to create well-structured solutions that deliver real value.
	</p>
</div>

<div
	id="contact"
	class="flex h-screen flex-col items-center justify-end bg-[url(/k-joi.jpg)] bg-cover bg-center"
>
	<h2 class="mb-2 text-2xl font-bold">Contact</h2>
	<p class="mb-20">digago7@gmail.com</p>
</div>
