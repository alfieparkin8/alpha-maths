import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "1's in Binary",
      description: "After looking into coding permutations of something, I fell down the rabbit hole of Binary numbers and found an interesting relationship involving the number of 1's. In this article, I look at Binary numbers and the relationship between them and Pascal's Triangle. Through looking at graphs and the use of algebra, I write a formula for calculating the number of 1's in any Binary number using complex numbers and logarithms. All diagrams and plots are my own.",
      image: "/images/binary.png",
      liveUrl: "/articles/binary.pdf"
    },
    {
      title: "Planetary Motion",
      description: "Part of my Physics A Level was to create a presentation on a topic and I chose planetary motion and Kepler. In this article, I delve into the orbits of the planets, Kepler's three laws and Platonic Solids. I graphed the orbits of the planets to scale and explore how the eccentricity of the Earth fluctuates.",
      image: "/images/planetary_motion.jpg",
      liveUrl: "/articles/planetary-motion.pdf"
    },
    {
      title: "Advantageous Probability",
      description: "A problem was told to me during an episode of the Oxford Online Maths Club and I decided to research it further. The problem is, given the roll of two dice, you pick the dice with the highest value, what is the expected value of your roll? I did some research into this and managed to generalise it for any n-sided dice and I wrote a formula which generalises to any number of dice.",
      image: "/images/advantageous_probability.png",
      liveUrl: "/articles/advantageous-probability.pdf"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-alpha-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-alpha-white mb-6">
            Mathematical <span className="text-alpha-blue">Projects</span>
          </h2>
          <p className="text-xl text-alpha-chalk max-w-3xl mx-auto">
            Discover the intersection of mathematics, physics, and computational thinking through these carefully crafted projects and research articles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
          <Link to="/nrich" className="bg-alpha-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-800 hover:border-gray-600">
            <div className="relative overflow-hidden">
              <img 
                src="/images/nrich.jpg" 
                alt="NRICH Problems" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-alpha-white mb-3">NRICH Problems</h3>
              <p className="text-alpha-chalk mb-4 leading-relaxed">
                The Cambridge NRICH website has a large variety of problems to be attempted. In the past, I have submitted my own solutions to some problems and they have sequentially been published onto the website. Clicking the link will lead to a page full of the problems I have attempted with my solutions.
              </p>
              
              <div className="flex gap-3">
                <span className="flex items-center gap-2 px-4 py-2 bg-alpha-blue text-alpha-black rounded-lg hover:bg-alpha-blue/80 transition-colors duration-200 flex-1 justify-center">
                  <span className="text-sm font-medium">View Problems</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
