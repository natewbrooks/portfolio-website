// HomeSection.js
import { GoArrowDown } from 'react-icons/go';

export default function Header({ scrolled }) {
	return (
		<section
			id='home'
			className='flex flex-col items-center justify-center w-screen h-[70vh] md:h-[90vh] mb-16'>
			<h1 className='text-4xl sm:text-5xl md:text-8xl select-none text-zinc-200'>natewbrooks</h1>
			<p className='text-red-300 break-words mx-12 p-5 text-center select-none w-[90%] text-sm md:text-lg'>
				junior software developer eager to learn new technology to create cool spiz.
			</p>
			<p
				className={`absolute bottom-28 text-lg ${
					scrolled ? 'transition-opacity duration-1000 opacity-0' : 'opacity-80 animate-pulse'
				} hidden md:block`}>
				(scroll)
			</p>
			<GoArrowDown
				size={35}
				className={`absolute bottom-10 ${
					scrolled ? 'transition-opacity duration-300 opacity-0' : 'opacity-60 animate-bounce'
				} hidden md:block`}
			/>
		</section>
	);
}
