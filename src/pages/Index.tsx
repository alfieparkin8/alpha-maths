import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
const Index = () => {
  return <div className="min-h-screen bg-alpha-black">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-alpha-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            
            
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;