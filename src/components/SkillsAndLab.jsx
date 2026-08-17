import React from 'react';

const skillCategories = [
  {
    title: "CORE DEVELOPMENT",
    skills: ["Java", "JavaScript", "Python", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "FRONTEND ENGINEERING",
    skills: ["React.js", "Responsive Web Development", "Tailwind CSS", "UI/UX Design", "GSAP Animations"]
  },
  {
    title: "BACKEND & DATABASES",
    skills: ["Spring Boot", "REST APIs", "Node.js", "Firebase", "MySQL", "PostgreSQL"]
  },
  {
    title: "AI & AUTOMATION",
    skills: ["LLM Integration", "AI Agents", "Prompt Engineering", "n8n Automation", "MCP", "AI APIs", "Workflow Automation"]
  },
  {
    title: "TOOLS & DEVOPS",
    skills: ["Git", "GitHub", "Docker", "Postman", "Cloud Platforms", "AI-Assisted Development"]
  }
];

const exploringList = ["Spring Boot", "Advanced AI Systems", "AI Agents", "MCP Architecture", "Cloud Technologies", "System Design"];

const labExperiments = [
  {
    title: "AI AGENTS",
    tag: "BUILDING",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    desc: "Autonomous multi-agent orchestration for business lead qualification & customer workflows."
  },
  {
    title: "BUSINESS AUTOMATION",
    tag: "SHIPPED",
    tagColor: "text-[#ccff00] bg-[#ccff00]/10 border-[#ccff00]/30",
    desc: "n8n & webhook automation pipelines processing real-time client inquiries and CRM syncing."
  },
  {
    title: "VOICE AI",
    tag: "PROTOTYPE",
    tagColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    desc: "Voice-driven interface prototype leveraging Web Speech API & LLM streaming responses."
  },
  {
    title: "ROBOTICS & IOT",
    tag: "EXPERIMENTING",
    tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    desc: "Computer vision and agricultural sensor integration for automated monitoring."
  },
  {
    title: "COMPUTER VISION",
    tag: "PROTOTYPE",
    tagColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    desc: "Real-time crop detection and image classification models using OpenCV & PyTorch."
  },
  {
    title: "PRODUCT EXPERIMENTS",
    tag: "BUILDING",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    desc: "Micro SaaS & rapid MVP prototypes built using AI engineering multipliers."
  }
];

const SkillsAndLab = () => {
  return (
    <section className="bg-[#050505] text-white py-24 px-6 md:px-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">

        {/* SKILLS SECTION */}
        <div className="mb-28">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#ccff00] text-xs font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-4 inline-block">
                TECHNICAL CAPABILITIES
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white mt-2">
                TECHNOLOGY & SKILLS
              </h2>
            </div>
            <p className="text-gray-400 text-sm font-light max-w-md">
              Structured into domain expertise without fake percentage bars — focusing on practical building capability.
            </p>
          </div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#ccff00]/40 transition-colors">
                <h3 className="text-xs font-mono tracking-widest text-[#ccff00] uppercase mb-6 font-bold">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="text-xs md:text-sm font-medium bg-white/5 text-gray-200 px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Currently Exploring Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-[#ccff00]/[0.02] border border-[#ccff00]/20">
              <h3 className="text-xs font-mono tracking-widest text-[#ccff00] uppercase mb-4 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse"></span>
                CURRENTLY EXPLORING
              </h3>
              <p className="text-xs text-gray-400 font-light mb-6">
                Active learning & deep dives to stay on the cutting edge of software architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                {exploringList.map((item, i) => (
                  <span key={i} className="text-xs font-mono text-[#ccff00] bg-[#ccff00]/10 border border-[#ccff00]/20 px-3 py-1.5 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DHARANI LAB SECTION */}
        <div className="pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#ccff00] text-xs font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-4 inline-block">
                RESEARCH & PROTOTYPES
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white mt-2">
                DHARANI LAB
              </h2>
            </div>
            <p className="text-gray-400 text-sm font-light max-w-md">
              "Experiments, prototypes, ideas, and emerging technologies I'm actively testing and building."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labExperiments.map((exp, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-black uppercase tracking-wider text-white group-hover:text-[#ccff00] transition-colors">
                      {exp.title}
                    </h3>
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold uppercase ${exp.tagColor}`}>
                      {exp.tag}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>EXP-{idx + 1}</span>
                  <span className="group-hover:text-[#ccff00] transition-colors">EXPLORE →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsAndLab;
