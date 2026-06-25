import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // New states for our attractive UI feedback
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleSubmit = (e) => {
        e.preventDefault();

        // Start loading state and clear any previous messages
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
                name: formData.name,
                from_name: formData.name,
                email: formData.email,
                message: formData.message,
                to_name: "Pukar",
                title: "New Portfolio Inquiry"
            },
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then((result) => {
                // Show success message and clear form
                setSubmitStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });

                // Hide the success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setSubmitStatus("error");

                // Hide the error message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            })
            .finally(() => {
                // Stop loading state regardless of success or failure
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
            <RevealOnScroll>
                <div className="w-full max-w-md mx-auto">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>

                    <form action="" className="space-y-6" onSubmit={handleSubmit}>

                        {/* Custom Alert Messages */}
                        {submitStatus === "success" && (
                            <div className="p-4 rounded bg-green-500/10 border border-green-500/50 text-green-400 text-center transition-all">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="p-4 rounded bg-red-500/10 border border-red-500/50 text-red-400 text-center transition-all">
                                Oops! Something went wrong. Please try again later.
                            </div>
                        )}

                        <div className="relative">
                            <input type="text" id="name" name="name" required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <input type="email" id="email" name="email" required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <textarea id="message" name="message" rows={5} required
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your message.."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {/* Button with Loading State */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full text-white py-3 px-6 rounded font-medium relative overflow-hidden transition-all 
                            ${isSubmitting
                                    ? "bg-blue-500/50 cursor-not-allowed"
                                    : "bg-blue-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                }`}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
}