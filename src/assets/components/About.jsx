

import AOS from 'aos'
import 'aos/dist/aos.css'
import aboutProfile from '../img/aboutProfile.png'


const About = () => {
    AOS.init({
        easing: 'ease-in-quart',
        delay: 0,
        duration: 750
    }) 
  return (
    <div id="About" className="">
      <div className="text-center lg:px-56 px-10 lg:py-0 py-20 lg:text-left gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <img data-aos='fade-down'
          className="rounded-3xl border-2 p-1 border-[#81FFD9] "
          src={aboutProfile}
          width={290}
          height={290}
          alt=""
        />
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1 data-aos='fade-right' className="text-[52px] font-semibold mb-8 leading-normal text-[#81FFD9] uppercase">
            About me
          </h1>
          <p data-aos='fade-left'>
          "I'm a web developer with a deep passion for bringing digital visions to life. Proficient in front-end and back-end technologies, I'm dedicated to crafting websites and web applications that seamlessly blend aesthetics with functionality. With a strong foundation in HTML, CSS, JavaScript, React Tailwind, Vite and etc. I strive to create user-friendly and visually engaging online experiences. I'm constantly staying up-to-date with the latest web trends and technologies to deliver innovative solutions. Beyond coding, I enjoy problem-solving and am committed to continuous growth in this ever-evolving field. Let's collaborate to transform your web development ideas into reality."
          </p>
          <div className="flex mt-8 gap-2">
            <div className="felx items-center justify-center">
              <div className="flex space-x-2">
                    <button className="neno-buttom shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-[#81FFD9] border-[#81FFD9] rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
