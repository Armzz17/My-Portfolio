import React from 'react'
import {Link} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'
import { useState } from 'react'
import Logo from '../img/LOGO.png'





const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>  setClick(!click);
    
       
   
    const content =
    <>
        <div className=' block  top-16 w-full  bg-bg-[#404258] transition rounded-3xl '>
            <ul className='text-center text-xl px-12'>
                <Link spy={true} smooth={true} to= 'Home'>
                    <li className='my-2 py-2   hover:bg-[#81FFD9] hover:w-30 hover:rounded'>
                        Home
                    </li>
                </Link>
                <Link spy={true} smooth={true} to= 'About'>
                    <li className='my-2 py-2  hover:bg-[#81FFD9] hover:rounded'>
                        About
                    </li>
                </Link>
                <Link spy={true} smooth={true} to= 'Services'>
                    <li className='my-2 py-2   hover:bg-[#81FFD9] hover:rounded'>
                        Services
                    </li>
                </Link>
                <Link spy={true} smooth={true} to= 'Projects'> 
                    <li className='my-2 py-2   hover:bg-[#81FFD9] hover:rounded'>
                        Projects
                    </li>
                </Link>
                <Link spy={true} smooth={true} to= 'Contacts'>
                    <li className='my-2 py-2   hover:bg-[#81FFD9] hover:rounded'>
                        Contacts
                    </li>
                </Link>
            </ul>
        </div>
    </>
  return (
    <nav>
        <div className=' bg-[#404258]   flex justify-between  text-white  px-16 py-4 '>
           <img className='h-14 w-28' src={Logo} alt="Dev.AC" />  <div className='flex items-center flex-1'>
                   
                
                </div>
                    <div className='lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>  
                        <ul  className='flex gap-8  text-[18px]'>
                    <Link spy={true} smooth={true} to= 'Home'>
                    <li className='hover:text-[#81FFD9] transition   border-slate-900 hover:border-[#81FFD9] cursor-pointer'>
                        Home
                    </li>
                </Link>
                <Link spy={true} smooth={true} to= 'About'>
                    <li className='hover:text-[#81FFD9] transition  border-slate-900 hover:border-[#81FFD9] cursor-pointer'>
                        About
                    </li>
                </Link>
                <Link spy={true} smooth={true} to= 'Services'>
                    <li className='hover:text-[#81FFD9] transition  border-slate-900 hover:border-[#81FFD9] cursor-pointer'>
                        Services
                    </li>
                </Link>
                <Link spy={true} smooth={true} to= 'Projects'> 
                    <li className='hover:text-[#81FFD9] transition  border-slate-900 hover:border-[#81FFD9] cursor-pointer'>
                        Projects
                    </li>
                </Link>
                <Link spy={true} smooth={true} to= 'Contacts'>
                    <li className='hover:text-[#81FFD9] transition  border-slate-900 hover:border-[#81FFD9] cursor-pointer'>
                        Contacts
                    </li>
                </Link>
                        </ul>
                    </div>
                </div>
                 <div>
                    {click && content}

                    </div>   
                    <button className='block sm:hidden transition' onClick={handleClick} >
                        {click ?<FaTimes/> : <CiMenuFries/> }
                    </button>
        </div>
    </nav>
  )
}

export default Nav
