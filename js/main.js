//import { OBJLoader } from '/OBJLoader.js';

import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.137.5-HJEdoVYPhjkiJWkt6XIa/mode=imports/optimized/three.js';

const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	const loader = new THREE.TextureLoader();
	const bgTexture = loader.load('https://r105.threejsfundamentals.org/threejs/resources/images/daikanyama.jpg');
	scene.background = bgTexture;
	
	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#bg'),
	});
	
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.position.setZ(30);
	
	renderer.render(scene, camera);
	
	const geometry = new THREE.TorusGeometry(10,3,16,100);
	const material = new THREE.MeshStandardMaterial( { color: 0xff6347} );
	const torus = new THREE.Mesh(geometry, material);
	
	scene.add(torus);
	
	const pointLight = new THREE.PointLight(0xffffff);
	pointLight.position.set(5,5,5);
	
	const ambientLight = new THREE.AmbientLight(0xffffff);
	scene.add(pointLight, ambientLight);
	
	const lightHelper = new THREE.PointLightHelper(pointLight);
	const gridHelper = new THREE.GridHelper(200,50);
	scene.add(lightHelper, gridHelper);
	
	//const controls = new OrbitControls(camera, renderer.domElement);
	
	function addStar() {
		const geometry = new THREE.SphereGeometry(0.25, 24, 24);
		const material = new THREE.MeshStandardMaterial({color:0xffffff});
		const star = new THREE.Mesh(geometry, material);
	
		const[x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
	
		star.position.set(x,y,z);
		scene.add(star);
	}
	
	Array(200).fill().forEach(addStar);
	
	const jeffTexture = new THREE.TextureLoader().load('img/jeff.png');
	const jeff = new THREE.Mesh(
		new THREE.BoxGeometry(3,3,3),
		new THREE.MeshStandardMaterial({map: jeffTexture,}),
	);
	scene.add(jeff);

	const moonTexture = new THREE.TextureLoader().load('img/jeff.png');

	const moon = new THREE.Mesh(
	new THREE.SphereGeometry(3, 32, 32),
	new THREE.MeshStandardMaterial({
		map: moonTexture,
	})
	);

	scene.add(moon);

	moon.position.z = 30;
	moon.position.setX(-10);

	jeff.position.z = -5;
	jeff.position.x = 2;

	// Scroll Animation

	function moveCamera() {
	const t = document.body.getBoundingClientRect().top;
	moon.rotation.x += 0.05;
	moon.rotation.y += 0.075;
	moon.rotation.z += 0.05;

	jeff.rotation.y += 0.01;
	jeff.rotation.z += 0.01;

	camera.position.z = t * -0.01;
	camera.position.x = t * -0.0002;
	camera.rotation.y = t * -0.0002;
	}

	document.body.onscroll = moveCamera;
	moveCamera();

	const objloader = new THREE.OBJLoader();

	// load a resource
	objloader.load(
		// resource URL
		'obj/Mysterious.obj',
		// called when resource is loaded
		function ( object ) {

			scene.add( object );

		},
		// called when loading is in progresses
		function ( xhr ) {

			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

		},
		// called when loading has errors
		function ( error ) {

			console.log( 'An error happened' );

		}
	);

			
			function animate() {
				requestAnimationFrame(animate);
			
				torus.rotation.x += 0.01;
				torus.rotation.y += 0.005;
				torus.rotation.z += 0.01;
			
				//controls.update();
			
				renderer.render(scene, camera);
			}
			
			animate();
