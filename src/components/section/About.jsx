import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const frontendSkills = ["React", "Html", "Css", "Qt", "tailwind", "Bootstrap", "JavaScript"];

    const backendSkills = ["C", "C++", "python", "PHP", "SQlite"];
    return (
        <section id="about" className=" min-h-screen flex items-center justify-center py-20 ">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  text-center">About Me</h2>
                    <div className="glass rounded-xl p-8 border-white/10 hover:-translate-y-1 transistion-all">


                        <img src="/logo.jpg" alt="Profile" className="w-20 h-20 rounded-full overflow-hidden border-4 border-white mb-4 w-full h-full object-cover" />


                        <p className="text-gray-300 mb-6">
                            Student at Kathmandu University School Of Engineering<br />
                            Computer Engineering<br />
                            From: Jhapa, Nepal <br />
                            Interested in technology, Machine learning and web development
                        </p>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl hover:-translate-y-1 transistion-all">
                                <h3 className="text-xl">🌐 Frontend</h3>
                                <div className="flex flex-wrap gap-2 ">

                                    {frontendSkills.map((tech, key) => (

                                        <span
                                            key={key}
                                            className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
S                                     hover:bg-blue-500/20  hover:shadow-[0_2PX_8x_rgba(59,130, 246_0.2)] transition">
                                            {tech}

                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl hover:-translate-y-1 transistion-all">
                                <h3 className="text-xl">👨‍💻 Backend</h3>
                                <div className="flex flex-wrap gap-2 ">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2PX_8x_rgba(16,185,129,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 g-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>
                                        +2 Science in Computer Science, Nidi Secondary School(2022-2023)
                                    </strong>
                                </li>
                                <li>
                                    <strong>
                                        B.E in Computer Engineering, Kathmandu University(2024- present)
                                    </strong>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience </h3>
                            <div className=" text-gray-300 space-y-2 font-semibold">
                                <strong>currently none</strong>
                            </div>
                        </div>


                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};