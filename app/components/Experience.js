// Experience.js
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiCursorClick, HiInformationCircle } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

export default function ExperienceSection({ toolboxActive, toggleToolbox }) {
	return (
		<section
			id='experience'
			className='relative flex flex-col h-fit w-screen bg-zinc-800'>
			<h2 className='text-4xl sm:text-5xl md:text-6xl text-center mt-20 mb-10 md:mb-12 text-zinc-200'>
				experience
			</h2>

			<div className='flex flex-col justify-center items-center h-full w-full'>
				<div className='flex flex-col text-center md:mb-20'>
					<p className='text-md md:text-xl text-zinc-200 break-words w-[50vw] xl:w-[35vw]'>
						I’m a 19 year old computer science college student with 5+ years of programming
						experience, and I have a passion for learning new technology and implementing it into
						development to make really cool stuff.
						<br />
						<br />
						From web applications to desktop programs or mobile apps, I’m excited to take on diverse
						work so that I can develop valuable experiences to further my knowledge and skillset.
					</p>
					<a
						href='#'
						className='group text-red-300 text-md md:text-xl my-10 lg:mt-16 relative flex flex-col items-center'>
						view full résumé
						<span className='relative rounded-lg w-0 h-[0.25rem] bg-red-400 bottom-0 group-hover:w-[6rem] transition-all duration-300 ease-in-out'></span>
					</a>
				</div>

				<div className='overflow-hidden flex flex-col items-center justify-end h-full w-screen mb-5'>
					<div className='triangleBkg hidden xl:block absolute bottom-2 bg-zinc-900'></div>
					<div className='flex flex-row w-full h-fit justify-center items-center z-10 p-10 md:p-12 lg:p-8 after:border-t-2 after:border-zinc-900 after:xl:border-zinc-800 after:w-[75vw] after:absolute after:bottom-28'>
						<h2 className='select-none text-2xl md:text-4xl text-zinc-200'>my</h2>
						<h2
							onClick={toggleToolbox}
							className='select-none text-2xl md:text-4xl text-zinc-200 hover:text-red-300 hover:cursor-pointer pl-2'>
							{toolboxActive ? 'toolbox' : 'certifications'}
						</h2>
						<HiCursorClick className='block w-[2rem] text-zinc-500 animate-slowblink' />
					</div>

					{toolboxActive && (
						<>
							<div className='relative bottom-0 h-[5rem] w-[200vw] md:w-screen flex items-center justify-center'>
								<Carousel size={80} />
							</div>
						</>
					)}

					{!toolboxActive && (
						<ul className='text-zinc-200 relative bottom-0 h-[5rem] px-10 text-md text-center list-disc w-fit marker:text-red-300'>
							<li className=''>Oracle Certified Associate, Java SE 8 Programmer @ JULY 2023</li>
							<li>... more to come</li>
						</ul>
					)}
				</div>
			</div>
		</section>
	);
}
