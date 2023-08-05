import React, { useState } from 'react';
import { FaCalendarCheck, FaCode } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';

const CarouselCard = ({
	isActive,
	title,
	dateCompleted,
	codeLanguages,
	projectDescription,
	image,
}) => {
	const [projectInformationVisible, setProjectInfoVisible] = useState(false);

	return (
		<>
			<div
				className={`relative ${
					isActive
						? 'w-[90vw] h-[50vh] md:h-[60vh] lg:w-[40vw] lg:h-[60vh]'
						: 'hidden lg:block opacity-30 w-[25vw] h-[40vh]'
				} `}
				style={{
					backgroundImage: `url('${image}')`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				<div className='flex flex-row justify-between items-center px-5 bg-zinc-900 w-full h-[3rem] md:h-[4rem] border-t-2 border-x-2 border-red-300 border-opacity-20'>
					<div className='relative flex flex-row items-center'>
						<FaCalendarCheck
							size={30}
							className='text-zinc-200'
						/>
						<h3 className='absolute left-10'>{dateCompleted}</h3>
					</div>

					<h3 className='text-md md:text-xl text-zinc-200'>{title}</h3>
					<button
						onClick={() => {
							isActive ? setProjectInfoVisible(!projectInformationVisible) : '';
						}}
						className={`text-zinc-200 ${
							isActive
								? 'hover:text-zinc-400 border-2 border-transparent hover:rounded-full hover:border-red-300'
								: 'hover:cursor-default'
						}`}>
						<HiInformationCircle size='30' />
					</button>
				</div>
				{projectInformationVisible && (
					<div className='flex flex-row p-4 items-center w-full h-fit bg-zinc-800 border-t-2 border-red-300 border-opacity-20'>
						<p>{projectDescription}</p>
					</div>
				)}
				<div className='absolute bottom-0 flex flex-row justify-between items-center px-5 bg-zinc-900 w-full h-[3rem] md:h-[4rem] border-b-2 border-x-2 border-red-300 border-opacity-20'>
					<FaCode
						size={30}
						className='text-zinc-200'
					/>
					<h3 className='text-md md:text-xl'>{codeLanguages}</h3>
				</div>
			</div>
		</>
	);
};

export default CarouselCard;
