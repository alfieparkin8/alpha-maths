
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's <span className="text-alpha-gold">Connect</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Interested in collaborating on mathematical projects or discussing fascinating mathematical concepts? 
          I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <a 
            href="mailto:contact@alphamaths.com" 
            className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300 group"
          >
            <Mail className="w-8 h-8 text-alpha-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">Direct contact</p>
          </a>

          <a 
            href="https://github.com/alfieparkin8" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300 group"
          >
            <Github className="w-8 h-8 text-alpha-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">Code & projects</p>
          </a>

          <a 
            href="https://linkedin.com/in/alfie-parkin" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300 group"
          >
            <Linkedin className="w-8 h-8 text-alpha-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Professional network</p>
          </a>

          <a 
            href="#" 
            className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300 group"
          >
            <MessageSquare className="w-8 h-8 text-alpha-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-white font-semibold mb-2">Discord</h3>
            <p className="text-gray-400 text-sm">Math discussions</p>
          </a>
        </div>

        <div className="bg-gradient-to-r from-alpha-navy to-slate-800 rounded-2xl p-8 border border-alpha-gold/20">
          <div className="math-formula text-2xl text-alpha-gold mb-4">
            lim(curiosity → ∞) collaboration = breakthrough
          </div>
          <p className="text-gray-300">
            Whether you want to discuss mathematical concepts, collaborate on research, 
            or explore new educational approaches, I'm always excited to connect with fellow mathematics enthusiasts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
