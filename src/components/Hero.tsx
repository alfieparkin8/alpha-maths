
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentFormula, setCurrentFormula] = useState(0);
  
  const formulas = [
    "e^(iπ) + 1 = 0",
    "∫₋∞^∞ e^(-x²) dx = √π",
    "∑ₙ₌₁^∞ 1/n² = π²/6",
    "F = G(m₁m₂)/r²",
    "∇ × E = -∂B/∂t"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFormula((prev) => (prev + 1) % formulas.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Mathematical Formulas */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 math-formula text-6xl animate-float">
          ∫ f(x)dx
        </div>
        <div className="absolute top-40 right-20 math-formula text-4xl animate-float" style={{ animationDelay: '1s' }}>
          ∑ₙ₌₁^∞
        </div>
        <div className="absolute bottom-40 left-20 math-formula text-5xl animate-float" style={{ animationDelay: '2s' }}>
          ∂f/∂x
        </div>
        <div className="absolute bottom-20 right-10 math-formula text-3xl animate-float" style={{ animationDelay: '0.5s' }}>
          lim₍ₓ→∞₎
        </div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-alpha-gold to-alpha-purple bg-clip-text text-transparent">
            Alpha Maths
          </h1>
          
          <div className="mb-8 h-20 flex items-center justify-center">
            <p className="text-2xl md:text-3xl math-formula text-alpha-gold transition-all duration-500">
              {formulas[currentFormula]}
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Exploring the elegance and beauty of mathematics through 
            <span className="text-alpha-gold"> innovative projects</span> and 
            <span className="text-alpha-purple"> research</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="bg-alpha-gold text-alpha-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore Projects
            </a>
            <a 
              href="#about"
              className="border-2 border-alpha-purple text-alpha-purple px-8 py-3 rounded-lg font-semibold hover:bg-alpha-purple hover:text-white transition-all duration-300 transform hover:scale-105"
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
