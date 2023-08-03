// ContactSection.js
export default function ContactSection({ emailSent, setEmailSent }) {
	return (
		<section
			id='contact'
			className='relative h-[35vh] w-screen bg-zinc-800'>
			<div className='thickLine top-2 border-zinc-800'>
				<br />
			</div>
			<div className='flex flex-row justify-center h-full items-center space-x-20'>
				<h2 className='w-[40rem] text-center'>let's make something cool together.</h2>
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
						<div className='flex flex-col mb-5'>
							<h3>name</h3>
							<div className='w-[20rem] h-[2.5rem] bg-zinc-900 flex items-center mt-2'>
								<input
									name='name'
									type='text'
									placeholder='Mikey McGee'
									className='hover:border-red-300 hover:border-2 px-3 w-full h-full bg-zinc-900 placeholder-zinc-600 text-zinc-600 focus:animate-pulse focus:outline-none focus:border-2 focus:border-red-300'
									required
								/>
							</div>
						</div>
						<div className=''>
							<h3>email</h3>
							<div className='w-[20rem] h-[2.5rem] bg-zinc-900 flex items-center mt-2 mb-7'>
								<input
									name='email'
									type='email'
									placeholder='mikeymcgeeisme@gmail.com'
									className='hover:border-red-300 hover:border-2 px-3 w-full h-full bg-zinc-900 placeholder-zinc-600 text-zinc-600 focus:animate-pulse focus:outline-none focus:border-2 focus:border-red-300'
									required
								/>
							</div>
						</div>
						<textarea
							name='message'
							placeholder='Message'
							className='p-3 mb-5 hover:border-red-300 hover:border-2 w-full h-[6rem] bg-zinc-900 placeholder-zinc-600 text-zinc-600 focus:animate-pulse focus:outline-none focus:border-2 focus:border-red-300'
							required
						/>
						<button
							type='submit'
							className='w-[7rem] h-[3rem] hover:border-2 rounded-lg hover:border-red-300 bg-zinc-900 hover:bg-zinc-800'>
							contact
						</button>
					</form>
				)}
				{emailSent && (
					<div className='flex flex-col items-center justify-center bg-zinc-900 w-[30rem] h-[50%] p-5 rounded-lg'>
						<h3 className='text-red-300'>email sent!</h3>
						<h3 className='text-zinc-200'>I will reach out to you shortly!</h3>
					</div>
				)}
			</div>
		</section>
	);
}
