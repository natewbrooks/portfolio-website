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
		<div className={`relative flex flex-row h-[80px] w-full items-center justify-center`}>
			<div className='marquee w-full flex flex-row justify-around h-full items-center text-zinc-200 whitespace-nowrap'>
				<FaGithubSquare
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaJsSquare
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaCss3Alt
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaHtml5
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaReact
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaJava
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaPython
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
			</div>
			<div className='marquee marquee2 w-full flex flex-row justify-around h-fit items-center text-zinc-200 whitespace-nowrap'>
				<FaGithubSquare
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaJsSquare
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaCss3Alt
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaHtml5
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaReact
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaJava
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
				<FaPython
					size={size}
					className={`xl:hover:scale-110 xl:hover:text-red-300`}
				/>
			</div>
		</div>
	);
}
