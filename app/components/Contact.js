// Contact.js
import { useState } from 'react';

export default function Contact({}) {
	return (
		<section
			id='contact'
			className={`relative h-fit w-screen bg-zinc-800 p-5'
			} border-t-4 border-zinc-700`}>
			<div className='text-zinc-200 p-8 md:p-10 flex flex-col items-center justify-center space-y-10 md:space-y-0 md:flex-row h-full md:space-x-10'>
				<h2 className='w-full md:w-[20rem] lg:w-[40rem] text-center text-3xl md:text-4xl lg:text-6xl '>
					let's make something cool together.
				</h2>

				<form
					action='https://api.web3forms.com/submit'
					method='POST'
					className='flex flex-col items-center h-full justify-center'>
					<input
						type='hidden'
						name='access_key'
						value='874f3f6c-e8a5-414d-a86f-7b4f932640df'
					/>
					<input
						type='hidden'
						name='redirect'
						value='https://www.natewbrooks.com/success'
					/>
					<input
						name='name'
						type='text'
						placeholder='name'
						className='hover:border-red-300 hover:border-2 placeholder:text-center w-[15rem] lg:w-[20rem] h-[2.5rem] bg-zinc-900 flex items-center mt-2 px-3 placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300'
						required
					/>
					<input
						name='email'
						type='email'
						placeholder='email'
						className='hover:border-red-300 hover:border-2 placeholder:text-center w-[15rem] lg:w-[20rem] h-[2.5rem] bg-zinc-900 flex items-center mt-2 mb-2 px-3 placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300'
						required
					/>
					<input
						name='subject'
						type='text'
						placeholder='subject'
						className='hover:border-red-300 hover:border-2 px-3 placeholder:text-center placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300 w-[15rem] lg:w-[20rem] h-[2.5rem] bg-zinc-900 flex items-center mb-2'
						required
					/>
					<textarea
						name='message'
						placeholder='message'
						className='p-3 mb-5 hover:border-red-300 hover:border-2 placeholder:text-center w-[15rem] lg:w-[20rem]  h-[6rem] bg-zinc-900 placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300'
						required
					/>
					<button
						type='submit'
						aria-label='contact submission'
						className='w-[7rem] h-[3rem] hover:border-2 rounded-lg hover:border-red-300 bg-zinc-900 focus:bg-zinc-800 focus:duration-300'>
						contact
					</button>
				</form>
			</div>
		</section>
	);
}
