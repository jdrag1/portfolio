import WP from "../assets/WP.png"
import MQ from "../assets/MQ.png"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-32">
    <h2 className="my-20 text-center font-bold text-[#E0168E] text-5xl uppercase">
        Projects
    </h2>
    <div className="mb-8 flex flex-wrap justify-center gap-12">
        {/* WebbyPIA Block */}
        <div className="flex flex-col items-center space-y-4 w-full lg:w-1/3">
            <div className="w-[400px] h-[250px] rounded-lg overflow-hidden">
                <img src={WP} alt="WebbyPIA" className="w-full h-full object-cover" />
            </div>
            <div className="text-4xl bg-[linear-gradient(to_right,#58E7CE,#6A3973,#58E7CE,#2E3D61,#8FB1BE,#6A3973,#58E7CE)] 
                            bg-clip-text font-semibold tracking-tight text-transparent text-center">
                WebbyPIA
            </div>
            <p className="text-xl font-thin text-[#E0168E] text-center px-4">
                Developed a website for NU Laguna to automate and improve the current 
                Excel-based Privacy Impact Assessment process.
            </p>
        </div>

        {/* Mystic Adventure Block */}
        <div className="flex flex-col items-center space-y-4 w-full lg:w-1/3">
            <div className="w-[400px] h-[250px] rounded-lg overflow-hidden">
                <img src={MQ} alt="Mystic Adventure" className="w-full h-full object-cover" />
            </div>
            <div className="text-4xl bg-[linear-gradient(to_right,#58E7CE,#6A3973,#58E7CE,#2E3D61,#8FB1BE,#6A3973,#58E7CE)] 
                            bg-clip-text font-semibold tracking-tight text-transparent text-center">
                Mystic Adventure
            </div>
            <p className="text-xl font-thin text-[#E0168E] text-center px-4">
                Developed an Android Role Playing Game inspired by Philippine myths and folklore.
            </p>
        </div>
    </div>
</div>
  )
}

export default Projects