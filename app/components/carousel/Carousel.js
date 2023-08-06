import React, { useState } from 'react';
import CarouselCard from './CarouselCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Carousel() {
	const cardData = [
		{
			title: 'Termdle',
			dateCompleted: '2021',
			codeLanguages: 'Java',
			projectDescription:
				'Wordle clone I created in two days for a school project, I thought it had potential so I continued to work on it.',
			image: 'images/termdleImg.png',
		},
		{
			title: 'Bombsniffer',
			dateCompleted: '2021',
			codeLanguages: 'HTML, CSS, JavaScript',
			projectDescription:
				'My first introduction to creating websites with a Minesweeper clone I made in a few days. I have come a long way in my ability to develop UI.',
			image: 'images/bombsniffer.png',
		},
		{
			title: 'Chess',
			dateCompleted: '2022',
			codeLanguages: 'Java',
			projectDescription:
				'A barebones chess demonstration, UI unfinished but fully playable with another person. I worked on it in preparation for taking my Java Associate certification.',
			image: 'images/chess.png',
		},
		{
			title: 'Portfolio',
			dateCompleted: '2023',
			codeLanguages: 'HTML, TailwindCSS, Next.JS',
			projectDescription: 'The website you are currently on. Hope you like it.',
			image: 'images/portfolioSite.png',
		},
		// Add more card data objects as needed
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
