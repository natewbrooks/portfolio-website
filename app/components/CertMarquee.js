import React from 'react';
import Marquee from 'react-fast-marquee';
import {
	FaGithubSquare,
	FaJsSquare,
	FaCss3Alt,
	FaHtml5,
	FaReact,
	FaJava,
	FaPython,
} from 'react-icons/fa';

export default function CertMarquee({ size }) {
	return (
		<Marquee
			className={`w-full h-fit py-4 overflow-hidden`}
			autoFill={true}
			direction='left'
			gradient={true}
			gradientColor={`rgb(24, 24, 27)`}
			gradientWidth={100}>
			<span className='text-zinc-200 h-fit px-10 text-md text-center '>
				Oracle Certified Associate, Java SE 8 Programmer -{' '}
				<span className={`text-red-300`}>July 2023</span>
			</span>
		</Marquee>
	);
}
