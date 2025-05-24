import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  liveUrl
}: ProjectCardProps) => {
  return (
    <div className="bg-alpha-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-800 hover:border-gray-600">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-alpha-white mb-3">{title}</h3>
        <p className="text-alpha-chalk mb-4 leading-relaxed">{description}</p>
        
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              className="flex items-center gap-2 px-4 py-2 bg-alpha-blue text-alpha-black rounded-lg hover:bg-alpha-blue/80 transition-colors duration-200 flex-1 justify-center"
            >
              <ExternalLink size={16} />
              <span className="text-sm font-medium">Read More</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
