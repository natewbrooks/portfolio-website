// ProjectsSection.js
import { FaSign, FaCode, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';

export default function ProjectsSection({ projectInformationVisible, setProjectInfoVisible }) {
	return (
		<section
			id='projects'
			className='h-fit w-screen flex flex-col items-center bg-zinc-900 mb-20'>
			<div className='flex flex-col mb-20 mt-20 space-y-8'>
				<h2 className='text-4xl sm:text-5xl md:text-6xl text-center text-zinc-200'>projects</h2>
				<p className='text-md md:text-xl text-center text-red-300'>
					check out what I've been up to recently
				</p>
			</div>
			<div className='flex flex-row lg:space-x-10 items-center justify-center'>
				<div className='hidden lg:block relative bg-zinc-400 w-[25vw] h-[30vh]'></div>
				<div className='relative bg-zinc-200 w-[90vw] h-[70vw] lg:w-[40vw] lg:h-[45vh]'>
					<div className='flex flex-row justify-between items-center px-5 bg-zinc-900 w-full h-[3rem] md:h-[4rem] opacity-90'>
						<FaSign
							size={30}
							className='text-zinc-200'
						/>
						<h3 className='md:text-xl text-zinc-200'>Termdle</h3>
						<HiInformationCircle
							size={30}
							onMouseEnter={() => setProjectInfoVisible(true)}
							onMouseLeave={() => setProjectInfoVisible(false)}
							onClick={() => setProjectInfoVisible(!projectInformationVisible)}
							className={`text-zinc-200 hover:cursor-pointer hover:text-zinc-400 hover:border-2 hover:rounded-xl hover:border-red-300`}
						/>
					</div>
					{projectInformationVisible && (
						<div className='flex flex-row px-5 items-center w-full h-[6rem] md:h-[4rem] bg-zinc-800'>
							<p>
								Wordle clone I created in two days for a school project, I thought it had potential
								so I continued to work on it.
							</p>
						</div>
					)}
					<div className='absolute bottom-0 flex flex-row justify-between items-center px-5 bg-zinc-900 w-full h-[3rem] md:h-[4rem] opacity-90'>
						<FaCode
							size={30}
							className='text-zinc-200'
						/>
						<h3 className='text-xl'>Java</h3>
					</div>
				</div>
				<div className='hidden lg:block relative bg-zinc-400 w-[25vw] h-[30vh]'></div>
			</div>
			<div className='w-screen flex flex-row items-center justify-center space-x-10 mt-10'>
				<FaArrowLeft
					size={40}
					className='text-zinc-200 hover:cursor-pointer hover:text-zinc-400'
				/>
				<p className='text-zinc-200 mt-2 text-xl md:text-2xl lg:text-4xl'>1/2</p>
				<FaArrowRight
					size={40}
					className='text-zinc-200 hover:cursor-pointer hover:text-zinc-400'
				/>
			</div>
		</section>
	);
}
