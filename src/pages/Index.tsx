import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-alpha-black text-alpha-chalk">
      <Navigation />
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="projects" className="py-16">
          <Projects />
        </section>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
      <footer className="bg-alpha-dark py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Alpha Maths. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;