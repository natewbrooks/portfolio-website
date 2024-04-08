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
						? 'w-fit h-fit xs:mx-4 sm:mx-10 md:mx-20 lg:mx-40 lg:w-[40vw]'
						: 'hidden md:block opacity-30 w-[25vw] h-fit'
				} `}
				style={{}}>
				<div className={`relative`}>
					<div
						className={`relative flex flex-col justify-start md:flex-row md:justify-between items-center py-3 md:py-3 px-5 bg-zinc-900 w-full space-y-3 md:space-y-0 h-fit border-2 border-red-300 ${
							isActive ? 'border-opacity-80' : 'border-opacity-20'
						} z-20`}>
						<div className='relative flex flex-row w-full md:w-fit justify-between'>
							<div className='relative flex flex-row w-full md:w-fit justify-between'>
								<div className={`flex flex-col space-y-2`}>
									<div className={`flex flex-row space-x-2 items-center`}>
										<FaCalendarCheck
											size={16}
											className='text-red-300'
										/>
										<h3 className={`${isActive ? 'text-sm' : 'text-xs'}`}>{dateCompleted}</h3>
									</div>
									{link !== '' ? (
										<div className={`flex flex-row items-center md:justify-center`}>
											<Link
												href={link}
												target='_blank'>
												<h3
													className={`truncate w-fit max-w-full ${
														isActive
															? 'text-md md:text-2xl text-zinc-200 hover:text-red-300 cursor-pointer'
															: 'text-md'
													}`}>
													{title.length > 24 ? `${title.substring(0, 24)}...` : title}
												</h3>
											</Link>
											<BiLinkExternal
												size={isActive ? 14 : 12}
												className={`relative left-2 md:left-3 top-1 text-zinc-500 animate-slowblink`}
											/>
										</div>
									) : (
										<h3
											className={`truncate max-w-full ${
												isActive ? 'text-md md:text-2xl text-zinc-200' : 'text-md'
											}`}>
											{title.length > 24 ? `${title.substring(0, 24)}...` : title}
										</h3>
									)}
								</div>
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
					className={`w-fit h-fit object-center border-x-2 border-red-300 aspect-video ${
						isActive ? 'border-opacity-80' : 'border-opacity-20'
					}`}
				/>

				<div
					className={`flex flex-row justify-between items-center px-5 bg-zinc-900 w-full py-2 border-2 border-red-300 z-10 ${
						isActive ? 'border-opacity-80' : 'border-opacity-20'
					}`}>
					<FaCode size={isActive ? 20 : 18} />
					<h3 className={`text-end ${isActive ? 'text-lg text-zinc-200' : 'text-xs'}`}>
						{codeLanguages}
					</h3>
				</div>
			</div>
		</>
	);
};

export default CarouselCard;
