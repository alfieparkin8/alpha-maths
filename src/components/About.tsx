
import { BookOpen, Calculator, Telescope, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Calculator,
      title: "Pure Mathematics",
      description: "Exploring number theory, analysis, and abstract algebra through rigorous mathematical investigation.",
      color: "text-alpha-blue"
    },
    {
      icon: Telescope,
      title: "Applied Physics",
      description: "Bridging theoretical mathematics with real-world applications in physics and astronomy.",
      color: "text-alpha-green"
    },
    {
      icon: BookOpen,
      title: "Research & Analysis",
      description: "Deep dives into mathematical relationships and patterns with comprehensive documentation.",
      color: "text-alpha-red"
    },
    {
      icon: Users,
      title: "Educational Content",
      description: "Making complex mathematical concepts accessible through clear explanations and visualizations.",
      color: "text-alpha-yellow"
    }
  ];

  return (
    <section id="about" className="py-20 bg-alpha-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-alpha-white mb-6">
            About <span className="text-alpha-blue">Alpha Maths</span>
          </h2>
          <p className="text-xl text-alpha-chalk max-w-3xl mx-auto mb-12">
            Alpha Maths represents a passionate exploration of mathematical beauty and its applications. 
            From the elegant patterns in Pascal's Triangle to the cosmic dance of planetary motion, 
            we uncover the mathematical foundations that govern our universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in bg-alpha-black/50 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300" 
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-alpha-black border-2 border-current ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-alpha-white mb-3">{feature.title}</h3>
              <p className="text-alpha-chalk leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
