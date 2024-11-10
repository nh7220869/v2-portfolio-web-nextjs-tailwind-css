"use client";
import { useState, FormEvent, ChangeEvent } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        // Simulate form submission (for example purposes)
        setSubmitted(true); 

        // Reset form data after successful submission
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            {/* Desktop View */}
            <div className="ml-28 mb-28 mt-28 mr-28 border-2 bg-[#FFF2E1] border-slate-900 p-4 hidden md:block ">
                <h2 className="text-2xl font-bold mb-4 text-black text-center">Contact Us</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block font-medium text-black text-xl">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xl text-black  font-medium">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-xl text-black font-medium">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#507687] text-white p-2 rounded-md hover:bg-[#384B70]">
                        Submit
                    </button>
                </form>

                {submitted && (
                    <p className="text-center mt-3 font-bold text-[#384B70]">Thank you for your message!</p>
                )}
            </div>

            {/* Mobile View */}
            <div className="w-full max-w-md mx-auto mt-8 mb-12 p-6 border-2 border-slate-900 lg:hidden">
                <h2 className="text-xl font-bold mb-6 text-center">Contact Us</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block font-medium text-lg mb-1">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium mb-1">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 h-28 resize-none"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#507687] text-white p-3 rounded-md hover:bg-[#384B70] transition-colors duration-200"
                    >
                        Submit
                    </button>
                </form>

                {submitted && (
                    <p className="text-center mt-4 font-semibold text-[#384B70]">Thank you for your message!</p>
                )}
            </div>

            <div className="flex justify-center gap-6 mt-6 mb-10 p-4 rounded-lg shadow-md bg-orange-50">
        <a href="https://www.facebook.com/share/xjPt4s7rhHbLSgsa/?mibextid=qi2Omg/" target="_blank" rel="noopener noreferrer">
          <img src="/fb.png" alt="Facebook" className="w-10 h-10 animate-pulse" />
        </a>
        <a href="https://www.linkedin.com/in/noorul-sehar-7468b6246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src="/linkdin.png" alt="LinkedIn" className="w-10 h-10 animate-pulse" />
        </a>
        <a href="https://www.instagram.com/noorulsehar2003?utm_source=qr&igsh=MWJkeTJyeWZpZzNobA==/" target="_blank" rel="noopener noreferrer">
          <img src="/insta.png" alt="Instagram" className="w-10 h-10 animate-pulse" />
        </a>
        <a href="https://github.com/nh7220869" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" className="w-10 h-10 animate-pulse" />
        </a>
        <a href="https://wa.me/03021260393" target="_blank" rel="noopener noreferrer">
          <img src="/whats.png" alt="WhatsApp" className="w-10 h-10 animate-pulse" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXPVFnfqMSRJdrWtKCmrRvdQtXrZbdzCBNLchLBqjdwrdfjpxDWtnKRZJcGSHFBLMvZlg" target="_blank" rel="noopener noreferrer">
          <img src="/gmail.png" alt="gmail" className="w-10 h-10 animate-pulse" />
        </a>
      </div>
        </>
    );
};
