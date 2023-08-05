import React, { useState } from 'react';
import Link from 'next/link';
import { FaGithubSquare, FaDiscord, FaHamburger } from 'react-icons/fa';

export default function Navbar({ scrolled, sections, scrollToTop }) {
	// State variable to track the mobile menu open/close state
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Function to toggle the mobile menu state
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<nav
			className={`navbar z-50 bg-opacity-95 rounded-br-xl md:rounded-b-xl w-fit md:w-screen sticky top-0 flex flex-row md:justify-between items-center px-5 py-4 md:px-12  ${
				scrolled ? 'bg-zinc-900' : 'bg-transparent'
			} z-10`}>
			<div className='flex flex-row'>
				<FaGithubSquare
					size={35}
					onClick={() => window.open('https://github.com/natewbrooks?tab=repositories', '_blank')}
					className='hidden md:block mr-5 text-zinc-200 hover:cursor-pointer hover:text-zinc-400'
				/>
				<FaDiscord
					size={35}
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
					<li
						key={s}
						className='text-lg md:text-xl text-zinc-200 hover:text-zinc-400 hover:cursor-pointer'>
						<Link href={`#${s}`}>{s}</Link>
					</li>
				))}
			</ul>

			{/* Mobile Menu */}

			<div className='md:hidden flex flex-col'>
				<FaHamburger
					size={35}
					onClick={toggleMobileMenu}
					className={`text-zinc-200 md:hidden hover:cursor-pointer hover:text-zinc-600 ${
						mobileMenuOpen ? 'mb-3' : 'mb-0'
					}`}
				/>
				<ul
					className={`${
						mobileMenuOpen ? 'block' : 'hidden'
					} transition-all duration-500 ease-in-out flex flex-col md:flex-row md:space-x-12`}>
					<li
						className='text-lg text-zinc-200 md:text-xl hover:text-zinc-400 hover:cursor-pointer'
						onClick={scrollToTop}>
						home
					</li>
					{sections.map((s) => (
						<li
							key={s}
							className='text-lg text-zinc-200 md:text-xl hover:text-zinc-400 hover:cursor-pointer'>
							<Link href={`#${s}`}>{s}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
