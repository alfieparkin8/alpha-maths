
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-alpha-navy">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-alpha-navy border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-playfair font-bold text-alpha-gold mb-4">
              α<span className="text-white ml-1">Maths</span>
            </div>
            <p className="text-gray-400 mb-4">
              Exploring the infinite beauty of mathematics
            </p>
            <div className="math-formula text-alpha-gold/60">
              ∀x ∈ ℝ : beauty(mathematics) = ∞
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
