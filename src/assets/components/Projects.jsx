import React from 'react'
import Project1 from '../img/project1.png'
import NewProject from '../img/NewProject.jpg'




const Projects = () => {
  return (
    <div id='Projects' className='p-20 flex flex-col items-center justify-center'>
        <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-[#81FFD9]' >Projects</h1>
        <div className="grid lg:grid-cols-4  grid-cols-1 justify-around gap-20">
            <img data-aos='fade-up' height={600} width={250} className="text-[26px] flex items-center justify-center rounded-3xl  border-2 border-[#81FFD9] " src={Project1} alt="" />
            <img data-aos='fade-down' height={600} width={250} className="text-[26px] flex items-center justify-center rounded-3xl  border-2 border-[#81FFD9] " src={NewProject} alt="" />
            <img data-aos='fade-up' height={600} width={250} className="text-[26px] flex items-center justify-center rounded-3xl  border-2 border-[#81FFD9] " src={NewProject}  alt="" />
            <img data-aos='fade-down' height={600} width={250} className="text-[26px] flex items-center justify-center rounded-3xl  border-2 border-[#81FFD9] " src={NewProject}  alt="" />
        </div>
    </div>
  )
}

export default Projects
