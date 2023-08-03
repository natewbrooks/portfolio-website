// ExperienceSection.js
import {
	FaGithubSquare,
	FaJsSquare,
	FaCss3Alt,
	FaHtml5,
	FaReact,
	FaJava,
	FaPython,
	FaGitSquare,
	FaArrowLeft,
	FaArrowRight,
} from 'react-icons/fa';
import { HiCursorClick, HiInformationCircle } from 'react-icons/hi';

export default function ExperienceSection({ toolboxActive, toggleToolbox }) {
	return (
		<section
			id='experience'
			className='relative flex flex-col h-[68vh] w-screen bg-zinc-800'>
			<h2 className='text-center mt-20 mb-5 md:mb-15'>experience</h2>

			<div className='flex flex-col justify-center items-center'>
				<div className='flex flex-col text-center'>
					<p className='text-lg md:text-xl break-words w-[50vw] xl:w-[35vw]'>
						I’m a 19 year old computer science college student with 5+ years of programming
						experience, and I have a passion for learning new technology and implementing it into
						development to make really cool stuff.
						<br />
						<br />
						From web applications to desktop programs or mobile apps, I’m excited to take on diverse
						work so that I can develop valuable experiences to further my knowledge and skillset.
					</p>
					<p className='text-lg md:text-xl text-red-300 mt-5 md:mt-10 lg:mt-16 hover:underline hover:underline-offset-6 hover:decoration-2 hover:decoration-red-400 hover:cursor-pointer'>
						view full résumé
					</p>
				</div>

				<div className='triangleBkg hidden lg:block absolute bottom-2 bg-zinc-900'></div>
				<div className='flex flex-col items-center justify-center'>
					<div className='absolute bottom-28 md:bottom-30 flex flex-row text-center justify-center items-center mb-5'>
						<h2 className='hidden lg:block select-none text-2xl md:text-4xl pr-3'>my</h2>
						<h2
							onClick={toggleToolbox}
							className='hidden lg:block select-none text-2xl md:text-4xl hover:text-red-300 hover:cursor-pointer'>
							{toolboxActive ? 'toolbox' : 'certifications'}
						</h2>
						<HiCursorClick className='hidden lg:block w-[2rem] text-zinc-500' />
					</div>

					<div className='line absolute bottom-[5rem] md:bottom-[8rem] border-red-500'>
						<br />
					</div>

					{toolboxActive && (
						<>
							<div className='w-screen flex flex-row absolute bottom-6 space-x-40 lg:space-x-60 animate-marquee whitespace-nowrap'>
								<FaGithubSquare size={80} />
								<FaJsSquare size={80} />
								<FaCss3Alt size={80} />
								<FaHtml5 size={80} />
								<FaReact size={80} />
								<FaJava size={80} />
								<FaPython size={80} />
								<FaGitSquare size={80} />
							</div>

							<div className='w-screen flex flex-row absolute bottom-6 space-x-40 lg:space-x-60 animate-marquee2 whitespace-nowrap'>
								<FaGithubSquare size={80} />
								<FaJsSquare size={80} />
								<FaCss3Alt size={80} />
								<FaHtml5 size={80} />
								<FaReact size={80} />
								<FaJava size={80} />
								<FaPython size={80} />
								<FaGitSquare size={80} />
							</div>
						</>
					)}

					{!toolboxActive && (
						<ul className='text-md xl:text-lg text-center list-disc absolute bottom-12'>
							<li className='px-2'>Oracle Certified Associate, Java SE 8 Programmer (July 2023)</li>
							<li>... more to come</li>
						</ul>
					)}
				</div>
			</div>
		</section>
	);
}
