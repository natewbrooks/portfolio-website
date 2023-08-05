import React, { useEffect, useState } from 'react';
import {
	FaGithubSquare,
	FaJsSquare,
	FaCss3Alt,
	FaHtml5,
	FaReact,
	FaJava,
	FaPython,
	FaGitSquare,
} from 'react-icons/fa';

export default function Carousel({ size }) {
	return (
		<>
			<div className='marquee w-full flex flex-row justify-evenly h-fit items-center text-zinc-900 xl:text-zinc-800'>
				<FaGithubSquare
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaJsSquare
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaCss3Alt
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaHtml5
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaReact
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaJava
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaPython
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
			</div>
			<div className='marquee marquee2 w-full flex flex-row justify-between h-fit items-center text-zinc-900 xl:text-zinc-800'>
				<FaGithubSquare
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaJsSquare
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaCss3Alt
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaHtml5
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaReact
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaJava
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
				<FaPython
					size={size}
					className={`hover:scale-110 hover:text-zinc-200`}
				/>
			</div>
		</>
	);
}
