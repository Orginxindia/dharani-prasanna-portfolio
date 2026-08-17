import React from 'react';

const experiences = [
  {
    role: "Founder & Lead Developer",
    organization: "OrginX Digital Solutions",
    period: "2024 — PRESENT",
    type: "Entrepreneurship",
    description: "Founded and operate a digital solutions initiative delivering end-to-end web engineering, UI/UX design, custom software development, and digital transformation for real business clients.",
    highlights: [
      "Delivered 25+ production-ready websites and platforms for real business clients",
      "Managed direct client relationships from requirement gathering to deployment",
      "Combined development, UI/UX design, and business thinking to solve operational problems",
      "Built custom automated workflows for client lead capture and booking management"
    ]
  },
  {
    role: "AI & Full Stack Developer",
    organization: "Independent & Open Source Projects",
    period: "2023 — PRESENT",
    type: "Product Building",
    description: "Designed and engineered autonomous AI platforms, web applications, and developer tools combining modern React, Python, FastAPI, and LLM orchestration.",
    highlights: [
      "Engineered LANDFlow AI, CommerceIQ, and autonomous AI workflow systems",
      "Implemented n8n, LLM integrations, and Model Context Protocol (MCP) agents",
      "Built production REST APIs and responsive user interfaces"
    ]
  },
  {
    role: "AI & Data Science Student",
    organization: "Undergraduate Degree",
    period: "2022 — PRESENT",
    type: "Education",
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
    desc: "Secured top honors and winner titles in competitive AI and software hackathons."
  },
  {
    number: "02",
    title: "25+ Business Websites",
    desc: "Successfully built and deployed production web applications for real-world business clients."
  },
  {
    number: "03",
    title: "Paper & Project Awards",
    desc: "Recognized for research presentations and AI-powered project innovations."
  },
  {
    number: "04",
    title: "Community & Leadership",
    desc: "Led tech workshops, developer communities, and entrepreneurship initiatives."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#080808] text-white py-24 px-6 md:px-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <span className="text-[#ccff00] text-xs font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-4 inline-block">
              CAREER & IMPACT
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white mt-2">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-gray-400 text-sm font-light max-w-md">
            A track record of client delivery, founder experience, and academic excellence in AI & Software Engineering.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="flex flex-col gap-10 mb-28">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#ccff00]/40 transition-all flex flex-col lg:flex-row justify-between gap-8"
            >
              {/* Left Info */}
              <div className="lg:w-4/12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#ccff00] tracking-wider uppercase font-bold">{exp.type}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{exp.role}</h3>
                  <p className="text-gray-300 font-medium text-base mt-1">{exp.organization}</p>
                </div>
                <span className="text-xs font-mono text-gray-500 mt-6 inline-block bg-white/5 px-3 py-1 rounded-full w-max">
                  {exp.period}
                </span>
              </div>

              {/* Right Details */}
              <div className="lg:w-7/12 flex flex-col justify-center">
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
                  {exp.description}
                </p>
                <ul className="space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-gray-400 font-light">
                      <span className="text-[#ccff00] mt-1 text-[10px]">■</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ACHIEVEMENTS SECTION */}
        <div className="pt-20 border-t border-white/10">
          <div className="mb-12">
            <span className="text-[#ccff00] text-xs font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-4 inline-block">
              RECOGNITION
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white mt-2">
              ACHIEVEMENTS & MILESTONES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#ccff00] font-mono">
                    {item.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2">{item.title}</h3>
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
