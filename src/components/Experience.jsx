import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    num: "01",
    role: "Founder & Lead Developer",
    organization: "OrginX Digital Solutions",
    period: "2024 — PRESENT",
    type: "Entrepreneurship",
    badgeColor: "text-[#ccff00] bg-[#ccff00]/10 border-[#ccff00]/30",
    description: "Founded and operate a digital solutions initiative delivering end-to-end web engineering, UI/UX design, custom software development, and digital transformation for real business clients.",
    highlights: [
      "Delivered 25+ production-ready websites and platforms for real business clients",
      "Managed direct client relationships from requirement gathering to deployment",
      "Combined development, UI/UX design, and business thinking to solve operational problems",
      "Built custom automated workflows for client lead capture and booking management"
    ]
  },
  {
    num: "02",
    role: "AI & Full Stack Developer",
    organization: "Independent & Open Source Projects",
    period: "2023 — PRESENT",
    type: "Product Building",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    description: "Designed and engineered autonomous AI platforms, web applications, and developer tools combining modern React, Python, FastAPI, and LLM orchestration.",
    highlights: [
      "Engineered LANDFlow AI, CommerceIQ, and autonomous AI workflow systems",
      "Implemented n8n, LLM integrations, and Model Context Protocol (MCP) agents",
      "Built production REST APIs and responsive user interfaces"
    ]
  },
  {
    num: "03",
    role: "AI & Data Science Student",
    organization: "Undergraduate Degree",
    period: "2022 — PRESENT",
    type: "Education",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    description: "Pursuing Bachelor's degree in Artificial Intelligence & Data Science, focusing on machine learning algorithms, database management, software engineering, and system design.",
    highlights: [
      "Maintained strong academic performance in core AI & CS subjects",
      "Participated and won top places in college & state-level hackathons",
      "Presented technical papers on AI applications and data systems"
    ]
  }
];

const achievements = [
  {
    number: "01",
    title: "3+ Hackathon Wins",
    desc: "Secured top honors and winner titles in competitive AI and software hackathons.",
    icon: "🏆"
  },
  {
    number: "02",
    title: "25+ Business Websites",
    desc: "Successfully built and deployed production web applications for real-world business clients.",
    icon: "🚀"
  },
  {
    number: "03",
    title: "Paper & Project Awards",
    desc: "Recognized for research presentations and AI-powered project innovations.",
    icon: "💡"
  },
  {
    number: "04",
    title: "Community & Leadership",
    desc: "Led tech workshops, developer communities, and entrepreneurship initiatives.",
    icon: "⚡"
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (containerRef.current) {
      // GSAP ScrollTrigger for Timeline Nodes
      const timelineItems = containerRef.current.querySelectorAll('.timeline-item');
      timelineItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          }
        );
      });

      // GSAP ScrollTrigger for Achievement Cards
      const achievementCards = containerRef.current.querySelectorAll('.achievement-card');
      gsap.fromTo(
        achievementCards,
        { y: 60, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.achievements-grid',
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  // Spotlight mouse tracking effect
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="experience" ref={containerRef} className="bg-[#080808] text-white py-24 px-6 md:px-16 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <span className="text-[#ccff00] text-xs font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-4 inline-block shadow-[0_0_15px_rgba(204,255,0,0.2)]">
              CAREER & IMPACT
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white mt-2">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-gray-400 text-sm font-light max-w-md bg-black/40 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
            A track record of client delivery, founder experience, and academic excellence in AI & Software Engineering.
          </p>
        </div>

        {/* Electric Timeline Container */}
        <div className="relative pl-6 md:pl-12 border-l-2 border-white/10 space-y-12 mb-28">
          
          {/* Vertical Glowing Beam Line Overlay */}
          <div className="absolute top-0 left-[-2px] bottom-0 w-[2px] bg-gradient-to-b from-[#ccff00] via-cyan-400 to-purple-500 opacity-60"></div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="timeline-item relative group"
            >
              {/* Timeline Node Circle */}
              <div className="absolute -left-[31px] md:-left-[55px] top-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#080808] border-2 border-[#ccff00] flex items-center justify-center font-mono text-[10px] md:text-xs font-bold text-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.5)] group-hover:scale-125 group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                {exp.num}
              </div>

              {/* Glassmorphic Card with Mouse Spotlight */}
              <div
                ref={(el) => (cardRefs.current[idx] = el)}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#ccff00]/60 transition-all flex flex-col lg:flex-row justify-between gap-8 relative overflow-hidden backdrop-blur-md shadow-xl group-hover:shadow-[0_10px_30px_rgba(204,255,0,0.1)]"
                style={{
                  background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(204, 255, 0, 0.06), transparent 40%)'
                }}
              >
                {/* Left Info */}
                <div className="lg:w-4/12 flex flex-col justify-between">
                  <div>
                    <span className={`text-xs font-mono tracking-wider uppercase font-bold px-3 py-1 rounded-full border ${exp.badgeColor} inline-block mb-3`}>
                      {exp.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#ccff00] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-gray-300 font-medium text-base mt-2">{exp.organization}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-400 mt-6 inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-max">
                    {exp.period}
                  </span>
                </div>

                {/* Right Details */}
                <div className="lg:w-7/12 flex flex-col justify-center">
                  <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-gray-300 font-light">
                        <span className="text-[#ccff00] mt-1 text-xs">⚡</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ACHIEVEMENTS SECTION */}
        <div className="pt-20 border-t border-white/10">
          <div className="mb-12">
            <span className="text-[#ccff00] text-xs font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-4 inline-block shadow-[0_0_15px_rgba(204,255,0,0.2)]">
              RECOGNITION
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white mt-2">
              ACHIEVEMENTS & MILESTONES
            </h2>
          </div>

          <div className="achievements-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="achievement-card p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#ccff00]/60 transition-all flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(204,255,0,0.15)] backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-[#ccff00] font-mono group-hover:scale-110 transition-transform">
                      {item.number}
                    </span>
                    <span className="text-2xl p-2 rounded-2xl bg-white/5 border border-white/10 group-hover:rotate-12 transition-transform">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ccff00] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
