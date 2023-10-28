import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import Profile from '../img/Profile-noBg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {MdWavingHand} from 'react-icons/md'




const Home = () => {
  AOS.init({
            easing: 'ease-in-quart',
            delay: 0,
            duration: 750
        }) 
        return (
       
        <div id='Home' data-aos= "fade-up" className='text-center lg:px-56 px-10 lg:py-0 py-20 lg:text-left gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center '>
          <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>  
        
           
      
            <div className='flex flex-1 space-x-4 text-[20px]'>
            <span className='flex flex-1'>Hi, <MdWavingHand/></span>
            <h3 className='font-semibold text-[#81FFD9] '> I'm Arman</h3></div>
            <h1 data-aos= "fade-down" className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Web Developer </h1>
            <div className='flex flex-1 space-x-2  text-[#81FFD9] text-[12px]'>
            <p data-aos= "fade-up">Front-End Developer /</p>
            <p data-aos= "fade-up">Back-End Developer /</p>
            <p data-aos= "fade-up">Full-Stack Developer /</p>
            <p data-aos= "fade-up">UI/UX Designer</p>
           </div> 
           <div className='flex mt-8 gap-2'> 
                <div className='felx items-center justify-center'>
                    <div  data-aos= "fade-right" className=' flex space-x-2'>
                        <a href="https://github.com/Armzz17" className='text-white hover:text-[#81FFD9] rounded-full glow p-2'>
                        <FaGithub className='text-[28px]'/></a>
                        <a href="https://www.linkedin.com/in/armancabagay/" className='text-white hover:text-[#81FFD9] rounded-full glow p-2'>
                        <FaLinkedin className='text-[28px]'/></a>
                        <a href="https://twitter.com" className='text-white hover:text-[#81FFD9] rounded-full glow p-2'>
                        <FaTwitter className='text-[28px]'/></a>
                        <a href="https://instagram.com" className='text-white hover:text-[#81FFD9]rounded-full glow p-2'>
                        <FaInstagram className='text-[28px]'/></a>
                   
                   
                   
                   
                   
                   
                   
                   
                    </div>
                </div>
            </div>
        </div>
        <img  data-aos= "fade-left" className='rounded-full border-2 p-1 border-[#81FFD9] img_glow' src={Profile} width={290} height={290} alt="" />
    </div>
  )
}

export default Home
