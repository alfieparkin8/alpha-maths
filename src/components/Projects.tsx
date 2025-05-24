
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "1's in Binary",
      description: "After looking into coding permutations of something, I fell down the rabbit hole of Binary numbers and found an interesting relationship involving the number of 1's. In this article, I look at Binary numbers and the relationship between them and Pascal's Triangle.",
      image: "/lovable-uploads/593c439f-65d7-49c6-992d-3e8b00b1eb2c.png",
      technologies: ["Number Theory", "Binary", "Pascal's Triangle", "Graph Theory"],
      liveUrl: "#",
      githubUrl: "#",
      formula: "∑(n choose k) = 2^n"
    },
    {
      title: "Planetary Motion",
      description: "Part of my Physics A Level was to create a presentation on a topic and I chose planetary motion and Kepler. In this article, I delve into the orbits of the planets, Kepler's three laws and Platonic Solids. I graphed the orbits of the planets to scale and explore how the eccentricity of the Earth fluctuates.",
      image: "/lovable-uploads/593c439f-65d7-49c6-992d-3e8b00b1eb2c.png",
      technologies: ["Physics", "Orbital Mechanics", "Data Visualization", "Kepler's Laws"],
      liveUrl: "#",
      githubUrl: "#",
      formula: "T² ∝ a³"
    },
    {
      title: "Mathematical Visualizations",
      description: "Interactive visualizations of complex mathematical concepts using modern web technologies. Explore fractals, calculus, and geometric transformations through dynamic animations.",
      image: "/lovable-uploads/4410727f-9fe2-4f40-9cd9-a2abc4b3a1c4.png",
      technologies: ["JavaScript", "WebGL", "D3.js", "Mathematical Modeling"],
      liveUrl: "#",
      githubUrl: "#",
      formula: "f(z) = z² + c"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mathematical <span className="text-alpha-gold">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the intersection of mathematics, physics, and computational thinking through these carefully crafted projects and research articles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
