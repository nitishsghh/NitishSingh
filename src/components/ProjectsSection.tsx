"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight, FaClock } from "react-icons/fa";
import { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import { getGithubProjects } from "@/lib/github";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [recentProjects, setRecentProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getGithubProjects();
        
        // Sort by updated date for recent projects
        const sortedByRecent = [...data].sort((a, b) => 
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        
        // Get 3 most recent projects
        setRecentProjects(sortedByRecent.slice(0, 3));
        
        // Sort by stars for featured projects
        const sortedByStars = [...data].sort((a, b) => b.stargazers_count - a.stargazers_count);
        // Get projects for the main grid, excluding the most recent ones
        const recentIds = sortedByRecent.slice(0, 3).map(p => p.id);
        const featuredProjects = sortedByStars
          .filter(p => !recentIds.includes(p.id))
          .slice(0, 3);
        
        setProjects(featuredProjects);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Check out some of my work. These projects showcase my skills and experience in web development.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : (
          <>
            {/* Recent Projects Section */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <FaClock className="text-blue-500 mr-2 text-xl" />
                <h3 className="text-2xl font-bold text-white">Recent Work</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} isRecent={true} />
                ))}
              </div>
            </div>
            
            {/* Featured Projects Section */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index + 3} />
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                View All Projects <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection; 