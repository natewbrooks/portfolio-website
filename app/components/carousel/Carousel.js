import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselButtons';
import { DotButton, useDotButton } from './CarouselDotButton';
import CarouselCard from './CarouselCard';

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max);

const Carousel = (props) => {
	const { slides, options } = props;
	const autoplayOptions = {
		delay: 8000, // 8 seconds
		stopOnInteraction: false, // Continue autoplay after user interaction
		stopOnMouseEnter: true, // Pause autoplay on mouse enter
	};
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);
	const tweenFactor = useRef(0);
	const tweenNodes = useRef([]);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
		usePrevNextButtons(emblaApi);

	const setTweenNodes = useCallback((emblaApi) => {
		// Querying the element we labeled 'slide-number'
		tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
			return slideNode.querySelector('.slide-number');
		});
	}, []);

	const setTweenFactor = useCallback((emblaApi) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);

	const tweenScale = useCallback((emblaApi) => {
		const engine = emblaApi.internalEngine();
		const scrollProgress = emblaApi.scrollProgress();

		emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
			let diffToTarget = scrollSnap - scrollProgress;
			const slidesInSnap = engine.slideRegistry[snapIndex];

			slidesInSnap.forEach((slideIndex) => {
				// Remove the visibility check, always scale
				if (engine.options.loop) {
					engine.slideLooper.loopPoints.forEach((loopItem) => {
						const target = loopItem.target();
						if (slideIndex === loopItem.index && target !== 0) {
							const sign = Math.sign(target);
							if (sign === -1) {
								diffToTarget = scrollSnap - (1 + scrollProgress);
							} else if (sign === 1) {
								diffToTarget = scrollSnap + (1 - scrollProgress);
							}
						}
					});
				}

				const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
				const scale = numberWithinRange(tweenValue, 0.75, 1).toString();
				const opacity = numberWithinRange(tweenValue, 0, 1).toString();
				const tweenNode = tweenNodes.current[slideIndex];

				if (tweenNode) {
					tweenNode.style.transform = `scale(${scale})`;
					tweenNode.style.opacity = opacity;
				}
			});
		});
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		const onInitOrReInit = () => {
			setTweenNodes(emblaApi);
			setTweenFactor(emblaApi);
			// Delay the tweenScale call to after the DOM updates
			requestAnimationFrame(() => {
				tweenScale(emblaApi);
			});
		};

		onInitOrReInit();

		emblaApi
			.on('init', onInitOrReInit)
			.on('reInit', onInitOrReInit)
			.on('scroll', () => tweenScale(emblaApi))
			.on('slideFocus', () => tweenScale(emblaApi));
	}, [emblaApi, tweenScale, setTweenNodes, setTweenFactor]);

	const cardData = [
		// {
		// 	title: 'Breakthrough Coaching',
		// 	dateCompleted: '2023',
		// 	codeLanguages: 'HTML, TailwindCSS, Next.JS',
		// 	projectDescription: '',
		// 	image: 'images/lizsite.webp',
		// 	link: 'https://breakthroughcoaching.pro',
		// },
		{
			title: 'Automated Isolated Network Provisioner',
			dateCompleted: '2025',
			codeLanguages: 'Docker, SvelteKit, TailwindCSS, Terraform, Python (FastAPI)',
			projectDescription:
				'Sensitive information redacted. Architected and solely developed a policy compliant full-stack automation platform for FortiGate configuration and isolated network provisioning using Terraform, FastAPI, and Svelte. Developed the system design, UI/UX implementation, and infrastructure-as-code workflows while self-learning new technologies.',
			image: 'images/management_tool.webp',
			link: '',
		},
		{
			title: 'JOUST',
			dateCompleted: '2025',
			codeLanguages: 'Three.js, React, TailwindCSS',
			projectDescription:
				'Solo developed over a semester during my Computer Graphics class. Immersive 3D jousting game that combines side-scrolling mechanics with perspective-based combat using Three.js. The game focuses on an engaging jousting experience with a detailed point system and a whimsical medieval presentation. My motivation stemmed from a long-standing passion for bringing this concept to life. This was a project I had been dreaming of developing for several years. The challenge of implementing a targeting-based combat system within a stylized medieval setting using the new-to-me framework Three.js provided an great opportunity to expand my technical skills while creating something visually distinctive.',
			image: 'images/joust.webp',
			link: '',
		},
		{
			title: 'Linganore United Methodist Church',
			dateCompleted: '2025',
			codeLanguages: 'Docker, NextJS (React), MySQL, TailwindCSS',
			projectDescription:
				'Developed professionally for the Linganore United Methodist Church over the course of five weeks. Created a custom admin panel for the backend. Everything is customizable.',
			image: 'images/linganoreumc.webp',
			link: 'https://linganoreumc.com',
		},
		{
			title: 'DIMF AutoPoster',
			dateCompleted: '2025',
			codeLanguages: 'Java, MySQL, Python (FastAPI)',
			projectDescription:
				'Solo developed for my Database Mangagement Systems class. Only requirement was a frontend in Java Swing and a MySQL server. Created for the Defense Intelligence Memorial Foundation (DIMF). Uses Google search and image APIs to aggregate data about a fallen veteran. That is then run through AI to generate a meaningful and accurate memorialization post about the veteran. Includes a database that keeps track of the post status on different social medias. Meant to be used as a custom post generator / social media tracker to save time bookkeeping.',
			image: 'images/dimf.webp',
			link: '',
		},
		{
			title: 'Caption Creators',
			dateCompleted: '2024',
			codeLanguages: 'Next.JS (React), Firebase AUTH, Socket.io, MySQL, TailwindCSS',
			projectDescription:
				'Solo developed in Software Engineering class at university. Includes a multiplayer lobby system, user authentication, and a global leaderboard. The premise is players connect and play a hilarious online party game where players caption short videos sourced from random keywords or AI prompts.',
			image: 'images/caption-creators.webp',
			link: '',
		},
		{
			title: 'Positive Professionals',
			dateCompleted: '2024',
			codeLanguages: 'Gatsby (React), Firebase AUTH, TailwindCSS',
			projectDescription:
				'First commercial website developed for a coaching team. Includes a CMS to create and deliver blog posts.',
			image: 'images/ppro.webp',
			link: 'https://positiveprofessionals.net',
		},
		{
			title: 'Portfolio',
			dateCompleted: '2023',
			codeLanguages: 'Next.JS (React), TailwindCSS',
			projectDescription: 'The website you are currently on. Hope you like it.',
			image: 'images/portfolioSite.webp',
			link: 'https://natewbrooks.com',
		},
		{
			title: 'Chess',
			dateCompleted: '2022',
			codeLanguages: 'Java using Swing GUI',
			projectDescription:
				'A barebones chess demonstration, UI unfinished but fully playable with another person. I worked on it in preparation for taking my Java Associate certification.',
			image: 'images/chess.webp',
			link: '',
		},
		{
			title: 'Bombsniffer',
			dateCompleted: '2021',
			codeLanguages: 'HTML, CSS, JavaScript',
			projectDescription:
				'My first introduction to creating websites with a Minesweeper clone I made in a few days. Created before I knew how to build responsive designs.',
			image: 'images/bombsniffer.webp',
			link: '',
		},
		{
			title: 'Termdle',
			dateCompleted: '2021',
			codeLanguages: 'Java using Swing GUI',
			projectDescription:
				'Wordle clone I created in two days for a school project, I thought it had potential so I continued to work on it.',
			image: 'images/termdleImg.webp',
			link: '',
		},
	];

	return (
		<div className='flex flex-col space-y-8 justify-center w-full overflow-x-hidden'>
			<div
				className=''
				ref={emblaRef}>
				<div className='flex touch-pan-y touch-pinch-zoom'>
					{slides.map((index) => (
						<div
							key={index}
							className='translate-y-0 translate-x-0 flex justify-center basis-[80%] md:basis-[65%] lg:basis-[50%] xl:basis-[45%] flex-grow-0 flex-shrink-0 h-fit w-full'>
							<div className='slide-number shadow-md rounded-md flex justify-center select-none w-full h-full'>
								<CarouselCard {...cardData[index]} />
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Controls container */}
			<div className='flex flex-col items-center space-y-6 '>
				{/* Buttons container */}
				<div className='flex space-x-8'>
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					/>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					/>
				</div>

				{/* Dots container */}
				<div className='flex space-x-2'>
					{scrollSnaps.map((_, index) => {
						const isActive = index === selectedIndex;
						return (
							<DotButton
								key={index}
								onClick={() => onDotButtonClick(index)}
								className={
									isActive ? 'w-3 h-3 rounded-full bg-red-300' : 'w-3 h-3 rounded-full bg-zinc-800'
								}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
