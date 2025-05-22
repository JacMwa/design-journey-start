
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  caseStudyUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    description: "Complete UX overhaul of an e-commerce platform, improving user flow and increasing conversion by 32%.",
    tags: ["UI/UX Design", "Figma", "User Research"],
    image: "https://placehold.co/600x400/1E40AF/FFFFFF/png?text=E-Commerce+Redesign",
    caseStudyUrl: "#"
  },
  {
    id: 2,
    title: "Health App Interface",
    description: "Designed an intuitive mobile app interface for a health tracking application with a focus on accessibility.",
    tags: ["Mobile Design", "Adobe XD", "Prototyping"],
    image: "https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Health+App",
    caseStudyUrl: "#"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Created a comprehensive dashboard for financial data visualization with complex information hierarchy.",
    tags: ["Dashboard Design", "Figma", "Data Visualization"],
    image: "https://placehold.co/600x400/6366F1/FFFFFF/png?text=Financial+Dashboard",
    caseStudyUrl: "#"
  },
  {
    id: 4,
    title: "Educational Platform Wireframes",
    description: "Developed wireframes and mockups for an educational platform focusing on intuitive navigation.",
    tags: ["Wireframing", "Balsamiq", "User Testing"],
    image: "https://placehold.co/600x400/1E40AF/FFFFFF/png?text=Educational+Platform",
    caseStudyUrl: "#"
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects(prevVisible => Math.min(prevVisible + 3, projects.length));
  };

  return (
    <section id="projects" className="section-container bg-white">
      <h2 className="section-title">Featured Projects</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        A collection of UI/UX design projects showcasing my approach to solving design challenges and creating intuitive user experiences.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleProjects).map((project) => (
          <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-3 py-1 rounded-full bg-blue-100 text-portfolio-blue font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.caseStudyUrl}
                className="inline-flex items-center text-portfolio-blue hover:text-portfolio-lightblue font-medium"
              >
                View Case Study <ArrowRight size={16} className="ml-2" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {visibleProjects < projects.length && (
        <div className="mt-10 flex justify-center">
          <Button 
            onClick={loadMore}
            variant="outline" 
            className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10"
          >
            Load More Projects
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
