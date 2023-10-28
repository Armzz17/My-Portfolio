import React from 'react'

const Contact = () => {
  return (
    <div id='Contacts' className='p-20 flex flex-col items-center justify-center text-center'>
      <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-[#81FFD9]'>Contact me</h1>
      <form action="" className='flex flex-col gap-2 lg:w-1/2'>
        <div className='lg:flex gap-6'>
        <input className='w-full my-3 rounded-lg bg-slate-500 p-4 border-2 border-[#81FFD9] text-white' type="name" placeholder='Enter your Full Name' />
        <input className='w-full my-3 rounded-lg bg-slate-500 p-4 border-2 border-[#81FFD9]   text-white' type="email" placeholder='Enter your Email Address' />
        </div>
        <textarea className='py-4 px-4  bg-slate-500  text-white ]' name="" id="" cols="20" rows="10" placeholder='Write your Message..'></textarea>
        <button className="neno-buttom shadow-xl  text-white border-2 hover:bg-[#81FFD9] border-[#81FFD9] rounded-lg py-4 px-8 uppercase relative overflow-hidden" input='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
