import React from "react";
import CustomExperienceProps from "./CustomExperienceProps";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-16 text-center font-bold text-[#E0168E] text-5xl uppercase">
        Experience
      </h2>

      <CustomExperienceProps
        period="2025-Present"
        title="Web Developer Intern - Monad Solutions Inc"
        description="Gaining real-world experience in web development by studying front-end technologies, including React, Vite, and Tailwind CSS. Designed and developed a portfolio website to showcase my skills, projects, and hands-on experience with modern web development tools. Soon, I will collaborate with my supervisors on a company project, applying my knowledge in a professional setting."
        technologies={["React", "Typescript", "Tailwind CSS"]}
      />

      <CustomExperienceProps
        period="MORE EXPERIENCE SOON"
        title="?????? - ????????"
        description=""
      />

      <CustomExperienceProps
        period="MORE EXPERIENCE SOON"
        title="?????? - ????????"
        description=""
      />
    </div>
  );
};

export default Experience;