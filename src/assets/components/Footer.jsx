import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from "../img/LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0 ">
          <img className="h-14 w-28" src={Logo} alt="Dev.AC" />
        </div>
        <div>
          <h2 className="text[22px] font-semibold text-[#81FFD9] py-2 uppercase">
            Services
          </h2>
          <ul className="text[16px] my-4">
            <li className="">Web Development</li>
            <li>Front-End Developer</li>
            <li>Back-End Developer</li>
            <li>UI/UX Designer</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text[22px] font-semibold text-[#81FFD9] py-2 uppercase">
            Contact
          </h2>
          <p className="text[16px] my-4">Email: Acabagay17@gmail.com</p>
          <p className="text[16px] my-4">Phone: </p>
        </div>
        <div>
          {" "}
          <h2 className="text[22px] font-semibold text-[#81FFD9] py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex space-x-4">
            <a
             
              href="https://github.com/Armzz17"
              className="text-white hover:text-[#81FFD9] rounded-full glow p-2"
            >
              <FaGithub  data-aos="fade-up"className="text-[28px]" />
            </a>
            <a
              
              href="https://www.linkedin.com/in/armancabagay"
              className="text-white hover:text-[#81FFD9] rounded-full glow p-2"
            >
              <FaLinkedin data-aos="fade-down"className="text-[28px]" />
            </a>
            <a
             
              href="https://twitter.com"
              className="text-white hover:text-[#81FFD9] rounded-full glow p-2"
            >
              <FaTwitter  data-aos="fade-up"className="text-[28px]" />
            </a>
            <a
              
              href="https://instagram.com"
              className="text-white hover:text-[#81FFD9]rounded-full glow p-2"
            >
              <FaInstagram data-aos="fade-down"className="text-[28px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
