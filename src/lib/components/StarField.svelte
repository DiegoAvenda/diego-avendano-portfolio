<!-- StarField.svelte -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	let container;
	let camera, scene, renderer;
	let stars = [];
	let frameId;

	const init = () => {
		// Configuración de la escena
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0xffffff);
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

		// Crear estrellas
		const starsGeometry = new THREE.BufferGeometry();
		const starsMaterial = new THREE.PointsMaterial({
			color: 0x000000,
			size: 2,
			transparent: true
		});

		const starsVertices = [];
		for (let i = 0; i < 10000; i++) {
			const x = (Math.random() - 0.5) * 2000;
			const y = (Math.random() - 0.5) * 2000;
			const z = (Math.random() - 0.5) * 2000;
			starsVertices.push(x, y, z);
		}

		starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
		stars = new THREE.Points(starsGeometry, starsMaterial);
		scene.add(stars);

		camera.position.z = 500;

		// Manejar el cambio de tamaño de la ventana
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	};

	const animate = () => {
		frameId = requestAnimationFrame(animate);

		// Rotar las estrellas
		stars.rotation.x += 0.0001;
		stars.rotation.y += 0.0001;

		// Mover las estrellas hacia adelante
		camera.position.z -= 0.1;
		if (camera.position.z < -1000) {
			camera.position.z = 500;
		}

		renderer.render(scene, camera);
	};

	onMount(() => {
		const cleanup = init();
		animate();

		return () => {
			cleanup();
			cancelAnimationFrame(frameId);
			if (renderer) {
				renderer.dispose();
			}
		};
	});
</script>

<div bind:this={container} class="starfield"></div>

<style>
	.starfield {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
