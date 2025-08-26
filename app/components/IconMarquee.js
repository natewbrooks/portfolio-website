import React from 'react';
import Marquee from 'react-fast-marquee';
import {
	FaGithubSquare,
	FaGit,
	FaDocker,
	FaJsSquare,
	FaCss3Alt,
	FaHtml5,
	FaReact,
	FaJava,
	FaPython,
} from 'react-icons/fa';
import { SiTerraform, SiSvelte, SiTypescript} from "react-icons/si";

export default function IconMarquee({ size }) {
	return (
		<Marquee
			className={`w-full h-24 overflow-hidden`}
			gradient={true}
			autoFill={true}
			direction='right'
			gradientColor={`rgb(24, 24, 27)`}
			gradientWidth={150}>
			<FaGit
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
			<FaDocker
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
			<FaJsSquare
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
			<SiTypescript
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
			<FaCss3Alt
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
			<FaHtml5
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
			<FaReact
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
			<SiSvelte
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
			<FaJava
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
			<FaPython
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
			<SiTerraform
				size={size}
				className='mx-8 md:hover:scale-110 cursor-pointer md:hover:text-red-300'
			/>
		</Marquee>
	);
}
