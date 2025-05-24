import { Mail, Youtube, Instagram, MessageSquare } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-20 bg-alpha-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-alpha-white mb-6">
          Let's <span className="text-alpha-blue">Connect</span>
        </h2>
        <p className="text-xl text-alpha-chalk mb-12 max-w-2xl mx-auto">
          Interested in collaborating on mathematical projects or discussing fascinating mathematical concepts? 
          I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <a href="mailto:alphamathsyt@gmail.com" className="bg-alpha-black border border-gray-800 rounded-xl p-6 hover:border-alpha-blue transition-colors duration-300 group">
            <Mail className="w-8 h-8 text-alpha-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-alpha-white font-semibold mb-2">Email</h3>
            <p className="text-alpha-chalk text-sm">Direct contact</p>
          </a>

          <a href="https://www.youtube.com/@AlphaMaths2004?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="bg-alpha-black border border-gray-800 rounded-xl p-6 hover:border-alpha-red transition-colors duration-300 group">
            <Youtube className="w-8 h-8 text-alpha-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-alpha-white font-semibold mb-2">YouTube</h3>
            <p className="text-alpha-chalk text-sm">Educational content</p>
          </a>

          <a href="https://www.instagram.com/alphamathsyt" target="_blank" rel="noopener noreferrer" className="bg-alpha-black border border-gray-800 rounded-xl p-6 hover:border-pink-500 transition-colors duration-300 group">
            <Instagram className="w-8 h-8 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-alpha-white font-semibold mb-2">Instagram</h3>
            <p className="text-alpha-chalk text-sm">Follow my journey</p>
          </a>
        </div>

        
      </div>
    </section>;
};
export default Contact;