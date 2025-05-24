
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  formula?: string;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl, formula }: ProjectCardProps) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {formula && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="math-formula text-alpha-gold text-2xl">{formula}</p>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-alpha-navy text-alpha-gold text-sm rounded-full border border-alpha-gold/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-alpha-gold hover:text-yellow-400 transition-colors duration-200"
            >
              <ExternalLink size={16} />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-alpha-purple hover:text-purple-400 transition-colors duration-200"
            >
              <Github size={16} />
              <span className="text-sm">Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
