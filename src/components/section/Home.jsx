import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {


    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative " >
            <RevealOnScroll>
                <div className="text-center z-10 px-4 ">
                    <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Hi, I'm Pukar Adhikari.
                    </h1>
                    <p className="text-gray-400 text-medium mb:8 max-w-lg mx-auto ">
                        I am a bachelor student at kathmandu University, pursuing a degree
                        in Computer Science and Engineering. I am passionate about web development, Machine Learning
                        particularly in the areas of frontend and backend technologies.I have a keen
                        interest in exploring new technologies and continuously improving my skills.
                    </p>

                    <div className="flex justify-center space-x-4 my-5">
                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transistion relative overflow-hidden bg-gradient-to-r from-blue-500 to-green-600 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
                    ">
                            View Projects
                        </a>
                        <a href="#contact" className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transistion-all dutation-200
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10  
                    ">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>


    );
} 