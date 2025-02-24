import React from "react";

interface ExperienceItemProps {
  period: string;
  title: string;
  description: string;
  technologies?: string[];
}

const CustomExperienceProps: React.FC<ExperienceItemProps> = ({
  period,
  title,
  description,
  technologies,
}) => {
  return (
    <div className="mb-8 flex flex-wrap py-4 lg:justify-center">
      <div className="w-full lg:w-1/4">
        <p className="mb-2 text-2xl bg-[linear-gradient(to_right,#58E7CE,#6A3973,#58E7CE,#2E3D61,#8FB1BE,#6A3973,#58E7CE)] bg-clip-text text-transparent">
          {period}
        </p>
      </div>
      <div className="w-full pl-6 max-w-xl lg:w-3/4">
        <div className="text-3xl text-[#E0168E]">{title}</div>
        <p className="text-lg font-thin text-[#E0168E]">{description}</p>
        {technologies && (
          <div className="flex pl-4 space-x-2">
            {technologies.map((tech, index) => (
              <ul
                key={index}
                className="px-3 py-auto text-[#E0168E] border-2 border-[#6A3973] rounded-full transition duration-300 ease-in-out hover:scale-105 hover:border-[#58E7CE] uppercase"
              >
                {tech}
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomExperienceProps;