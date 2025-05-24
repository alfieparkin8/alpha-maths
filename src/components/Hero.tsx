
import { useEffect, useState } from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Mathematical Formulas Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/lovable-uploads/d2c2a388-23f7-4190-83d9-1ebe6503cf91.png)'
        }}
      />
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-alpha-black/60" />

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-alpha-blue to-alpha-purple bg-clip-text text-transparent">
            Alpha Maths
          </h1>
          
          <p className="text-xl md:text-2xl text-alpha-chalk mb-12 leading-relaxed">
            Exploring the elegance and beauty of mathematics through 
            <span className="text-alpha-blue"> innovative projects</span> and 
            <span className="text-alpha-purple"> research</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="bg-alpha-blue text-alpha-black px-8 py-3 rounded-lg font-semibold hover:bg-alpha-blue/80 transition-all duration-300 transform hover:scale-105"
            >
              Explore Projects
            </a>
            <a 
              href="#about"
              className="border-2 border-alpha-red text-alpha-red px-8 py-3 rounded-lg font-semibold hover:bg-alpha-red hover:text-alpha-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
