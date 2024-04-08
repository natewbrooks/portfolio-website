import React, { useState } from 'react';
import CarouselCard from './CarouselCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Carousel() {
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
			title:
				'Positive ProfessionalsPositive ProfessionalsPositive ProfessionalsPositive Professionals',
			dateCompleted: '2024',
			codeLanguages: 'Gatsby (React), TailwindCSS',
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
			codeLanguages: 'Java',
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
			codeLanguages: 'Java',
			projectDescription:
				'Wordle clone I created in two days for a school project, I thought it had potential so I continued to work on it.',
			image: 'images/termdleImg.webp',
			link: '',
		},
	];

	var [activeCardIndex, setActiveCardIndex] = useState(0);
	var totalCards = cardData.length;
	var leftCardIndex = (activeCardIndex - 1 + totalCards) % totalCards;
	var rightCardIndex = (activeCardIndex + 1) % totalCards;

	const handleLeftClick = () => {
		setActiveCardIndex((activeCardIndex) =>
			activeCardIndex === 0 ? totalCards - 1 : activeCardIndex - 1
		);
	};

	const handleRightClick = () => {
		setActiveCardIndex((activeCardIndex) =>
			activeCardIndex === totalCards - 1 ? 0 : activeCardIndex + 1
		);
	};

	return (
		<>
			<div className='flex flex-row lg:space-x-10 items-center justify-center'>
				<CarouselCard
					isActive={false}
					{...cardData[leftCardIndex]}
				/>
				<CarouselCard
					isActive={true}
					{...cardData[activeCardIndex]}
				/>
				<CarouselCard
					isActive={false}
					{...cardData[rightCardIndex]}
				/>
			</div>

			{/* Carousel Selector */}
			<div className='w-screen flex flex-row items-center justify-center space-x-10 mt-10'>
				<FaArrowLeft
					size={40}
					className='text-zinc-200 hover:cursor-pointer hover:text-zinc-400'
					onClick={handleLeftClick}
				/>
				<p className='text-zinc-200 mt-2 text-xl md:text-2xl lg:text-4xl'>
					{activeCardIndex + 1}/{totalCards}
				</p>
				<FaArrowRight
					size={40}
					className='text-zinc-200 hover:cursor-pointer hover:text-zinc-400'
					onClick={handleRightClick}
				/>
			</div>
		</>
	);
}
