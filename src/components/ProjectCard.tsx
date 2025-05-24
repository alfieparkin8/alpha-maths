import { ExternalLink, Github } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}
const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl
}: ProjectCardProps) => {
  return <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>
      
      
    </div>;
};
export default ProjectCard;