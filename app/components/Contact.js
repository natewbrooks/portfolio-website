// ContactSection.js
export default function ContactSection({ emailSent, setEmailSent }) {
	return (
		<section
			id='contact'
			className='relative h-fit w-screen bg-zinc-800 p-5 border-t-4 border-zinc-700'>
			<div className='text-zinc-200 p-8 md:p-0 flex flex-col items-center justify-center space-y-10 md:space-y-0 md:flex-row h-full md:space-x-10'>
				<h2 className='w-full md:w-[20rem] lg:w-[40rem] text-center text-3xl md:text-4xl lg:text-6xl'>
					let's make something cool together.
				</h2>
				{!emailSent && (
					<form
						onSubmit={() => setEmailSent(true)}
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
							value='localhost:3000'
						/>
						<div className='flex flex-col lg:mb-5'>
							<h3 className='hidden lg:block text-lg'>name</h3>
							<div className='w-[15rem] lg:w-[20rem] h-[2.5rem] bg-zinc-900 flex items-center mt-2'>
								<input
									name='name'
									type='text'
									placeholder='Mikey McGee'
									className='hover:border-red-300 hover:border-2 px-3 w-full h-full bg-zinc-900 placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300'
									required
								/>
							</div>
						</div>
						<div className=''>
							<h3 className='hidden lg:block text-lg'>email</h3>
							<div className='w-[15rem] lg:w-[20rem] h-[2.5rem] bg-zinc-900 flex items-center mt-2 mb-2 lg:mb-7'>
								<input
									name='email'
									type='email'
									placeholder='mikeymcgeeisme@gmail.com'
									className='hover:border-red-300 hover:border-2 px-3 w-full h-full bg-zinc-900 placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300'
									required
								/>
							</div>
						</div>
						<textarea
							name='message'
							placeholder='Message'
							className='p-3 mb-5 hover:border-red-300 hover:border-2 w-[15rem] lg:w-[20rem]  h-[6rem] bg-zinc-900 placeholder-zinc-600 text-zinc-600 focus:outline-none focus:border-2 focus:border-red-300'
							required
						/>
						<button
							type='submit'
							className='w-[7rem] h-[3rem] hover:border-2 rounded-lg hover:border-red-300 bg-zinc-900 focus:bg-zinc-800 focus:duration-300'>
							contact
						</button>
					</form>
				)}
				{emailSent && (
					<div className='flex flex-col items-center text-center justify-center bg-zinc-900 w-[15rem] md:w-[20rem] lg:w-[30rem] h-[50%] p-5 rounded-lg'>
						<h3 className='text-red-300 pb-5 md:pb-0'>email sent!</h3>
						<h3 className='text-zinc-200'>I will reach out to you shortly!</h3>
					</div>
				)}
			</div>
		</section>
	);
}
