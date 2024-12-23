// HomeSection.js
import { GoArrowDown } from 'react-icons/go';

export default function Header({}) {
	return (
		<section
			id='home'
			className='relative flex flex-col items-center justify-center w-screen h-screen '>
			<h1 className='hidden md:flex text-2xl sm:text-5xl md:text-7xl lg:text-8xl break-words select-none text-zinc-200'>
				natewbrooks
			</h1>
			<h1 className='text-center md:hidden text-6xl sm:text-7xl break-words select-none text-zinc-200'>
				nate w. <br></br>brooks
			</h1>
			<p className='text-red-300 break-words mx-12 p-5 text-center select-none max-w-[350px] sm:max-w-[450px] xl:max-w-[600px] text-sm md:text-lg'>
				software engineer who craves learning new technology and creating cool stuff.
			</p>
		</section>
	);
}
