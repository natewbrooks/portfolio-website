import React, { useState } from 'react';
import { FaCalendarCheck, FaCode } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { HiInformationCircle } from 'react-icons/hi';
import Link from 'next/link';

const CarouselCard = ({ title, dateCompleted, codeLanguages, projectDescription, image, link }) => {
	const [projectInformationVisible, setProjectInfoVisible] = useState(false);

	return (
		<>
			<div className='w-full h-full flex flex-col'>
				<div className='w-full h-full flex flex-col'>
					<div className=' p-2 md:h-24 flex flex-row items-center w-full justify-between rounded-t-md bg-zinc-900 z-30 border-4 border-zinc-800'>
						<div className=' flex flex-row w-full h-fit justify-center md:justify-between items-center'>
							<div className='flex flex-col space-y-2'>
								<div className='flex flex-row space-x-2 items-center'>
									<h3 className='w-full text-red-300 text-sm md:text-lg text-center md:text-start'>
										{dateCompleted}
									</h3>
								</div>
								{link !== '' ? (
									<div className='flex flex-row items-center md:justify-center'>
										<Link
											href={link}
											target='_blank'>
											<h3 className='truncate w-fit max-w-full text-md md:text-2xl'>
												{title.length > 24 ? `${title.substring(0, 24)}...` : title}
											</h3>
										</Link>
										<BiLinkExternal
											size={12}
											className='relative left-2 md:left-3 top-1 text-zinc-500 animate-slowblink'
										/>
									</div>
								) : (
									<h3 className='truncate max-w-full text-md md:text-2xl'>
										{title.length > 24 ? `${title.substring(0, 24)}...` : title}
									</h3>
								)}
							</div>

							<button
								onClick={() => setProjectInfoVisible(!projectInformationVisible)}
								aria-label='information'
								className='hidden md:block hover:outline hover:outline-2 hover:outline-red-300 duration-75 transition-all outline-offset-2 rounded-full h-fit text-zinc-200 hover:cursor-pointer active:scale-90'>
								{projectDescription !== '' && <HiInformationCircle className='h-[28px] w-[28px]' />}
							</button>
						</div>
					</div>
					{projectDescription !== '' && (
						<div
							className={`absolute hidden md:flex flex-row p-4 text-sm rounded-b-md border-b-2 border-zinc-900 shadow-md items-center w-full h-fit bg-zinc-800 z-20 ${
								projectInformationVisible
									? 'translate-y-24 opacity-100 visible'
									: '-translate-y-24 drop-shadow-lg opacity-0 rounded-t-md invisible'
							}`}
							style={{
								transition: projectInformationVisible
									? 'transform 0.7s ease, opacity 0s ease 0s, visibility 0s ease 0s'
									: 'transform 0.7s ease, opacity 1.4s ease 0s, visibility 0s ease 1.4s',
							}}>
							<p>{projectDescription}</p>
						</div>
					)}

					<img
						src={image}
						alt={title}
						className='w-full aspect-square md:aspect-video z-10 object-cover md:object-contain border-x-4 border-zinc-800'
					/>

					<div className='flex flex-row justify-between items-center p-2 md:p-4 bg-zinc-900 w-full md:h-24 border-4 rounded-b-md border-zinc-800 z-10'>
						<div className='flex flex-row justify-between items-center w-full h-full'>
							<FaCode className={`w-8 h-8`} />
							<h3 className='w-3/4 text-end text-xs md:text-lg'>{codeLanguages}</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarouselCard;
