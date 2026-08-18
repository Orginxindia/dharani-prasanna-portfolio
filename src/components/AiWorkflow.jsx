import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
  { step: '01', title: 'IDEATION', desc: 'Framing problem & architecture' },
  { step: '02', title: 'AI RESEARCH', desc: 'LLM & tech stack exploration' },
  { step: '03', title: 'PROTOTYPE', desc: 'Rapid UI & proof-of-concept' },
  { step: '04', title: 'ENGINEER', desc: 'Production code & API integrations' },
  { step: '05', title: 'TEST', desc: 'Validation & edge-case handling' },
  { step: '06', title: 'DEPLOY', desc: 'Cloud, hosting & CI/CD pipeline' },
  { step: '07', title: 'ITERATE', desc: 'Feedback loops & feature scale' }
];

const AiWorkflow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.workflow-step-card');
      const arrows = containerRef.current.querySelectorAll('.workflow-arrow');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      tl.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
        }
      ).fromTo(
        arrows,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.6'
      );
    }
  }, []);

  return (
    <section className="bg-[#080808] text-white py-20 px-6 md:px-16 border-t border-b border-white/10 relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Badge */}
        <span className="text-[#ccff00] text-xs md:text-sm font-mono tracking-widest uppercase bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 mb-6">
          ENGINEERING MULTIPLIER
        </span>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 uppercase mb-6">
          AI-NATIVE DEVELOPMENT
        </h2>

        {/* Core Statement */}
        <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed max-w-3xl mb-16">
          I use AI not as a replacement for engineering, but as an <span className="text-white font-medium italic">engineering multiplier</span> — from research and architecture to prototyping, debugging, automation, and product iteration.
        </p>

        {/* Visual Workflow Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
          {workflowSteps.map((item, idx) => (
            <div
              key={item.step}
              className="workflow-step-card relative flex flex-col items-center p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ccff00] hover:bg-white/[0.08] transition-all duration-300 group cursor-default shadow-lg hover:shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              <span className="text-xs font-mono text-[#ccff00] mb-2 font-bold group-hover:scale-110 transition-transform">
                {item.step}
              </span>
              <h3 className="text-sm font-extrabold tracking-wider text-white uppercase group-hover:text-[#ccff00] transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] text-gray-400 font-light mt-2 leading-tight">
                {item.desc}
              </p>

              {/* Arrow Connector for Desktop */}
              {idx < workflowSteps.length - 1 && (
                <div className="workflow-arrow hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#ccff00] font-bold text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiWorkflow;
