export const Blogs = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-green-400 bg-clip-text
                 text-transparent  text-center">
                    My Blogs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/100 ">
                        <h3 className="text-xl font-bold mb-2 ">1. Huffman coding</h3>
                        <p>
                            Huffman coding is a lossless data compression algorithm. The idea is
                            to assign variable-length codes to input characters, lengths of the
                            assigned codes are based on the frequencies of corresponding characters.
                            An example of huffman coding is as follows:
                            <img src="" alt="" />
                        </p>
                    </div>



                </div>



            </div>





        </section>





    );
};
