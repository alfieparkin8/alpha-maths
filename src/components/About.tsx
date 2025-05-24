import { BookOpen, Calculator, Telescope, Users } from 'lucide-react';
const About = () => {
  const features = [{
    icon: Calculator,
    title: "Pure Mathematics",
    description: "Exploring number theory, analysis, and abstract algebra through rigorous mathematical investigation."
  }, {
    icon: Telescope,
    title: "Applied Physics",
    description: "Bridging theoretical mathematics with real-world applications in physics and astronomy."
  }, {
    icon: BookOpen,
    title: "Research & Analysis",
    description: "Deep dives into mathematical relationships and patterns with comprehensive documentation."
  }, {
    icon: Users,
    title: "Educational Content",
    description: "Making complex mathematical concepts accessible through clear explanations and visualizations."
  }];
  return <section id="about" className="py-20 bg-alpha-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-alpha-gold">Alpha Maths</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Alpha Maths represents a passionate exploration of mathematical beauty and its applications. 
            From the elegant patterns in Pascal's Triangle to the cosmic dance of planetary motion, 
            we uncover the mathematical foundations that govern our universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => <div key={index} className="text-center group animate-fade-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-alpha-gold transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-alpha-gold group-hover:text-alpha-navy" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>)}
        </div>

        
      </div>
    </section>;
};
export default About;