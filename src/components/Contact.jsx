import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactBgVideo from '../assets/contact_assets/contact_bg.mp4';

const ContactSection = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        
        const formData = new FormData(formRef.current);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            setStatusMessage({ text: 'Please fill in all required fields.', type: 'error' });
            return;
        }

        setIsSubmitting(true);
        setStatusMessage({ text: '', type: '' });

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatusMessage({ text: 'Message sent successfully!', type: 'success' });
            formRef.current.reset();
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            setStatusMessage({ text: 'Failed to send message. Please try again later.', type: 'error' });
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <div id="contact" className="relative min-h-screen text-white font-sans flex items-center overflow-hidden [clip-path:inset(0)]">
            
            {/* Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="fixed top-0 left-0 w-full h-[100vh] object-cover z-0"
            >
                <source src={contactBgVideo} type="video/mp4" />
            </video>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col lg:flex-row gap-20 lg:gap-32 relative z-10">
                
                {/* Left Side: Contact Info */}
                <div className="w-full lg:w-5/12 flex flex-col justify-start">
                    <span className="text-[#ccff00] text-xs font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-6 w-max">
                        GET IN TOUCH
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 uppercase leading-none mb-6">
                        LET'S BUILD SOMETHING.
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-12">
                        If you have an idea, product, business problem, or project in mind, let's turn it into something real.
                    </p>

                    <div className="flex flex-col gap-8">
                        {/* Email */}
                        <div>
                            <p className="text-gray-400 text-xs uppercase font-mono tracking-wider mb-1">Direct Email</p>
                            <a href="mailto:dharaniprasanna.official@gmail.com" className="text-lg md:text-xl font-bold text-white hover:text-[#ccff00] transition-colors break-words">
                                dharaniprasanna.official@gmail.com
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="mt-4 flex flex-col items-start">
                            <p className="text-gray-400 text-xs uppercase font-mono tracking-wider mb-4">Connect Platforms</p>
                            <div className="flex items-center gap-3">
                                <a href="mailto:dharaniprasanna.official@gmail.com" className="px-4 py-2 rounded-full bg-white/10 text-xs text-white hover:bg-[#ccff00] hover:text-black transition-all font-medium flex items-center gap-2">
                                    EMAIL ME →
                                </a>
                                <a href="https://linkedin.com/in/dharaniprasanna" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/10 text-xs text-white hover:bg-[#ccff00] hover:text-black transition-all font-medium flex items-center gap-2">
                                    LINKEDIN →
                                </a>
                                <a href="https://github.com/dharaniprasanna" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/10 text-xs text-white hover:bg-[#ccff00] hover:text-black transition-all font-medium flex items-center gap-2">
                                    GITHUB →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="w-full lg:w-7/12 flex flex-col lg:pt-4">
                    <form ref={formRef} className="flex flex-col gap-5 w-full" onSubmit={sendEmail}>
                        
                        {/* Name and Email Row */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your full name" 
                                    required
                                    className="w-full bg-[#111] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Email address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Your email address" 
                                    required
                                    className="w-full bg-[#111] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />
                            </div>
                        </div>

                        {/* Phone and Subject Row */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Phone</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    placeholder="Your phone number" 
                                    className="w-full bg-[#111] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    placeholder="Subject" 
                                    className="w-full bg-[#111] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5 w-full">
                            <label className="text-xs text-gray-400 font-medium">Message</label>
                            <textarea 
                                name="message"
                                placeholder="Write something...." 
                                rows="5"
                                required
                                className="w-full bg-[#111] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent resize-none"
                            ></textarea>
                        </div>

                        {/* Status Message */}
                        {statusMessage.text && (
                            <div className={`text-sm px-4 py-3 rounded-lg border ${statusMessage.type === 'success' ? 'bg-green-500/10 border-green-500/50 text-green-400' : 'bg-red-500/10 border-red-500/50 text-red-400'}`}>
                                {statusMessage.text}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-white text-black text-sm font-semibold rounded-lg py-3 hover:bg-gray-200 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactSection;
