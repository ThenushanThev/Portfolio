import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe, FaDatabase } from "react-icons/fa";
import { SiAdobeillustrator, SiAntdesign, SiFigma, SiTableau } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="UI/UX Design Projects"
          des="Design engaging and intuitive interfaces. Showcase wireframes, prototypes, and final designs that enhance user experiences."
          icon={<SiFigma />}
        />
        <Card
          title="Data Analysis Projects"
          des="Analyze data to reveal trends and insights. Create visualizations and reports that drive informed decisions."
          icon={<SiTableau />}
        />
        <Card
          title="Business Analysis Projects"
          des="Examine business processes and gather requirements. Develop models to optimize operations."
          icon={<FaDatabase />}
        />
        <Card
          title="Logo Design Projects"
          des="Design unique logos that capture brand identities. Include examples of logos and the creative process behind them."
          icon={<SiAdobeillustrator />}
        />
        <Card
          title="User Research and Testing"
          des="Conduct user research and usability testing. Use feedback to iterate and improve designs."
          icon={<SiAntdesign />}
        />
        <Card
          title="Tools and Technologies"
          des="Proficient in design tools (Adobe XD, Figma), data analysis tools (Excel, Tableau)."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features