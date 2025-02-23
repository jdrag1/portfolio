import logo from "../assets/JNP.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-8">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Jerald" width="80" />
          </div>
          <div className="flex items-center gap-4 text-2xl text-[#E0168E]">
            <a href="https://www.linkedin.com/in/jerald-paragas-722917343/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-[#58E7CE]" />
            </a>
            <a href="https://github.com/jdrag1" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-[#58E7CE]" />
            </a>
                <a href="https://www.facebook.com/jerald.paragas.203828" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-[#58E7CE]" />
            </a>
            <a href="https://www.instagram.com/jrldprgs/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-[#58E7CE]" />
            </a>
           </div>
        </nav>
      );
    
      
  
}

export default NavBar