<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let container;

	const frontend = [
		{ name: 'svelte', image: '/logos/svelte.png', orbitRadius: 5, rotationSpeed: 0.0003 },
		{ name: 'Tailwind CSS', image: '/logos/tailwind.png', orbitRadius: 8, rotationSpeed: 0.05 },
		{ name: 'Javascript', image: '/logos/javascript.png', orbitRadius: 11, rotationSpeed: 0.003 }
	];

	const backend = [
		{ name: 'mongodb', image: '/logos/mongodb.jpg', orbitRadius: 15, rotationSpeed: 0.002 },
		{ name: 'Node Js', image: '/logos/node.png', orbitRadius: 18, rotationSpeed: 0.0015 },
		{ name: 'Lucia Auth', image: '/logos/lucia.png', orbitRadius: 21, rotationSpeed: 0.001 }
	];

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

		const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
		const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, emissive: 0xffff00 });
		const sun = new THREE.Mesh(sunGeometry, sunMaterial);
		scene.add(sun);

		const textureLoader = new THREE.TextureLoader();

		const createPlanet = (tech) => {
			const orbit = new THREE.Line(
				new THREE.BufferGeometry().setFromPoints(
					new THREE.Path().absarc(0, 0, tech.orbitRadius, 0, Math.PI * 2, true).getPoints(90)
				),
				new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.3 })
			);
			orbit.rotation.x = Math.PI / 2;
			scene.add(orbit);

			textureLoader.load(tech.image, (texture) => {
				const planetMaterial = new THREE.MeshBasicMaterial({
					map: texture,
					transparent: true,
					side: THREE.DoubleSide
				});
				const planetGeometry = new THREE.CircleGeometry(1, 32);
				const planet = new THREE.Mesh(planetGeometry, planetMaterial);
				planet.position.x = tech.orbitRadius;
				tech.planet = planet; // Store the planet in the tech object
				scene.add(planet);
			});
		};

		[...frontend, ...backend].forEach(createPlanet);

		camera.position.z = 10; // Increased z for better view
		camera.position.y = 25;
		camera.lookAt(scene.position);

		let time = 0;
		let cameraTime = 0; // Separate time for camera rotation

		const animate = () => {
			requestAnimationFrame(animate);

			time += 0.01;
			cameraTime += 0.001; // Slower camera rotation

			[...frontend, ...backend].forEach((tech) => {
				if (tech.planet) {
					// Check if the planet has loaded
					tech.planet.position.x = Math.cos(time * tech.rotationSpeed) * tech.orbitRadius;
					tech.planet.position.z = Math.sin(time * tech.rotationSpeed) * tech.orbitRadius;
					tech.planet.lookAt(camera.position);
				}
			});

			const cameraRadius = 60; // Increased camera radius
			camera.position.x = Math.cos(cameraTime) * cameraRadius;
			camera.position.z = Math.sin(cameraTime) * cameraRadius;
			camera.lookAt(scene.position);

			renderer.render(scene, camera);
		};

		animate();

		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			container.removeChild(renderer.domElement);
		};
	});
</script>

<div bind:this={container} class="h-screen w-full"></div>
