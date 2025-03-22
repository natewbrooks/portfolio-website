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
			title: 'Linganore United Methodist Church',
			dateCompleted: '2025',
			codeLanguages: 'Docker, Vite (React), MySQL, TailwindCSS',
			projectDescription:
				'Developed professionally for the Linganore United Methodist Church over the course of four weeks. Created a custom admin panel for the backend. Everything is customizable.',
			image: 'images/linganoreumc.webp',
			link: '',
		},
		{
			title: 'Caption Creators',
			dateCompleted: '2024',
			codeLanguages: 'Next.JS (React), Firebase AUTH, Socket.io, MySQL, TailwindCSS',
			projectDescription:
				'Developed in Software Engineering class at university. Includes a multiplayer lobby system, user authentication, and a global leaderboard. The premise is players connect and play a hilarious online party game where players caption short videos sourced from random keywords or AI prompts.',
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
