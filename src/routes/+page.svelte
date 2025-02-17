<script>
	import { techCategories } from '$lib/index';
</script>

<div
	class="flex h-screen flex-col items-center justify-end bg-[url(/blade-runner-2049.jpg)] bg-cover bg-center"
>
	<h1 class="mb-2 text-2xl font-bold lg:text-5xl">Diego Avendaño</h1>
	<p class="mx-16 mb-20 text-lg sm:w-md">
		Full stack developer specialized in designing impactful e-commerce solutions, bridging
		technology and business needs.
	</p>
</div>

<div
	id="tools"
	class="flex h-screen flex-col items-center justify-center gap-3 bg-[url(/blade-runner.jpg)] bg-cover bg-center lg:gap-6"
>
	<h2 class="text-3xl font-bold">Technologies</h2>

	<div class="flex w-full flex-col justify-center gap-4 lg:flex-row lg:gap-32">
		{#each techCategories as [category, techs]}
			<div class="flex flex-col items-center gap-4">
				<h3 class="text-xl font-semibold">{category}</h3>
				<div class="flex gap-6">
					{#each techs as tech}
						<div class="flex flex-col items-center">
							<img class="h-14 w-14 object-contain" src={tech.image} alt={tech.name} />
							<h4 class="text-center text-sm font-medium">{tech.name}</h4>
						</div>
					{/each}
				</div>
			</div>
		{/each}
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
		<a class="btn btn-outline rounded-4xl" href="/">Repo</a>
	</div>
</div>

<div
	id="barber"
	class="flex h-screen flex-col items-center justify-center bg-[url(/runner.jpg)] bg-cover bg-center"
>
	<h2 class="text-2xl font-bold">Barber Shop</h2>
	<p class="px-8">Appointment Booking System</p>
	<div class="mt-3">
		<a class="btn btn-outline mr-2 rounded-4xl" href="https://nirvana-nails.vercel.app/">Live</a>
		<a class="btn btn-outline rounded-4xl" href="/">Repo</a>
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
		<a class="btn btn-outline rounded-4xl" href="/">Repo</a>
	</div>
</div>

<div
	id="about"
	class="flex h-screen flex-col items-center justify-end bg-[url(/blade.webp)] bg-cover bg-center"
>
	<h2 class="text-2xl font-bold">About me</h2>
	<p class=" mx-6 mt-2 mb-10 lg:w-lg">
		While I'm proficient in creating visually appealing front-end interfaces, my true passion lies
		in developing the core logic and infrastructure that powers web applications. I specialize in
		SvelteKit and MongoDB, with a particular focus on implementing robust OAuth 2.0 authentication
		systems. I thrive on solving complex technical challenges and building web applications that
		deliver tangible value to users and businesses.
	</p>
</div>

<div
	id="contact"
	class="flex h-screen flex-col items-center justify-end bg-[url(/k-joi.jpg)] bg-cover bg-center"
>
	<h2 class="mb-2 text-2xl font-bold">Contact</h2>
	<p class="mb-20">digago7@gmail.com</p>
</div>
