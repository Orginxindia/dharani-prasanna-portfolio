import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import centerImage from '../assets/hero_assets/hero_center.png';

const Hero = ({ onPreloadComplete }) => {
  const [text, setText] = useState('DHARANI PRASANNA');
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Lock scroll during animation
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const target = "PORTFOLIO";
    const start = "DHARANI PRASANNA";
    const maxLen = Math.max(start.length, target.length);
    let iterations = 0;
    let intervalId;
    let timeoutId;

    const imageLoadPromise = new Promise((resolve) => {
      const img = new window.Image();
      img.src = centerImage;
      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    });

    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 1000);
    });

    let isMounted = true;

    Promise.all([imageLoadPromise, delayPromise]).then(() => {
      if (!isMounted) return;

      intervalId = setInterval(() => {
        setText(() => {
          let newText = "";
          for (let i = 0; i < maxLen; i++) {
            if (i < Math.floor(iterations)) {
              if (i < target.length) {
                newText += target[i];
              }
            } else {
              if (i < start.length) {
                newText += start[i];
              }
            }
          }
          return newText;
        });

        if (iterations >= maxLen) {
          clearInterval(intervalId);
          setText(target); // Ensure final text is exactly PORTFOLIO

          // GSAP Animation Sequence
          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = 'auto'; // Unlock scroll
              if (onPreloadComplete) onPreloadComplete(); // Unlock rest of the website
            }
          });

          // 1. Move the central text container up from 50% to its resting place
          const isMobile = window.innerWidth < 768;
          tl.to(containerRef.current, {
            top: isMobile ? "28%" : "36%",
            duration: 1.5,
            ease: "power3.inOut"
          }, "+=0.2"); // slight delay after scramble finishes

          // 2. Fade and slide up the Subtitle and Buttons
          tl.fromTo([subtitleRef.current, buttonsRef.current],
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" },
            "-=1.0" // start animating these while the text is still moving up
          );

          // 3. Slide the portrait upward to center (no fading)
          tl.fromTo(imageRef.current,
            { y: "100vh" }, // start entirely offscreen at the bottom
            { y: 0, duration: 1.5, ease: "power3.out" },
            "-=1.2" // start sliding up around the same time
          );
        }
        iterations += 0.5; // Smooth letter swap step
      }, 40);
    });

    return () => {
      isMounted = false;
      document.body.style.overflow = 'auto';
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ background: 'radial-gradient(circle at center, #1c1c1c 0%, #000000 85%)' }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Main Text Container (PORTFOLIO Typography + Subtitle & Buttons) */}
      <div
        ref={containerRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex flex-col items-center w-full max-w-[95vw] lg:max-w-[90vw] px-2 md:px-4"
      >
        <h1
          ref={textRef}
          className="text-[13vw] sm:text-[13.5vw] md:text-[8rem] lg:text-[10.5rem] xl:text-[12.5rem] 2xl:text-[14rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-700 drop-shadow-2xl leading-none uppercase text-center w-full whitespace-nowrap"
        >
          {text}
        </h1>

        {/* Subtitle (Left) and Buttons (Right) positioned beneath PORTFOLIO text */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-2 md:-mt-6 lg:-mt-10 px-4 md:px-8 relative z-20">
          <div ref={subtitleRef} className="opacity-0 pointer-events-auto flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
              DHARANI PRASANNA
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base font-light italic mt-0.5">
              AI & Full Stack Developer <span className="text-[#ccff00] font-normal">·</span> Product Builder <span className="text-[#ccff00] font-normal">·</span> Entrepreneur
            </p>
            <p className="text-gray-400 text-[11px] sm:text-xs mt-1.5 max-w-md hidden lg:block font-light">
              25+ websites delivered <span className="text-[#ccff00]">·</span> AI products built <span className="text-[#ccff00]">·</span> Real business clients <span className="text-[#ccff00]">·</span> Hackathon wins
            </p>
          </div>

          <div
            ref={buttonsRef}
            className="flex items-center gap-3 md:gap-4 pointer-events-auto opacity-0 mt-4 md:mt-0"
          >
            <a
              href="#work"
              className="px-5 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-semibold text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-[#ccff00]/10"
            >
              <span>VIEW MY WORK</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M7 17H16M7 17V8" />
              </svg>
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-gray-400/30 text-gray-300 hover:text-white backdrop-blur-md bg-black/40 hover:bg-white/10 hover:border-gray-400/60 transition-all text-xs md:text-sm font-medium italic tracking-wider cursor-pointer"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>

      {/* Foreground Layer: Large Transparent Portrait Cutout Overlapping Text */}
      <div
        ref={imageRef}
        className="relative z-10 flex flex-col items-center justify-end w-full pointer-events-none translate-y-[100vh] h-full"
      >
        <img
          src={centerImage}
          alt="Dharani Prasanna Portrait"
          className="h-[58vh] sm:h-[65vh] md:h-[72vh] lg:h-[78vh] max-h-[820px] w-auto object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  );
};

export default Hero;
