import React from "react";
import WP from "../assets/WP.png";
import MQ from "../assets/MQ.png";
import ProjectCard from "./ProjectCard"; 

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-32">
      <h2 className="my-20 text-center font-bold text-[#E0168E] text-5xl uppercase">
        Projects
      </h2>
      <div className="mb-8 flex flex-wrap justify-center gap-12">
        <ProjectCard
          imageSrc={WP}
          altText="WebbyPIA"
          title="WebbyPIA"
          description="Developed a website for NU Laguna to automate and improve the current Excel-based Privacy Impact Assessment process."
        />
        <ProjectCard
          imageSrc={MQ}
          altText="Mystic Adventure"
          title="Mystic Adventure"
          description="Developed an Android Role Playing Game inspired by Philippine myths and folklore."
        />
      </div>
    </div>
  );
};

export default Projects;