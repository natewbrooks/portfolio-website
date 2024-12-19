// Contact.js
import { useState } from 'react';

export default function Contact({}) {
	return (
		<section
			id='contact'
			className={`h-fit w-screen bg-zinc-800 p-5'
			} border-t-4 border-zinc-700`}>
			<div className='text-zinc-200 p-8 md:p-10 flex flex-col items-center justify-center space-y-10 md:space-y-0 md:flex-row h-full md:space-x-10'>
				<h2 className='w-full md:w-[20rem] lg:w-[40rem] text-center text-3xl md:text-4xl lg:text-6xl '>
					let's make something together.
				</h2>

				<form
					action='https://api.web3forms.com/submit'
					method='POST'
					className='flex flex-col items-center h-full justify-center w-[15rem] lg:w-[20rem]'>
					<input
						type='hidden'
						name='access_key'
						value='874f3f6c-e8a5-414d-a86f-7b4f932640df'
					/>
					<input
						type='hidden'
						name='redirect'
						value='https://natewbrooks.com/success'
					/>
					<input
						type='hidden'
						name='from_name'
						value='[!] New Website Submission! - natewbrooks.com'></input>
					<div className={`flex flex-row space-x-1`}>
						<input
							type='text'
							name='name'
							placeholder='name'
							className='hover:border-red-300 hover:border-2 placeholder:text-center w-full  h-[2.5rem] bg-zinc-900 flex items-center mt-2 px-3 placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300'
							required
						/>
						<input
							type='email'
							name='email'
							placeholder='email'
							className='hover:border-red-300 hover:border-2 placeholder:text-center w-full h-[2.5rem] bg-zinc-900 flex items-center mt-2 mb-2 px-3 placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300'
							required
						/>
					</div>
					<input
						type='text'
						name='subject'
						placeholder='subject'
						className='hover:border-red-300 hover:border-2 px-3 placeholder:text-center placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300 w-full h-[2.5rem] bg-zinc-900 flex items-center mb-2'
						required
					/>
					<textarea
						name='message'
						placeholder='message'
						className='p-3 mb-5 hover:border-red-300 hover:border-2 placeholder:text-center w-full  h-[6rem] bg-zinc-900 placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300'
						required
					/>
					<button
						type='submit'
						aria-label='contact submission'
						className='w-[7rem] h-[3rem] mt-9 md:mt-0 scale-[.8] xl:hover:scale-100 transition duration-300 rounded-lg hover:border-red-300 text-zinc-800 bg-zinc-200 xl:focus:scale-[.8] xl:focus:bg-opacity-50'>
						send
					</button>
				</form>
			</div>
		</section>
	);
}
