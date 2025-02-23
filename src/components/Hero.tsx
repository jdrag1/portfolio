import MyPicture from "../assets/jerald.png"
import CustomButton from "./CustomButton"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap items-center">
      
      
      <div className="w-full lg:w-1/2 px-6 lg:px-12">
        <div className="flex flex-col items-start">
          <h1 className="pb-2 text-6xl font-thin text-[#E0168E] tracking-tight lg:mt-16 lg:text-8xl">
            Jerald Paragas
          </h1>
          <span className="bg-[linear-gradient(to_right,#58E7CE,#6A3973,#58E7CE,#2E3D61,#8FB1BE,#6A3973,#58E7CE)] 
                         bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
            Front End Developer 
          </span>
          <p className=" mt-4 text-xl/2 text-[#E0168E] font-bold tracking-tight leading-relaxed">
            I am a passionate web developer and an intern at Monad Solutions Inc. Currently, I am enhancing my skills 
            by studying React Vite, and TailwindCSS. In addition to web development, I have a background knowledge in game development. 
            Below, you'll find a list of skills I can offer. My goal is to become a full-stack web developer, and I am committed 
            to continuous learning. Excited for what’s ahead!
          </p>
    
          <CustomButton label="Let's Connect" />

        </div>
      </div>

     
      <div className="w-full lg:w-1/2 flex justify-center relative">
        
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-90 
                        bg-[radial-gradient(circle,#58E7CE_0%,#6A3973_20%,#58E7CE_40%,#2E3D61_60%,#8FB1BE_80%,#6A3973_100%)]">
        </div>

        
        <img src={MyPicture} alt="My Picture" className="relative w-[500px] h-auto object-cover z-10" />
      </div>

    </div>
  </div>
    
  )
}

export default Hero