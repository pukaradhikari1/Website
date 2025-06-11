import { useEffect } from "react"
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {


        document.body.style.overflow = menuOpen ? "hidden" : " ";
    });

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold ">

                    <span className=" bg-gradient-to-r from-gray-600 to-green-400 bg-clip-text text-transparent ">pukar</span><span className="bg-gradient-to-r from-green-500 to-gray-600 bg-clip-text text-transparent">.adhikari</span>
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors" >
                        Home
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors" >
                        About
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors" >
                        Projects
                    </a>
                    <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors" >
                        Blog
                    </Link>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors" >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav >


}