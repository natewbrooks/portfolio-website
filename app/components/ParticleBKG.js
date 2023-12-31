// ParticlesComponent.js
import React, { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';

export default function ParticlesBKG() {
	const particlesInit = useCallback(async (engine) => {
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<Particles
			id='particles'
			className='absolute top-0 w-screen h-screen -z-1'
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: {
					enable: false,
				},
				particles: {
					number: {
						value: 250,
						density: {
							enable: true,
							value_area: 1815.0682228903763,
						},
					},
					color: {
						value: '#ffaaaa',
					},
					shape: {
						type: 'triangle',
						stroke: {
							width: 0,
							color: '#000000',
						},
						polygon: {
							nb_sides: 5,
						},
						image: {
							src: 'img/github.svg',
							width: 100,
							height: 100,
						},
					},
					opacity: {
						value: 0.8,
						random: true,
						anim: {
							enable: false,
							speed: 1,
							opacity_min: 0.1,
							sync: false,
						},
					},
					size: {
						value: 4.5,
						random: true,
						anim: {
							enable: false,
							speed: 40,
							size_min: 0.1,
							sync: false,
						},
					},
					line_linked: {
						enable: false,
						distance: 500,
						color: '#ffffff',
						opacity: 0.4,
						width: 2,
					},
					move: {
						enable: true,
						speed: 2.5783201938177185,
						direction: 'top',
						random: true,
						straight: false,
						out_mode: 'out',
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					detect_on: 'canvas',
					events: {
						onhover: {
							enable: true,
							mode: 'bubble',
						},
						onclick: {
							enable: false,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 400,
							line_linked: {
								opacity: 0.5,
							},
						},
						bubble: {
							distance: 107.88521013641503,
							size: 7.98724557071278,
							duration: 0,
							opacity: 0.46782143798997892,
							speed: 3,
						},
						repulse: {
							distance: 39.957485235709264,
							duration: 0.4,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
			}}
		/>
	);
}
