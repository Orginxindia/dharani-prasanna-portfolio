import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/about_section/about_section.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Material UI", "HTML5"];
const backendSkills = ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "Database", "MongoDB", "PostgreSQL"];
const aiSkills = ["ChatGPT", "Claude", "Cursor AI", "GitHub Copilot", "Google Gemini", "LangChain", "MCP", "Prompt Engineering", "Agentic AI"];
const toolsSkills = ["Git", "GitHub", "Docker", "Postman", "VS Code", "CI/CD"];

const aboutWords = [
  { text: "I'm" },
  { text: "Dharani Prasanna,", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#ccff00]" },
  { text: "an" }, { text: "Artificial" }, { text: "Intelligence" }, { text: "&" }, { text: "Data" }, { text: "Science" }, { text: "undergraduate" }, { text: "and" },
  { text: "AI & Full Stack Developer", className: "text-white font-medium" },
  { text: "focused" }, { text: "on" }, { text: "building" }, { text: "practical" }, { text: "digital" }, { text: "products." },
  { text: "I'm" }, { text: "also" }, { text: "the" }, { text: "founder" }, { text: "of" },
  { text: "OrginX Digital Solutions,", className: "text-[#ccff00] font-medium" },
  { text: "where" }, { text: "I've" }, { text: "worked" }, { text: "with" }, { text: "real" }, { text: "businesses" }, { text: "to" }, { text: "design" }, { text: "and" }, { text: "deliver" }, { text: "production-ready" }, { text: "websites." },
  { text: "My" }, { text: "experience" }, { text: "spans" },
  { text: "full-stack development,", className: "text-white font-medium" },
  { text: "AI engineering,", className: "text-white font-medium" },
  { text: "UI/UX,", className: "text-white font-medium" },
  { text: "automation, and product management." }
];

const statsData = [
  { number: "25+", label: "WEBSITES DELIVERED" },
  { number: "6+", label: "BUSINESSES ONBOARDED" },
  { number: "AI", label: "PRODUCTS BUILT" },
  { number: "3+", label: "HACKATHON WINS" },
  { number: "01", label: "FOUNDER" },
];

const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];
    
    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-20 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">

      <div className="max-w-7xl mx-auto w-full z-10">

        {/* Mobile Intro Text */}
        <h2 ref={introMobileRef} className="lg:hidden text-center text-[18vw] md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-10 md:mb-16 uppercase">
          About Me
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start items-center pl-0 lg:pl-6 w-full">
            <img
              src={aboutImage}
              alt="Dharani Prasanna"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto max-h-[75vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8 z-10 w-full px-4 md:px-0">
            {/* Desktop Intro Text */}
            <h2 ref={introDesktopRef} className="hidden lg:block text-[9rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none uppercase">
              About Me
            </h2>
            <div className="relative bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.07] transition-colors duration-300 text-center lg:text-left">
              <p ref={textRef} className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span className={`word ${wordObj.className || ''}`}>
                      {wordObj.text}
                    </span>
                    {index < aboutWords.length - 1 && " "}
                  </React.Fragment>
                ))}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-gray-400 font-mono">
                <span className="bg-white/10 text-white px-3 py-1 rounded-full">AI & Data Science Student</span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full">Founder @ OrginX</span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full">Full Stack Developer</span>
              </div>
            </div>
          </div>

        </div>

        {/* Impact Numbers / Statistics Section */}
        <div className="mt-20 py-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {statsData.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ccff00]/40 transition-colors">
              <span className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#ccff00] tracking-tight">
                {stat.number}
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 mt-2 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Scrolling Skills Marquee */}
      <div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-16 -mx-6 md:-mx-16">
        {/* First Row */}
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...frontendSkills, ...frontendSkills, ...frontendSkills, ...frontendSkills].map((item, i) => (
              <div key={`front-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Second Row */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...backendSkills, ...backendSkills, ...backendSkills, ...backendSkills].map((item, i) => (
              <div key={`back-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Third Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...aiSkills, ...aiSkills, ...aiSkills, ...aiSkills].map((item, i) => (
              <div key={`ai-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Fourth Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...toolsSkills, ...toolsSkills, ...toolsSkills, ...toolsSkills].map((item, i) => (
              <div key={`tools-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
