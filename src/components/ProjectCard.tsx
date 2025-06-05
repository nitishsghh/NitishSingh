"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaCode, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  isRecent?: boolean;
}

const ProjectCard = ({ project, index, isRecent = false }: ProjectCardProps) => {
  const [showCode, setShowCode] = useState(false);

  // Check if project is recent (updated within the last 30 days)
  const isRecentlyUpdated = () => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return new Date(project.updated_at) > thirtyDaysAgo;
  };

  // Get language color based on language name
  const getLanguageColor = (language: string | null) => {
    if (!language) return 'bg-gray-500';

    const colorMap: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-500',
      'HTML': 'bg-orange-500',
      'HTML/CSS': 'bg-orange-500',
      'CSS': 'bg-blue-400',
      'Python': 'bg-green-500',
      'Java': 'bg-red-500',
      'C++': 'bg-purple-500',
      'C#': 'bg-green-600',
      'PHP': 'bg-indigo-500',
      'Ruby': 'bg-red-600',
      'Go': 'bg-blue-300',
      'Rust': 'bg-orange-600',
      'Swift': 'bg-orange-500',
      'Kotlin': 'bg-purple-400',
      'Mobile App': 'bg-teal-500',
      'Web': 'bg-blue-400',
    };
    
    return colorMap[language] || 'bg-gray-500';
  };

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  
  // Mock code snippet for demonstration purposes
  const codeSnippet = `// Example code from ${project.name}
function main() {
  console.log("This is a sample code snippet");
  // Implementation details would go here
  return "Project: ${project.name}";
}

// ${project.language || 'JavaScript'} implementation
class ${project.name.replace(/[^a-zA-Z0-9]/g, '')} {
  constructor() {
    this.name = "${project.name}";
    this.language = "${project.language || 'JavaScript'}";
  }
  
  run() {
    // Project functionality
  }
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, scale:1.03, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700/70 group flex flex-col h-full" // Added flex flex-col h-full
    >
      <div className="relative p-6 flex-grow flex flex-col"> {/* Increased padding, added flex-grow flex flex-col */}
        {/* Color accent based on language */}
        <div className={`absolute top-0 left-0 w-full h-1.5 ${getLanguageColor(project.language)} group-hover:h-2 transition-all duration-300`}></div>
        
        {/* Recent badge */}
        {(isRecent || isRecentlyUpdated()) && (
          <motion.div
            initial={{ opacity:0, scale:0.8 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="absolute top-5 right-5 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center shadow-md z-10" // Adjusted position, padding, font
          >
            <FaClock className="mr-1.5" /> Recent
          </motion.div>
        )}
        
        <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3> {/* Increased size, margin */}
        <div className="flex items-center mt-1 mb-5 text-sm text-gray-400"> {/* Adjusted margin, color */}
          {project.language && (
          <motion.span
            initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }} transition={{ delay: index * 0.1 + 0.2 }}
            className={`flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getLanguageColor(project.language)} mr-3`} // Adjusted padding, margin
          >
            <FaCode className="mr-1.5" /> {project.language}
          </motion.span>
          )}
          <motion.span initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay: index * 0.1 + 0.3 }} className="flex items-center mr-3">
            <FaStar className="mr-1 text-yellow-400" /> {project.stargazers_count}
          </motion.span>
          <motion.span initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay: index * 0.1 + 0.4 }} className="flex items-center">
            <FaCodeBranch className="mr-1 text-gray-500" /> {project.forks_count}
          </motion.span>
        </div>

        <p className="text-gray-300 text-sm mb-5 h-20 overflow-hidden flex-grow"> {/* Increased margin, height, added flex-grow */}
          {project.description || "No description available."}
        </p>
        
        <div className="text-xs text-gray-500 mb-5"> {/* Adjusted color, margin */}
          Last updated: {formatDate(project.updated_at)}
        </div>
        
        {/* Links moved to bottom of card content, before code snippet toggle */}
        <div className="mt-auto"> {/* Pushes content below to bottom */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition duration-300 group/link"
            >
              <FaGithub className="mr-2" /> <span className="group-hover/link:underline">Repository</span>
            </a>
            
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-400 hover:text-green-300 font-medium transition duration-300 group/link"
              >
                <FaExternalLinkAlt className="mr-2" /> <span className="group-hover/link:underline">Live Demo</span>
              </a>
            )}
          </div>

          <div className="mb-4"> {/* Added margin bottom */}
            <button
              onClick={() => setShowCode(!showCode)}
              className="w-full py-2.5 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition duration-300 flex items-center justify-center font-medium button-hover-effect" // Adjusted padding, radius
            >
              <FaCode className="mr-2" />
              {showCode ? "Hide Code Snippet" : "Show Code Snippet"}
            </button>
          </div>
        
          <motion.div
            initial={false}
            animate={{ height: showCode ? "auto" : 0, opacity: showCode ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }} // Smoother transition
            className="overflow-hidden"
          >
            {showCode && (
              <div className="mt-3 bg-gray-900/70 p-4 rounded-lg border border-gray-700 overflow-x-auto"> {/* Adjusted bg, padding, border */}
                <pre className="text-gray-300 text-xs leading-relaxed"> {/* Added leading-relaxed */}
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            )}
          </motion.div>
          
          <div className="mt-5"> {/* Increased margin */}
            <a
              href={project.html_url} // Assuming this should be a link to a more detailed project page if available, or fallback to repo
              target="_blank" // Or link to a local page: `/projects/${project.name}`
              rel="noopener noreferrer"
              className="w-full block text-center py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 button-hover-effect text-base" // Adjusted padding, font, radius
            >
              View Full Details
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
