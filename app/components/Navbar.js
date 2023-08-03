// Navbar.js
import Link from 'next/link';
import { FaGithubSquare, FaDiscord } from 'react-icons/fa';

export default function Navbar({ scrolled, sections, scrollToTop }) {
	return (
		<nav
			className={`navbar sticky top-0 mx-auto flex flex-row justify-center md:justify-between items-center px-5 md:px-12 py-[1vh]  ${
				scrolled ? 'bg-zinc-900' : 'bg-transparent'
			} z-10`}>
			<div className='flex flex-row'>
				<FaGithubSquare
					size={35}
					onClick={() =>
						window.open(
							'https://github.com/natewbrooks?tab=repositories',
							'_blank'
						)
					}
					className='hidden md:block mr-5 hover:cursor-pointer hover:text-zinc-400'
				/>
				<FaDiscord
					size={35}
					className='hidden md:block mr-5 hover:cursor-pointer hover:text-zinc-400'
				/>
			</div>
			<ul className='flex flex-row space-x-8 md:space-x-12'>
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
		</nav>
	);
}
