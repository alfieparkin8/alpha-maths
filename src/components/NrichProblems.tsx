import { ExternalLink } from 'lucide-react';
import Navigation from './Navigation';
import ProjectCard from './ProjectCard';

const NrichProblems = () => {
  const problems = [
    {
      title: "Two Cubic Equations",
      description: "A deep dive into solving cubic equations and understanding their properties.",
      image: "/images/cubic.png",
      liveUrl: "/articles/two-cubics.pdf"
    },
    {
      title: "Solving By Squaring",
      description: "Explore the technique of solving equations by squaring both sides.",
      image: "/images/solving_by_squaring.jpg",
      liveUrl: "/articles/solving-by-squaring.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-alpha-black">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-alpha-chalk mb-8">NRICH Problems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <ProjectCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NrichProblems; 