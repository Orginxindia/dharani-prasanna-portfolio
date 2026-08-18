import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lab3DCanvas from './Lab3DCanvas';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: "core",
    title: "CORE DEVELOPMENT",
    skills: ["Java", "JavaScript", "Python", "SQL", "HTML5", "CSS3"]
  },
  {
    id: "frontend",
    title: "FRONTEND ENGINEERING",
    skills: ["React.js", "Responsive Web Development", "Tailwind CSS", "UI/UX Design", "GSAP Animations"]
  },
  {
    id: "backend",
    title: "BACKEND & DATABASES",
    skills: ["Spring Boot", "REST APIs", "Node.js", "Firebase", "MySQL", "PostgreSQL"]
  },
  {
    id: "ai",
    title: "AI & AUTOMATION",
    skills: ["LLM Integration", "AI Agents", "Prompt Engineering", "n8n Automation", "MCP", "AI APIs", "Workflow Automation"]
  },
  {
    id: "tools",
    title: "TOOLS & DEVOPS",
    skills: ["Git", "GitHub", "Docker", "Postman", "Cloud Platforms", "AI-Assisted Development"]
  }
];

const exploringList = ["Spring Boot", "Advanced AI Systems", "AI Agents", "MCP Architecture", "Cloud Technologies", "System Design"];

const labExperiments = [
  {
    id: "exp-01",
    title: "AI AGENTS",
    tag: "BUILDING",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    desc: "Autonomous multi-agent orchestration for business lead qualification & customer workflows.",
    details: "Developing multi-agent frameworks using Model Context Protocol (MCP) and LangChain. Agents collaborate autonomously to qualify incoming business leads, synthesize meeting notes, and execute CRM updates with zero human latency.",
    tech: ["Python", "LangChain", "MCP Architecture", "FastAPI", "OpenAI"]
  },
  {
    id: "exp-02",
    title: "BUSINESS AUTOMATION",
    tag: "SHIPPED",
    tagColor: "text-[#ccff00] bg-[#ccff00]/10 border-[#ccff00]/30",
    desc: "n8n & webhook automation pipelines processing real-time client inquiries and CRM syncing.",
    details: "Production automation workflows created for client projects. Connects custom storefront webhooks to n8n pipelines, instantly dispatching instant SMS/Email notifications, updating Google Sheets, and syncing PostgreSQL databases.",
    tech: ["n8n", "REST Webhooks", "Node.js", "PostgreSQL", "Twilio"]
  },
  {
    id: "exp-03",
    title: "VOICE AI",
    tag: "PROTOTYPE",
    tagColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    desc: "Voice-driven interface prototype leveraging Web Speech API & LLM streaming responses.",
    details: "Built a low-latency voice interaction prototype allowing users to issue voice commands to navigate UI and query business data via WebSocket streaming audio responses.",
    tech: ["Web Speech API", "FastAPI", "WebSockets", "Whisper AI", "React"]
  },
  {
    id: "exp-04",
    title: "ROBOTICS & IOT",
    tag: "EXPERIMENTING",
    tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    desc: "Computer vision and agricultural sensor integration for automated monitoring.",
    details: "Agricultural IoT research integrating hardware microcontrollers, soil moisture sensors, and camera telemetry to trigger smart irrigation schedules.",
    tech: ["MicroPython", "ESP32", "MQTT", "Computer Vision", "IoT Telemetry"]
  },
  {
    id: "exp-05",
    title: "COMPUTER VISION",
    tag: "PROTOTYPE",
    tagColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    desc: "Real-time crop detection and image classification models using OpenCV & PyTorch.",
    details: "Implemented custom object detection models to identify crop diseases and weed growth from drone and handheld camera feeds with real-time bounding box visualizer.",
    tech: ["OpenCV", "PyTorch", "YOLOv8", "Python", "FastAPI"]
  },
  {
    id: "exp-06",
    title: "PRODUCT EXPERIMENTS",
    tag: "BUILDING",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    desc: "Micro SaaS & rapid MVP prototypes built using AI engineering multipliers.",
    details: "Rapid iteration laboratory focused on taking product ideas from wireframe to functional cloud-deployed MVP within 48 hours using AI-driven development workflows.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Docker", "Vercel"]
  }
];

const filterTabs = [
  { id: "all", label: "ALL DOMAINS" },
  { id: "core", label: "CORE" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND" },
  { id: "ai", label: "AI & AUTOMATION" },
  { id: "tools", label: "TOOLS" },
];

const SkillsAndLab = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedExp, setSelectedExp] = useState(null);
  const skillsRef = useRef(null);
  const labRef = useRef(null);
  const labCardsRef = useRef([]);

  useEffect(() => {
    // GSAP ScrollTrigger for Skills Cards
    if (skillsRef.current) {
      const cards = skillsRef.current.querySelectorAll('.skill-card');
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // GSAP ScrollTrigger for Dharani Lab Section & Cards
    if (labRef.current) {
      const cards = labRef.current.querySelectorAll('.lab-card');
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: labRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, []);

  // 3D Card Tilt Effect on Mouse Move
  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(cardEl, {
      transformPerspective: 1000,
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return;
    gsap.to(cardEl, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const filteredCategories = activeTab === "all"
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section className="bg-[#050505] text-white py-24 px-6 md:px-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* SKILLS SECTION */}
        <div ref={skillsRef} className="mb-28">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-[#ccff00] text-xs font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-4 inline-block shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                TECHNICAL CAPABILITIES
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white mt-2">
                TECHNOLOGY & SKILLS
              </h2>
            </div>
            <p className="text-gray-400 text-sm font-light max-w-md bg-black/40 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
              Structured into domain expertise without fake percentage bars — focusing on practical building capability.
            </p>
          </div>

          {/* Interactive Skill Radar Domain Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all uppercase whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#ccff00] text-black font-bold shadow-[0_0_20px_rgba(204,255,0,0.4)] scale-105'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((cat) => (
              <div key={cat.id} className="skill-card p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#ccff00]/50 transition-all backdrop-blur-md hover:shadow-[0_10px_30px_rgba(204,255,0,0.1)] group">
                <h3 className="text-xs font-mono tracking-widest text-[#ccff00] uppercase mb-6 font-bold flex items-center justify-between">
                  <span>{cat.title}</span>
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] group-hover:animate-ping"></span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="text-xs md:text-sm font-medium bg-white/5 text-gray-200 px-4 py-2 rounded-xl border border-white/10 hover:border-[#ccff00]/60 hover:bg-[#ccff00]/10 hover:text-[#ccff00] transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Currently Exploring Card */}
            {(activeTab === "all" || activeTab === "ai") && (
              <div className="skill-card p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-[#ccff00]/[0.03] border border-[#ccff00]/30 backdrop-blur-md shadow-[0_0_30px_rgba(204,255,0,0.08)]">
                <h3 className="text-xs font-mono tracking-widest text-[#ccff00] uppercase mb-4 font-bold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse shadow-[0_0_10px_#ccff00]"></span>
                  CURRENTLY EXPLORING
                </h3>
                <p className="text-xs text-gray-300 font-light mb-6">
                  Active learning & deep dives to stay on the cutting edge of software architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  {exploringList.map((item, i) => (
                    <span key={i} className="text-xs font-mono text-[#ccff00] bg-[#ccff00]/10 border border-[#ccff00]/30 px-3 py-1.5 rounded-lg hover:scale-105 transition-transform">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* DHARANI LAB SECTION WITH THREE.JS CANVAS */}
        <div ref={labRef} className="pt-20 border-t border-white/10 relative">
          
          {/* Three.js Interactive 3D Particle Canvas */}
          <Lab3DCanvas />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 relative z-10">
            <div>
              <span className="text-[#ccff00] text-xs font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-4 inline-block backdrop-blur-md shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                RESEARCH & PROTOTYPES
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white mt-2 drop-shadow-lg">
                DHARANI LAB
              </h2>
            </div>
            <p className="text-gray-300 text-sm font-light max-w-md backdrop-blur-sm bg-black/40 p-4 rounded-2xl border border-white/10">
              "Experiments, prototypes, ideas, and emerging technologies I'm actively testing and building."
            </p>
          </div>

          {/* Dharani Lab Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {labExperiments.map((exp, idx) => (
              <div
                key={exp.id}
                ref={(el) => (labCardsRef.current[idx] = el)}
                onMouseMove={(e) => handleMouseMove(e, labCardsRef.current[idx])}
                onMouseLeave={() => handleMouseLeave(labCardsRef.current[idx])}
                onClick={() => setSelectedExp(exp)}
                className="lab-card p-7 rounded-3xl bg-black/60 border border-white/10 hover:border-[#ccff00]/60 backdrop-blur-md transition-shadow hover:shadow-[0_10px_30px_rgba(204,255,0,0.15)] flex flex-col justify-between group cursor-pointer transform-gpu"
              >
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
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>EXP-{idx + 1}</span>
                  <span className="text-[#ccff00] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    EXPLORE →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Experiment Modal Popup */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#111111] border border-[#ccff00]/40 rounded-3xl p-8 max-w-xl w-full shadow-2xl relative text-white">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl font-bold p-2 cursor-pointer"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-mono px-3 py-1 rounded-full border font-bold uppercase ${selectedExp.tagColor}`}>
                {selectedExp.tag}
              </span>
              <span className="text-xs font-mono text-gray-400">{selectedExp.id.toUpperCase()}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
              {selectedExp.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-6">
              {selectedExp.details}
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {selectedExp.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 px-3 py-1 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedExp(null)}
                className="px-6 py-2.5 rounded-full bg-[#ccff00] text-black font-bold text-xs hover:bg-[#b3e600] transition-colors cursor-pointer"
              >
                CLOSE PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsAndLab;
