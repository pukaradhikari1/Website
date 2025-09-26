import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {


    return (
        <section id="projects" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-red-400 bg-clip-text
                 text-transparent  text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2 ">MindYourMoney</h3>
                            <p className="text-gray-400 mb-4">
                                MindYourMoney is a personal finance management application that helps users track their expenses,
                                set budgets, and manage their finances effectively...
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Qt", "C", "C++", "SQLite"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                     hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/pukaradhikari1/EndSemProject-1"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project➡️
                                </a>

                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2 ">Number Guessing Game</h3>
                            <p className="text-gray-400 mb-4">
                                A simple number guessing game where the user has to guess a randomly generated number within a certain range.
                                The game provides feedback on whether the guess is too high or too low...
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["python"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                     hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href=""
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project➡️
                                </a>

                            </div>
                        </div>


                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2 ">SolveIt</h3>
                            <p className="text-gray-400 mb-4">
                                SolveIt is a collaborative Q&A platform designed for university students to ask, answer, and discuss
                                course-related questions. It allows students to post questions with tags and file attachments, get answers from peers,
                                and engage in academic problem-solving. With features like voting, file sharing,
                                and authentication via OTP, SolveIt creates an interactive and supportive learning community.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["python", "Flask", "React", "sqlite", "tailwind"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                     hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/pukaradhikari1/SolveIt"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project➡️
                                </a>

                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2 ">Face Recognizition</h3>
                            <p className="text-gray-400 mb-4">
                                A simple python based project that helps detects the face of the person in front of the camera,
                                or the photo uploaded.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["python", "OpenCV"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                     hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href=""
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project➡️
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>


    );

}