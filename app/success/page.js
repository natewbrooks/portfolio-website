'use client';

import React from 'react';

export default function Success() {
	return (
		<>
			<div className='flex flex-col items-center text-center justify-center bg-zinc-800 w-full h-full mt-20 mb-10 p-10'>
				<h3 className='text-red-300 pb-5 md:pb-0 text-2xl'>email sent!</h3>
				<h3 className='text-zinc-200  text-2xl'>I will reach out to you shortly!</h3>
			</div>
			<a
				href='/'
				className='w-screen flex justify-center text-red-300 hover:text-zinc-200'>
				back
			</a>
		</>
	);
}
