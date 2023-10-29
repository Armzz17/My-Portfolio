import html from "../img/Serviceslogo/html.png"
import css from "../img/Serviceslogo/css.png"
import javascript from "../img/Serviceslogo/javascript.png"
import react from "../img/Serviceslogo/react.png"
import vite from "../img/Serviceslogo/vite.png"
import tailwind from "../img/Serviceslogo/tailwind.png"

const Services = () => {
  return (
    <div data-aos='fade-out' id="Services" className="p-20 flex flex-col items-center justify-center">
      <h1 className="text-[45px] font-semibold mb-20 leading-normal uppercase text-[#81FFD9]">Services</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 justify-around gap-20">
        <div data-aos='fade-up' className="relative text-[26px] flex items-center justify-center font-semibold text-[#81FFD9] rounded-3xl h-56 w-44 border-2 border-[#81FFD9] ">
        <h1 className="absolute mt-48 mb-2 ">HTML</h1> <img className="mb-6" src={html}></img>
       
        </div>


        <div data-aos='fade-up' className="relative text-[26px] flex items-center justify-center font-semibold text-[#81FFD9] rounded-3xl h-56 w-44 border-2 border-[#81FFD9] ">
        <h1 className="absolute  mb-2 mt-48">CSS</h1>
        <img className="mb-6" src={css} ></img>
        </div>


        <div data-aos='fade-up' className="relative text-[26px] flex items-center justify-center font-semibold text-[#81FFD9] rounded-3xl h-56 w-44 border-2 border-[#81FFD9] ">
        <h1 className="absolute mt-48 mb-2">JAVACRIPT</h1>
        <img className="mb-6" src={javascript}></img>
        </div>

        <div data-aos='fade-up' className="relative text-[26px] flex items-center justify-center font-semibold text-[#81FFD9] rounded-3xl h-56 w-44 border-2 border-[#81FFD9] ">
        <h1 className="absolute  mb-2 mt-48">REACT JS</h1>
        <img className="mb-6" src={react} ></img>
        </div>


        <div data-aos='fade-up' className="relative text-[26px] flex items-center justify-center font-semibold text-[#81FFD9] rounded-3xl h-56 w-44 border-2 border-[#81FFD9] ">
        <h1 className="absolute  mb-2 mt-48">VITE JS</h1>
        <img className="mb-6" src={vite}></img>
        </div>

        <div data-aos='fade-up' className="relative text-[26px] flex items-center justify-center font-semibold text-[#81FFD9] rounded-3xl h-56 w-44 border-2 border-[#81FFD9] ">
        <h1 className="absolute  mb-2 mt-48">TAILWIND</h1>
        <img className="mb-6" src={tailwind} ></img>
</div>
      </div>
    </div>
  )
}

export default Services
