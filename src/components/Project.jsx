import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: '01',
    name: 'LANDFlow AI',
    title: (
      <>
        LANDFLOW <span className="font-light italic text-gray-300 lowercase font-serif">ai</span>
      </>
    ),
    description: "An AI-powered real estate and land management platform that streamlines property analysis, automates documentation workflows, and provides predictive analytics for land acquisition and development.",
    tech: ["React.js", "Python", "FastAPI", "OpenAI", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
  },
  {
    num: '02',
    name: 'COMMERCEIQ',
    title: (
      <>
        COMMERCE<span className="font-light italic text-gray-300">IQ</span>
      </>
    ),
    description: "A business intelligence and analytics platform providing real-time sales dashboards, inventory tracking, customer behavior insights, and automated financial reporting for retail businesses.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Recharts"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    num: '03',
    name: 'ORBIS AI PLATFORM',
    title: (
      <>
        ORBIS <span className="font-light italic text-gray-300 lowercase font-serif">ai</span>
      </>
    ),
    description: "An intelligent platform leveraging autonomous AI agents and workflow automation to process complex datasets, automate repetitive operational tasks, and boost team productivity.",
    tech: ["Python", "LangChain", "FastAPI", "React", "Docker"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
  },
  {
    num: '04',
    name: 'AGRIBOT',
    title: (
      <>
        AGRIBOT <span className="font-light italic text-gray-300">AUTOMATION</span>
      </>
    ),
    description: "An AI and robotics project focused on agricultural automation, crop health monitoring using computer vision, and smart irrigation control to optimize agricultural yield.",
    tech: ["Python", "Computer Vision", "IoT", "TensorFlow", "React Native"],
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000&auto=format&fit=crop"
  },
  {
    num: '05',
    name: 'ORGINX DIGITAL SOLUTIONS',
    title: (
      <>
        ORGINX <span className="font-light italic text-gray-300">DIGITAL</span>
      </>
    ),
    description: "Founded and operating a digital solutions initiative providing end-to-end web engineering, UI/UX design, custom software development, and digital transformation for real business clients.",
    tech: ["Full Stack", "React", "Next.js", "Node.js", "Client Management"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    num: '06',
    name: 'SELECTED CLIENT WEBSITES',
    title: (
      <>
        CLIENT <span className="font-light italic text-gray-300">PORTFOLIO</span>
      </>
    ),
    description: "A curated collection of over 25+ production websites and web platforms designed, developed, and deployed for real business clients across retail, services, healthcare, and technology.",
    tech: ["React", "HTML/CSS", "JavaScript", "UI/UX Design", "SEO"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000&auto=format&fit=crop"
  }
];

const clientWorkList = [
  {
    business: "Local Retail & E-Commerce",
    industry: "Retail & Sales",
    built: "Responsive Storefronts & Inventory Portals",
    tech: "React, Tailwind, Node.js",
    purpose: "Enhanced online sales & streamlined customer orders"
  },
  {
    business: "Service & Healthcare Providers",
    industry: "Healthcare & Services",
    built: "Booking & Patient Appointment Platforms",
    tech: "React, Firebase, REST APIs",
    purpose: "Automated booking workflows & client communication"
  },
  {
    business: "Business Consulting & Corporate",
    industry: "Corporate & Agency",
    built: "Brand Websites & Lead Generation Funnels",
    tech: "Next.js, UI/UX, SEO Optimization",
    purpose: "Elevated brand presence & increased inbound inquiries"
  }
];

const Project = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const rows = containerRef.current.querySelectorAll('.project-row');
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
            },
          }
        );
      });

      const clientCards = containerRef.current.querySelectorAll('.client-card');
      gsap.fromTo(
        clientCards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.client-work-grid',
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div id="work" ref={containerRef} className="bg-[#050505] w-full text-white pt-16 md:pt-28 pb-24 px-6 md:px-16">

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-28">

        {/* Left Title */}
        <div className="w-full lg:w-7/12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pt-2">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
            A showcase of AI platforms, full-stack web applications, automation tools, and real business projects delivered from concept to production.
          </p>
          <a href="#contact" className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-semibold text-xs md:text-sm hover:bg-[#b3e600] transition-colors flex items-center gap-2">
            DISCUSS A PROJECT
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M7 17H16M7 17V8" />
            </svg>
          </a>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 lg:gap-36 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={proj.name} className={`project-row flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-16 w-full group`}>

              {/* Image Side */}
              <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-2xl border border-white/10 group-hover:border-[#ccff00]/50 transition-colors">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] font-mono text-xs md:text-sm font-bold tracking-widest uppercase mb-3">
                  {proj.num}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-5">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-mono bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <a href="#contact" className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-semibold hover:bg-[#b3e600] transition-colors inline-flex items-center gap-2">
                    PROJECT DETAILS
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* CLIENT WORK SECTION */}
      <div className="mt-32 pt-20 border-t border-white/10 flex flex-col items-center">
        <div className="text-center max-w-3xl mb-16">
          <span className="text-[#ccff00] text-xs md:text-sm font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-4 inline-block">
            ORGINX DIGITAL SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mt-4 mb-4">
            BUILT FOR REAL BUSINESSES
          </h2>
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
            Beyond personal projects, I've worked directly with real businesses to design, develop, and deploy production-ready digital experiences — delivering over <span className="text-[#ccff00] font-medium">25+ websites and platforms</span>.
          </p>
        </div>

        <div className="client-work-grid grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
          {clientWorkList.map((item, i) => (
            <div key={i} className="client-card p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#ccff00]/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#ccff00] uppercase tracking-wider">{item.industry}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.business}</h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-4">{item.built}</p>
              </div>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <span className="text-[11px] font-mono text-gray-400">Purpose: {item.purpose}</span>
                <span className="text-[11px] font-mono text-[#ccff00]">Tech: {item.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Project;
