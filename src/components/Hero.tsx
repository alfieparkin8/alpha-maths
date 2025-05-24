
import { useEffect, useState } from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Mathematical Formulas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 math-formula text-6xl animate-float text-alpha-blue">
          ∫ f(x)dx
        </div>
        <div className="absolute top-40 right-20 math-formula text-4xl animate-float text-alpha-green" style={{ animationDelay: '1s' }}>
          Σₙ₌₁^∞
        </div>
        <div className="absolute bottom-40 left-20 math-formula text-5xl animate-float text-alpha-red" style={{ animationDelay: '2s' }}>
          ∂f/∂x
        </div>
        <div className="absolute bottom-20 right-10 math-formula text-3xl animate-float text-alpha-yellow" style={{ animationDelay: '0.5s' }}>
          lim(x→∞)
        </div>
      </div>

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
