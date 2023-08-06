import React, { useState, useRef } from 'react';
import { FaGithubSquare, FaDiscord, FaHamburger } from 'react-icons/fa';
import ScrollableLink from './ScrollableLink';

export default function Navbar({ scrolled, sections, scrollToTop }) {
	// State variable to track the mobile menu open/close state
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Function to toggle the mobile menu state
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<nav
			className={`navbar z-50 bg-opacity-95 rounded-br-xl md:rounded-b-xl w-fit md:w-screen fixed top-0 flex flex-row md:justify-between items-center px-5 py-4 md:px-12   ${
				scrolled ? 'bg-zinc-900' : 'bg-transparent'
			}`}>
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

			<div className='md:hidden flex flex-col z-10'>
				<button
					onClick={toggleMobileMenu}
					className={`text-zinc-200 md:hidden hover:cursor-pointer hover:text-zinc-600`}
					aria-label='hamburger menu'>
					<FaHamburger size={35} />
				</button>
				<ul
					className={`${
						mobileMenuOpen ? 'block' : 'hidden'
					} flex flex-col md:flex-row md:space-x-12 pt-3`}>
					<li
						className='text-lg text-zinc-200 md:text-xl hover:text-zinc-400 hover:cursor-pointer'
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
			</div>
		</nav>
	);
}
