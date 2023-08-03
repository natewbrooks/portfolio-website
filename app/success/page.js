import Image from 'next/image'

export default function Success() {
  return (
    <>
      <div className='flex flex-col items-center justify-center bg-zinc-900 w-[30rem] h-[50%] p-5 rounded-lg'>
        <h3 className='text-red-300'>email sent!</h3>
        <h3 className='text-zinc-200'>I will reach out to you shortly!</h3>
      </div>
    </>
  )
}
