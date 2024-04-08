import React, { useState } from 'react';
import { FaCalendarCheck, FaCode } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { HiInformationCircle } from 'react-icons/hi';
import Link from 'next/link';

const CarouselCard = ({
	isActive,
	title,
	dateCompleted,
	codeLanguages,
	projectDescription,
	image,
	link,
}) => {
	const [projectInformationVisible, setProjectInfoVisible] = useState(false);

	return (
		<>
			<div
				className={`relative flex flex-col overflow-hidden ${
					isActive
						? 'w-fit h-fit mx-10 md:mx-20 lg:mx-40 lg:w-[40vw]'
						: 'hidden lg:block opacity-30 w-[25vw] h-[40vh]'
				} `}
				style={{}}>
				<div className={`relative`}>
					<div
						className={`relative flex flex-col justify-start md:flex-row md:justify-between items-center py-3 md:py-3 px-5 bg-zinc-900 w-full space-y-3 md:space-y-0 h-fit border-2 border-red-300 ${
							isActive ? 'border-opacity-80' : 'border-opacity-20'
						} z-20`}>
						<div className='relative flex flex-row w-full md:w-fit justify-between'>
							<div className={`flex flex-col space-y-2`}>
								<div className={`flex flex-row space-x-2 items-center`}>
									<FaCalendarCheck
										size={16}
										className='text-red-300'
									/>
									<h3 className={`text-sm`}>{dateCompleted}</h3>
								</div>
								{link != '' ? (
									<div className={`flex flex-row items-center md:justify-center`}>
										<Link
											href={`${link}`}
											target='_blank'>
											<h3
												className={`${
													isActive ? 'text-2xl text-zinc-200 hover:text-red-300' : 'text-md'
												} w-[80%] overflow-ellipsis`}>
												{title}
											</h3>
										</Link>
										<BiLinkExternal
											className={`relative left-2 md:left-3 top-1 text-zinc-500 animate-slowblink ${
												isActive ? 'h-[10px] w-[10px] md:h-[15px] md:w-[15px]' : 'h-[10px] w-[10px]'
											}`}
										/>
									</div>
								) : (
									<h3 className={`${isActive ? 'text-md md:text-2xl text-zinc-200' : 'text-md'}`}>
										{title}
									</h3>
								)}
							</div>

							{projectDescription != '' && (
								<button
									onClick={() => {
										isActive ? setProjectInfoVisible(!projectInformationVisible) : '';
									}}
									aria-label='information'
									className={`block md:hidden text-zinc-200 ${
										isActive
											? 'hover:text-zinc-400 border-2 border-transparent hover:rounded-full hover:border-red-300'
											: 'hover:cursor-default'
									}`}>
									{projectDescription != '' && (
										<HiInformationCircle
											className={`${
												isActive ? 'h-[25px] w-[25px] md:h-[30px] md:w-[30px]' : 'h-[20px] w-[20px]'
											}`}
										/>
									)}
								</button>
							)}
						</div>

						<button
							onClick={() => {
								isActive ? setProjectInfoVisible(!projectInformationVisible) : '';
							}}
							aria-label='information'
							className={`hidden md:block text-zinc-200 ${
								isActive
									? 'hover:text-zinc-400 border-2 border-transparent hover:rounded-full hover:border-red-300'
									: 'hover:cursor-default'
							}`}>
							{projectDescription != '' && (
								<HiInformationCircle
									className={`${
										isActive ? 'h-[25px] w-[25px] md:h-[30px] md:w-[30px]' : 'h-[20px] w-[20px]'
									}`}
								/>
							)}
						</button>
					</div>
					{projectDescription != '' && (
						<div
							className={`absolute flex flex-row p-4 items-center w-full h-fit bg-zinc-900 bg-opacity-[.95] z-10 transition-all duration-500 ${
								projectInformationVisible ? 'translate-y-0 drop-shadow-lg' : 'translate-y-[-100%]'
							}`}>
							<p>{projectDescription}</p>
						</div>
					)}
				</div>
				<img
					src={image}
					alt={title}
					className={`w-full h-full object-center object-cover border-x-2 border-red-300 aspect-video ${
						isActive ? 'border-opacity-80' : 'border-opacity-20'
					}`}
				/>

				<div
					className={`flex flex-row justify-between items-center px-5 bg-zinc-900 w-full py-2 border-2 border-red-300 z-10 ${
						isActive ? 'border-opacity-80' : 'border-opacity-20'
					}`}>
					<FaCode
						className={`${
							isActive ? 'h-[25px] w-[25px] md:h-[30px] md:w-[30px]' : 'h-[20px] w-[20px]'
						}`}
					/>
					<h3 className={`${isActive ? 'text-sm md:text-xl text-zinc-200' : 'text-xs xl:text-lg'}`}>
						{codeLanguages}
					</h3>
				</div>
			</div>
		</>
	);
};

export default CarouselCard;
