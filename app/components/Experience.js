// Experience.js
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiCursorClick, HiInformationCircle } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import Marquee from './Marquee';

export default function Experience({}) {
	const [toolboxActive, setToolboxActive] = useState(true);
	const toggleToolbox = () => {
		setToolboxActive((prevToolboxActive) => !prevToolboxActive);
	};

	return (
		<section
			id='experience'
			className='relative flex flex-col h-fit w-screen bg-zinc-800 overflow-hidden'>
			<h2 className='text-4xl sm:text-5xl md:text-6xl text-center mt-20 mb-10 md:mb-12 lg:mb-[6rem] text-zinc-200'>
				experience
			</h2>

			<div className='flex flex-col justify-center items-center h-full w-full'>
				<p className='text-center mb-10 md:mb-20 xl:mb-28 text-md md:text-xl text-zinc-200 break-words w-[80vw] xl:w-[35vw]'>
					I’m a 19 year old computer science college student with 6+ years of programming
					experience. I started with Java, creating Minecraft plugins. As I grew more comfortable
					with programming, I decided to branch out, and I tried different languages to create
					things I thought were cool. After making a few websites and simple applications, college
					brought me back to Java, where I then pursued getting certified.
					<br />
					<br />
					I'm still very eager about branching out to create new things that maybe I'm not 100%
					comfortable with. Whether it's web, desktop or mobile applications, or something
					completely new, I'm always happy to take on new and interesting work so that eventually I
					will be able to take on anything.
				</p>

				<div className='bg-zinc-900 rounded-t-[3rem] flex flex-col items-center justify-between h-fit w-screen mb-2 mt-20 md:mt-10'>
					<div className='flex flex-row w-full h-fit justify-center items-center z-10 py-5 md:py-10'>
						<h2 className='select-none text-2xl md:text-4xl text-zinc-200'>my</h2>
						<h2
							onClick={toggleToolbox}
							className='select-none text-2xl md:text-4xl text-zinc-200 hover:text-red-300 hover:cursor-pointer pl-2'>
							{toolboxActive ? 'toolbox' : 'certifications'}
						</h2>
						<HiCursorClick className={`block w-[2rem] text-zinc-500 animate-slowblink`} />
					</div>
					<div className={`border-t-2 border-zinc-800 w-[75vw]`}></div>

					{toolboxActive && (
						<>
							<div className='h-fit py-5 w-[200vw] md:w-screen flex items-center justify-center overflow-hidden'>
								<Marquee size={80} />
							</div>
						</>
					)}

					{!toolboxActive && (
						<ul className='text-zinc-200 h-fit px-20 py-10 md:py-5 text-md text-center list-disc w-fit marker:text-red-300'>
							<li className=''>Oracle Certified Associate, Java SE 8 Programmer @ JULY 2023</li>
							<li>... more to come</li>
						</ul>
					)}
				</div>
			</div>
		</section>
	);
}
