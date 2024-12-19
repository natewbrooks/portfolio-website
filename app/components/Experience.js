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
				<p className='mb-10 md:mb-20  text-md md:text-xl text-zinc-200 break-words px-4 md:mx-20 lg:mx-40'>
					&nbsp;&nbsp;&nbsp;&nbsp; I’m a 20 year old software engineering student with 7+ years of
					programming experience. It all started when I began creating Java Minecraft plugins at 10
					years old. As I grew more and more comfortable with programming, I decided to explore the
					horizon; I tried different languages in an effort to expand my knowledge and create things
					that I thought were cool. After making a few websites and simple applications, college
					brought me back to Java, where I then pursued getting certified.
					<br />
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp; I'm extremely driven. I get so absorbed in my current programming
					problem that I really can't get myself to take a break until it's finished. I am
					passionate about branching out and learning new intimidating technologies to add to my
					toolbox. I'm always happy to take a stab at a new tech stack or interesting work so that
					eventually I will be able to confidently say I can build anything.
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
