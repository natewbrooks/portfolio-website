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
			className={`navbar bg-opacity-95 rounded-br-xl md:rounded-b-xl w-fit md:w-screen sticky top-0 flex flex-row md:justify-between items-center px-5 py-2 md:px-12  ${
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
				{/* <FaHamburger
					size={35}
					onClick={toggleMobileMenu}
					className={`md:hidden hover:cursor-pointer hover:text-zinc-200 ${
						mobileMenuOpen ? 'mb-3' : 'mb-0'
					}`}
				/> */}
				<svg
					stroke='currentColor'
					fill='currentColor'
					strokeWidth='0'
					viewBox='0 0 512 512'
					onClick={toggleMobileMenu}
					className={`text-zinc-200 md:hidden hover:cursor-pointer hover:text-zinc-200 ${
						mobileMenuOpen ? 'mb-3' : 'mb-0'
					}`}
					height='35'
					width='35'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z'></path>
				</svg>
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

			{/* <div className='md:hidden flex flex-col p-2'>
				<FaHamburger
					size={35}
					onClick={toggleMobileMenu}
					className={`md:hidden hover:cursor-pointer hover:text-zinc-400 ${
						mobileMenuOpen ? 'mb-5' : 'mb-0'
					} ${mobileMenuOpen ? 'text-red-300' : 'text-zinc-100'}`}
				/>
				<ul
					className={`${
						mobileMenuOpen ? 'block' : 'hidden'
					} flex flex-col md:flex-row md:space-x-12`}>
					<li
						className='text-lg md:text-xl hover:text-zinc-400 hover:cursor-pointer'
						onClick={scrollToTop}>
						home
					</li>
					{sections.map((s) => (
						<li
							key={s}
							className='text-lg md:text-xl hover:text-zinc-400 hover:cursor-pointer'>
							<Link href={`#${s}`}>{s}</Link>
						</li>
					))}
				</ul>
			</div> */}
		</nav>
	);
}
