import React, { useState, useRef } from 'react';
import { FaGithubSquare, FaDiscord, FaHamburger } from 'react-icons/fa';
import ScrollableLink from './ScrollableLink';

export default function Navbar({ sections, scrollToTop }) {
	// State variable to track the mobile menu open/close state
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Function to toggle the mobile menu state
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<nav
			className={`navbar z-50 bg-opacity-95 rounded-br-xl md:rounded-b-xl w-fit md:w-screen fixed top-0 flex flex-row md:justify-between items-center px-5 py-4 md:px-12 md:bg-zinc-900`}>
			<div className='flex flex-row'>
				<FaGithubSquare
					size={35}
					onClick={() => window.open('https://github.com/natewbrooks?tab=repositories', '_blank')}
					className='hidden md:block mr-5 text-zinc-200 hover:cursor-pointer hover:text-zinc-400'
				/>
				<FaDiscord
					size={35}
					onClick={() => {
						navigator.clipboard.writeText('n8ful');
						alert('discord has been copied to your clipboard!');
					}}
					className='hidden md:block mr-5 text-zinc-200 hover:cursor-pointer hover:text-zinc-400'
				/>
			</div>

			<ul className={`hidden md:flex md:flex-row md:space-x-12`}>
				<li
					className='text-lg md:text-xl text-zinc-200 hover:text-zinc-400 hover:cursor-pointer'
					onClick={scrollToTop}>
					home
				</li>
				{sections.map((s) => (
					<ScrollableLink
						key={s}
						section={s}
					/>
				))}
			</ul>

			{/* Mobile Menu */}

			<div className='md:hidden fixed top-4 w-fit left-4 flex flex-col z-10'>
				<button
					onClick={toggleMobileMenu}
					className={`w-fit bg-zinc-900 border-2 border-zinc-800 p-2 rounded-md text-zinc-200 md:hidden hover:cursor-pointer hover:text-zinc-600`}
					aria-label='hamburger menu'>
					<div className=' flex flex-col items-center justify-evenly w-[32px] h-[32px]'>
						<div
							className={`transition-all duration-300 w-full h-[4px] rounded-full bg-white px-2 ${
								mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
							}`}></div>
						<div
							className={`transition-all duration-200 w-full h-[4px] rounded-full bg-white px-2 ${
								mobileMenuOpen ? 'rotate-45' : ''
							}`}></div>
						<div
							className={`transition-all duration-300 w-full h-[4px] rounded-full bg-white px-2 ${
								mobileMenuOpen ? '-rotate-45 -translate-y-[0.6rem]' : ''
							}`}></div>
					</div>
				</button>
				<ul
					className={`${
						mobileMenuOpen ? 'translate-x-0' : '-translate-x-[200%]'
					} transition-all duration-500 ease-in-out flex flex-col space-y-[0.15rem] md:flex-row md:space-x-12 pt-3`}>
					<li
						className='bg-zinc-900 border-2 border-zinc-800 px-2 py-1 rounded-md text-lg text-zinc-200 md:text-xl hover:text-zinc-400 hover:cursor-pointer'
						onClick={scrollToTop}>
						home
					</li>
					{sections.map((section, index) => (
						<div
							key={section}
							className='bg-zinc-900 border-2 border-zinc-800 p-2 rounded-md'>
							<ScrollableLink section={section} />
						</div>
					))}
				</ul>
			</div>
		</nav>
	);
}
