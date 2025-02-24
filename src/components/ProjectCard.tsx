import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full lg:w-1/3">
      <div className="w-[400px] h-[250px] rounded-lg overflow-hidden">
        <img src={imageSrc} alt={altText} className="w-full h-full object-cover" />
      </div>
      <div className="text-4xl bg-[linear-gradient(to_right,#58E7CE,#6A3973,#58E7CE,#2E3D61,#8FB1BE,#6A3973,#58E7CE)] bg-clip-text font-semibold tracking-tight text-transparent text-center">
        {title}
      </div>
      <p className="text-xl font-thin text-[#E0168E] text-center px-4">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;