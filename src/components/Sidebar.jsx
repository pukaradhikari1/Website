import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
    const location = useLocation();
    const isBlog = location.pathname === "/blogs";

    return (
        <div className="w-full h-full flex flex-col justify-between p-8">
            <div>
                {/* Brand Logo */}
                <a href={isBlog ? "/" : "#home"} className="font-mono text-2xl font-bold block mb-12 hover:scale-105 transition-transform">
                    <span className="bg-gradient-to-r from-gray-600 to-green-400 bg-clip-text text-transparent">pukar</span><br />
                    <span className="bg-gradient-to-r from-green-500 to-gray-600 bg-clip-text text-transparent">.adhikari</span>
                </a>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-6">
                    {isBlog ? (
                        <Link to="/" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all font-medium">
                            &larr; Back to Portfolio
                        </Link>
                    ) : (
                        <>
                            <a href="#home" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all font-medium">Home</a>
                            <a href="#about" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all font-medium">About</a>
                            <a href="#projects" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all font-medium">Projects</a>
                            <a href="#contact" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all font-medium">Contact</a>
                        </>
                    )}
                    <Link to="/blogs" className={`font-medium transition-all ${isBlog ? "text-blue-400" : "text-gray-400 hover:text-white hover:translate-x-2"}`}>
                        Blog
                    </Link>
                </nav>
            </div>

            {/* Social Links Panel */}
            <div className="flex flex-col space-y-4">
                <div className="h-px bg-white/10 w-full mb-2"></div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Connect</p>
                <div className="flex space-x-4">
                    <a href="https://github.com/pukaradhikari1" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all">
                        <img src="https://img.icons8.com/fluent/30/000000/github.png" alt="GitHub" className="filter invert" />
                    </a>
                    <a href="https://www.linkedin.com/in/pukar-adhikari-225b79296/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all">
                        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
                    </a>
                    <a href="https://x.com/Pukar092" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all">
                        <img src="https://img.icons8.com/fluency/30/twitterx.png" alt="X/Twitter" />
                    </a>
                </div>
            </div>
        </div>
    );
};