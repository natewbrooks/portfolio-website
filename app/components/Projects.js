// Projects.js
// import Carousel from './carousel/Carousel';
import Carousel from './carousel/Carousel';

export default function Projects() {
	const OPTIONS = { loop: true };
	const SLIDE_COUNT = 5;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

	return (
		<section
			id='projects'
			className='overflow-hidden h-fit w-screen flex flex-col items-center bg-zinc-900 py-14 xl:pb-[10rem]'>
			<div className='flex flex-col my-8 space-y-4 md:space-y-6'>
				<h2 className='text-4xl sm:text-5xl md:text-6xl text-center text-zinc-200'>projects</h2>
				<p className='text-md md:text-xl text-center text-red-300'>
					check out what I've been up to recently
				</p>
			</div>

			<Carousel
				slides={SLIDES}
				options={OPTIONS}
			/>
		</section>
	);
}
