// Projects.js
import Carousel from './carousel/Carousel';

export default function Projects() {
	return (
		<section
			id='projects'
			className='h-fit w-screen flex flex-col items-center bg-zinc-900 mb-20'>
			<div className='flex flex-col mb-20 mt-20 space-y-8'>
				<h2 className='text-4xl sm:text-5xl md:text-6xl text-center text-zinc-200'>projects</h2>
				<p className='text-md md:text-xl text-center text-red-300'>
					check out what I've been up to recently
				</p>
			</div>

			<Carousel />
		</section>
	);
}
