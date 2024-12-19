// Experience.js
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiCursorClick, HiInformationCircle } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import Marquee from './Marquee';
import CertMarquee from './CertMarquee';

export default function Experience({}) {
	return (
		<section
			id='experience'
			className='relative flex flex-col h-fit w-screen bg-zinc-800 overflow-hidden'>
			<h2 className='text-4xl sm:text-5xl md:text-6xl text-center mb-14 mt-20 text-zinc-200'>
				experience
			</h2>

			<div className='flex flex-col justify-center items-center h-full w-full'>
				<p className='mb-20 text-md md:text-xl text-zinc-200 break-words px-8 md:mx-20 lg:mx-40'>
					&nbsp;&nbsp;&nbsp;&nbsp; I’m a 20 year old software engineering student with 7+ years of
					programming experience. It all started when I began creating Java Minecraft plugins at 10
					years old. As I grew more and more comfortable with programming, I decided to explore the
					horizon; I tried different languages in an effort to expand my knowledge and create things
					that I thought were cool. After making a few websites and simple applications, college
					brought me back to Java, where I then pursued getting certified.
					<br />
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp; I am extremely driven. I get so absorbed in my current coding
					task that I really struggle to get myself to take a break until it's finished. I am
					passionate about branching out and learning new intimidating technologies to add to my
					toolbox. I am always happy to take a stab at a new tech stack or interesting work so that
					down the line I can say "I can build anything" with absolute confidence.
				</p>

				<div className='rounded-t-md overflow-hidden flex flex-col items-center justify-between h-fit w-screen space-y-1 mb-1'>
					<div className='bg-zinc-900 h-fit w-screen flex items-center justify-center overflow-hidden'>
						<CertMarquee size={80} />
					</div>
					<div className='bg-zinc-900 h-fit py-2 w-screen flex items-center justify-center overflow-hidden'>
						<Marquee size={80} />
					</div>
				</div>
			</div>
		</section>
	);
}
