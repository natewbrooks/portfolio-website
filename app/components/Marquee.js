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

export default function Marquee({ size }) {
	return (
		<>
			<div className='marquee w-full flex flex-row justify-around h-fit items-center text-zinc-200 whitespace-nowrap'>
				<FaGithubSquare
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaJsSquare
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaCss3Alt
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaHtml5
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaReact
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaJava
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaPython
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
			</div>
			<div className='marquee marquee2 w-full flex flex-row justify-around h-fit items-center text-zinc-200 whitespace-nowrap'>
				<FaGithubSquare
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaJsSquare
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaCss3Alt
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaHtml5
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaReact
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaJava
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
				<FaPython
					size={size}
					className={`hover:scale-110 hover:text-zinc-800`}
				/>
			</div>
		</>
	);
}
