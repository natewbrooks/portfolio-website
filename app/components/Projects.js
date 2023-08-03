// ProjectsSection.js
import { FaSign, FaCode, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';

export default function ProjectsSection({ projectInformationVisible, setProjectInfoVisible }) {
	return (
		<section
			id='projects'
			className='h-[85vh] w-screen flex flex-col items-center bg-zinc-900'>
			<h2 className='text-center mt-20 mb-5 md:mb-20'>projects</h2>
			<div className='flex flex-row space-x-10 items-center justify-center'>
				<div className='relative bg-zinc-400 w-[25vw] h-[30vh]'></div>
				<div className='relative bg-zinc-200 w-[40vw] h-[45vh]'>
					<div className='flex flex-row justify-between items-center px-5 bg-zinc-900 w-full h-[4rem] opacity-90'>
						<FaSign size={30} />
						<h3 className='text-xl'>Termdle</h3>
						<HiInformationCircle
							size={30}
							onMouseEnter={() => setProjectInfoVisible(true)}
							onMouseLeave={() => setProjectInfoVisible(false)}
							className={`hover:cursor-pointer hover:text-zinc-600`}
						/>
					</div>
					{projectInformationVisible && (
						<div className='flex flex-row px-5 items-center w-full h-[4rem] bg-zinc-800'>
							<p>
								Wordle clone I created in two days for a school project, I thought it had potential
								so I continued to work on it.
							</p>
						</div>
					)}
					<div className='absolute bottom-0 flex flex-row justify-between items-center px-5 bg-zinc-900 w-full h-[4rem] opacity-90'>
						<FaCode size={30} />
						<h3 className='text-xl'>Java</h3>
					</div>
				</div>
				<div className='relative bg-zinc-400 w-[25vw] h-[30vh]'></div>
			</div>
			<div className='w-[5vw] flex flex-row justify-between mt-10'>
				<FaArrowLeft
					size={40}
					className='hover:cursor-pointer hover:text-zinc-400'
				/>
				<p className='mt-2'>1/2</p>
				<FaArrowRight
					size={40}
					className='hover:cursor-pointer hover:text-zinc-400'
				/>
			</div>
		</section>
	);
}
