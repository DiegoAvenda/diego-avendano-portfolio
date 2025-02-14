const technologies = {
	frontend: [
		{
			name: 'Sveltekit',
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
	],
	backend: [
		{
			name: 'MongoDB',
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
	],
	tools: [
		{
			name: 'Stripe',
			image: '/logos/stripe.png'
		},
		{
			name: 'Git',
			image: '/logos/git.png'
		},
		{
			name: 'MapBox',
			image: '/logos/mapbox.svg'
		}
	]
};

export const techCategories = Object.entries(technologies);
