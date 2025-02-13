<script>
	const frontend = [
		{
			name: 'svelte',
			image: '/logos/svelte.png'
		},

		{
			name: 'Tailwind CSS',
			image: '/logos/tailwind.png'
		},
		{
			name: 'Javascript',
			image: '/logos/javascript.png'
		}
	];

	const backend = [
		{
			name: 'mongodb',
			image: '/logos/mongodb.jpg'
		},
		{
			name: 'Node Js',
			image: '/logos/node.png'
		},
		{
			name: 'Lucia Auth',
			image: '/logos/lucia.png'
		}
	];
</script>

<div class="flex h-screen flex-col items-center bg-[url(/blade-runner.jpg)] bg-cover">
	<h1 class="mt-28 text-2xl font-bold">Diego Avendaño</h1>
	<h2 class="my-1 text-xl font-bold">Full stack developer</h2>
	<p class="mx-6">
		I specialize in building functional, scalable, and high-performance e-commerce with a focus on
		clean architecture and great user experience.
	</p>
	<button class="btn mt-3">Projects</button>
</div>

<div
	class="flex h-screen flex-col items-center justify-center gap-6 bg-[url(/blade.webp)] bg-cover bg-center px-4"
>
	<h2 class="text-3xl font-bold">Technologies</h2>

	<div class="flex max-w-4xl flex-wrap justify-center gap-8">
		<!-- Frontend Section -->
		<div class="flex flex-col items-center gap-4">
			<h3 class="text-xl font-semibold">Frontend</h3>
			<div class="grid grid-cols-3 gap-6">
				{#each frontend as front}
					<div class="flex flex-col items-center">
						<img class="h-24 w-24 object-contain" src={front.image} alt={front.name} />
						<h4 class="text-center text-sm font-medium">{front.name}</h4>
					</div>
				{/each}
			</div>
		</div>

		<!-- Backend Section -->
		<div class="flex flex-col items-center gap-4">
			<h3 class="text-xl font-semibold">Backend</h3>
			<div class="grid grid-cols-3 gap-6">
				{#each backend as back}
					<div class="flex flex-col items-center">
						<img class="h-24 w-24 object-contain" src={back.image} alt={back.name} />
						<h4 class="text-center text-sm font-medium">{back.name}</h4>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<div
	class="flex h-screen flex-col items-center justify-center bg-[url(/joi.webp)] bg-cover bg-center"
>
	<h2 class="text-2xl font-bold">Novastra</h2>
	<p class="px-8">Tarot readings</p>
	<div class="mt-3">
		<a href="https://novaastraco.vercel.app/"><button class="btn mr-2 rounded-4xl">Live</button></a>
		<button class="btn rounded-4xl">Repo</button>
	</div>
</div>

<div
	class="flex h-screen flex-col items-center justify-end bg-[url(/blade-runner-joi.webp)] bg-cover bg-center"
>
	<h2 class="text-2xl font-bold">Svelte Burger</h2>
	<p class="px-8">Dark Kitchen</p>
	<div class="mt-3 mb-14">
		<a href="https://chucky-burgers.vercel.app/"
			><button class="btn mr-2 rounded-4xl">Live</button></a
		>
		<button class="btn btn-xs rounded-4xl">Repo</button>
	</div>
</div>

<div class="flex h-screen flex-col items-center bg-[url(/runner.jpg)] bg-cover bg-center">
	<h2 class="mt-24 text-2xl font-bold">Barber Shop</h2>
	<p class="px-8">Appointments system</p>
	<div class="mt-3">
		<a href="https://nirvana-nails.vercel.app/"
			><button class="btn mr-2 rounded-4xl">Live</button></a
		>
		<button class="btn rounded-4xl">Repo</button>
	</div>
</div>

<div class="flex h-screen flex-col items-center bg-[url(/blade-runner-2049.jpg)] bg-top">
	<h2 class="mt-18 text-2xl font-bold lg:mt-32">About me</h2>
	<p class="px-8">
		I specialize in SvelteKit and MongoDB. I have a passion for building efficient, scalable, and
		user-friendly applications. I have experience developing multiple e-commerce platforms, focusing
		on performance, security, and seamless user interactions. My goal is to create functional,
		well-structured solutions that deliver real value.
	</p>
	<button class="btn mt-1 rounded-4xl">Live</button>
</div>
