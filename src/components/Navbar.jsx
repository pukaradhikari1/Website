import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {


        document.body.style.overflow = menuOpen ? "hidden" : " ";
    });

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="/" className="block max-w-[120px] sm:max-w-[150px]">
                    <img src="/loogo.jpg" alt="Logo" className="w-full h-auto object-contain" />
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
                    <a href="#blogs" className="text-gray-300 hover:text-white transition-colors" >
                        Blog
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors" >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav >


}