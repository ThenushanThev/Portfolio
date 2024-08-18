import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaEnvelope, FaLinkedinIn, FaBehance, FaDatabase } from "react-icons/fa";
import { SiFigma, SiTableau, SiAdobephotoshop } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["UI/UX Designer.", "Data Analyst.", "Business Analyst ."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Thenushan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I specialize in creating intuitive and engaging user experiences as a UI/UX designer. With a keen eye for design and a passion for user-centered solutions, I strive to enhance the interaction between users and digital products. My expertise also extends to data analysis and business analysis, where I apply analytical skills to uncover insights, optimize processes, and drive informed decision-making. Whether it's crafting compelling interfaces or deriving actionable insights from data, my diverse skill set ensures a holistic approach to every project..
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaEnvelope />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
              <FaBehance />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiAdobephotoshop />
            </span>
            <span className="bannerIcon">
              <FaDatabase />
            </span>
            <span className="bannerIcon">
              <SiTableau />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner