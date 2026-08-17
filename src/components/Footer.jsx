import footerBg from '../assets/Footer/Footer.png';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6 md:px-16 h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Scale and translate the image to crop the top */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.3] md:scale-[1.5] origin-bottom translate-y-[10%]"
          style={{ backgroundImage: `url(${footerBg})` }}
        />
        {/* Dark overlay at the top to blend the background smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-10">
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div>
              <p className="text-gray-400 text-xs font-mono uppercase tracking-wider mb-2">Connect directly</p>
              <a href="mailto:dharaniprasanna.official@gmail.com" className="text-lg md:text-3xl lg:text-4xl font-bold hover:text-[#ccff00] transition-colors break-words">
                dharaniprasanna.official@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-4">
              <a href="#home" className="hover:text-[#ccff00] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#ccff00] transition-colors">About</a>
              <a href="#services" className="hover:text-[#ccff00] transition-colors">Services</a>
              <a href="#work" className="hover:text-[#ccff00] transition-colors">Work</a>
              <a href="#experience" className="hover:text-[#ccff00] transition-colors">Experience</a>
              <a href="#contact" className="hover:text-[#ccff00] transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto mt-4 md:mt-0">
            <h3 className="text-lg md:text-2xl font-bold mb-2">AI & Full Stack Developer</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-6 max-w-xs font-light">
              Product Builder · Entrepreneur · Founder @ OrginX Digital Solutions.
            </p>
            <a href="#contact" className="bg-[#ccff00] text-black px-6 py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-[#b3e600] transition-colors">
              LET'S BUILD SOMETHING →
            </a>
          </div>
        </div>

        {/* Middle Section - Socials */}
        <div className="flex flex-wrap justify-between items-center py-6 border-t border-white/10 mb-4 text-xs md:text-sm font-mono tracking-wider">
          <a href="https://linkedin.com/in/dharaniprasanna" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">LinkedIn</a>
          <a href="https://github.com/dharaniprasanna" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">GitHub</a>
          <a href="mailto:dharaniprasanna.official@gmail.com" className="hover:text-[#ccff00] transition-colors">Email</a>
          <span className="text-gray-500">Founded @ OrginX</span>
        </div>

        {/* Huge Text Section */}
        <div className="w-full text-center flex-1 flex items-center justify-center min-h-0 py-4">
          <h1 className="text-[7.5vw] font-black leading-none tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-700 select-none">
            DHARANI PRASANNA
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-auto pt-6 border-t border-white/10">
          <p>© {new Date().getFullYear()} Dharani Prasanna. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="text-[#ccff00] font-mono">AI & Data Science Student</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
