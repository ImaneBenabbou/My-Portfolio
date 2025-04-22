import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  status?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.status && (
          <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/70 dark:text-amber-200">
            {project.status}
          </span>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
       {/* <a 
          href={project.link} 
          className="inline-flex items-center gap-1 text-sm font-medium text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Details <ExternalLink size={14} />
        </a>
        */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;