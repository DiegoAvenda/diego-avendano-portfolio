<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let container;
	let scene, camera, renderer, spaceGrid, stars;
	let particles = [];

	onMount(() => {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

		// Crear la malla deformada del espacio-tiempo
		const segments = 50;
		const geometry = new THREE.PlaneGeometry(40, 40, segments, segments);

		// Deformar la geometría para crear el efecto de curvatura
		const positions = geometry.attributes.position.array;
		for (let i = 0; i < positions.length; i += 3) {
			const x = positions[i];
			const z = positions[i + 2];
			const distance = Math.sqrt(x * x + z * z);

			// Función de deformación que crea el efecto de hundimiento
			const deformation = Math.max(0, 1 / (1 + Math.exp((distance - 8) * 0.5)));
			positions[i + 1] = -15 * deformation; // y coordinate
		}

		const material = new THREE.MeshBasicMaterial({
			color: 0xffffff,
			wireframe: true,
			transparent: true,
			opacity: 0.5
		});

		spaceGrid = new THREE.Mesh(geometry, material);
		spaceGrid.rotation.x = -Math.PI / 2;
		scene.add(spaceGrid);

		// Sistema de partículas para las estrellas
		const starGeometry = new THREE.BufferGeometry();
		const starMaterial = new THREE.PointsMaterial({
			color: 0xffffff,
			size: 0.15,
			transparent: true
		});

		// Crear estrellas con posiciones aleatorias
		for (let i = 0; i < 2000; i++) {
			const particle = {
				position: new THREE.Vector3(
					THREE.MathUtils.randFloatSpread(80),
					THREE.MathUtils.randFloatSpread(40),
					THREE.MathUtils.randFloatSpread(80)
				),
				velocity: new THREE.Vector3(0, 0, 0),
				originalY: 0
			};
			particles.push(particle);
		}

		// Actualizar posiciones de las estrellas
		function updateStarField() {
			const positions = new Float32Array(particles.length * 3);

			particles.forEach((particle, i) => {
				const x = particle.position.x;
				const z = particle.position.z;
				const distance = Math.sqrt(x * x + z * z);

				// Centro del agujero negro
				const centerPoint = new THREE.Vector3(0, 0, 0);
				const direction = centerPoint.clone().sub(particle.position);

				// Calcular la fuerza gravitacional basada en la distancia al centro
				const forceMagnitude = 0.1 / (1 + Math.exp((distance - 8) * 0.3));
				direction.normalize();

				// Aplicar la fuerza solo si la estrella está lo suficientemente cerca
				if (distance < 15) {
					particle.velocity.add(direction.multiplyScalar(forceMagnitude));
					particle.position.add(particle.velocity);
				}

				// Si la estrella está muy cerca del centro, reposicionarla
				if (distance < 2) {
					particle.position.set(
						THREE.MathUtils.randFloatSpread(80),
						THREE.MathUtils.randFloatSpread(40),
						THREE.MathUtils.randFloatSpread(80)
					);
					particle.velocity.set(0, 0, 0);
				}

				// Aplicar la deformación del espacio a las estrellas
				const deformation = Math.max(0, 1 / (1 + Math.exp((distance - 8) * 0.5)));
				particle.position.y -= deformation * 0.1;

				positions[i * 3] = particle.position.x;
				positions[i * 3 + 1] = particle.position.y;
				positions[i * 3 + 2] = particle.position.z;
			});

			starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
		}

		stars = new THREE.Points(starGeometry, starMaterial);
		scene.add(stars);

		// Posicionar la cámara
		camera.position.set(0, 20, 40);
		camera.lookAt(0, 0, 0);

		// Animación
		function animate() {
			requestAnimationFrame(animate);

			// Rotar suavemente la escena
			scene.rotation.y += 0.001;

			// Actualizar posiciones de las estrellas
			updateStarField();

			renderer.render(scene, camera);
		}

		// Manejar el redimensionamiento de la ventana
		function handleResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		window.addEventListener('resize', handleResize);
		animate();

		return () => {
			window.removeEventListener('resize', handleResize);
			container.removeChild(renderer.domElement);
		};
	});
</script>

// BlackHole.svelte
<div bind:this={container}></div>

<style>
	div {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-color: #000;
	}
</style>
