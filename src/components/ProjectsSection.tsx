
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  caseStudyUrl: string;
  caseStudyContent?: {
    challenge: string;
    solution: string;
    outcome: string;
    process: string[];
    images?: string[];
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    description: "Complete UX overhaul of an e-commerce platform, improving user flow and increasing conversion by 32%.",
    tags: ["UI/UX Design", "Figma", "User Research"],
    image: "https://placehold.co/600x400/1E40AF/FFFFFF/png?text=E-Commerce+Redesign",
    caseStudyUrl: "#case-study-1",
    caseStudyContent: {
      challenge: "The client's e-commerce platform had a high cart abandonment rate of 76% and poor mobile conversion rates. User testing revealed complicated checkout flows and cluttered product pages as major pain points.",
      solution: "I redesigned the entire user journey with a focus on streamlining the checkout process and improving mobile responsiveness. Key improvements included simplified product cards, a streamlined 2-step checkout, and persistent cart functionality.",
      outcome: "The redesign resulted in a 32% increase in conversion rate, 45% reduction in cart abandonment, and a 28% increase in average order value over a 3-month period post-launch.",
      process: ["User Research", "Competitive Analysis", "Wireframing", "Prototyping", "Usability Testing", "Design Implementation"],
      images: [
        "https://placehold.co/600x400/1E40AF/FFFFFF/png?text=E-Commerce+Research",
        "https://placehold.co/600x400/1E40AF/FFFFFF/png?text=E-Commerce+Wireframes",
        "https://placehold.co/600x400/1E40AF/FFFFFF/png?text=E-Commerce+Final+Design"
      ]
    }
  },
  {
    id: 2,
    title: "Health App Interface",
    description: "Designed an intuitive mobile app interface for a health tracking application with a focus on accessibility.",
    tags: ["Mobile Design", "Adobe XD", "Prototyping"],
    image: "https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Health+App",
    caseStudyUrl: "#case-study-2",
    caseStudyContent: {
      challenge: "Create an accessible health tracking app for users of all abilities, particularly focusing on older adults and those with visual impairments.",
      solution: "Developed a high-contrast, large-touch-target interface with voice navigation options. Implemented customizable dashboards and simplified data visualization to make health metrics easily understood.",
      outcome: "The app received a 4.8/5 accessibility rating and user satisfaction scores were 92% among the target demographic. Engagement metrics showed 67% of users accessing the app daily.",
      process: ["Accessibility Research", "User Interviews", "Low-fi Wireframing", "Accessible Color System Design", "Interactive Prototyping", "Usability Testing with Target Users"],
      images: [
        "https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Health+App+Research",
        "https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Health+App+Wireframes",
        "https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Health+App+Final+Design"
      ]
    }
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Created a comprehensive dashboard for financial data visualization with complex information hierarchy.",
    tags: ["Dashboard Design", "Figma", "Data Visualization"],
    image: "https://placehold.co/600x400/6366F1/FFFFFF/png?text=Financial+Dashboard",
    caseStudyUrl: "#case-study-3",
    caseStudyContent: {
      challenge: "Design a dashboard that presents complex financial data in an accessible way for users without financial expertise, while maintaining the depth of information required by professional analysts.",
      solution: "Created a modular dashboard with progressive disclosure, allowing users to drill down into details as needed. Used intuitive data visualization patterns and implemented a guided tutorial for new users.",
      outcome: "User comprehension of financial data increased by 47%, and time spent analyzing reports decreased by 35%. The client reported a 23% increase in user engagement with financial planning tools.",
      process: ["Information Architecture", "User Flow Mapping", "Data Visualization Research", "Interactive Prototyping", "A/B Testing", "User Feedback Implementation"],
      images: [
        "https://placehold.co/600x400/6366F1/FFFFFF/png?text=Financial+Dashboard+Research",
        "https://placehold.co/600x400/6366F1/FFFFFF/png?text=Financial+Dashboard+Wireframes",
        "https://placehold.co/600x400/6366F1/FFFFFF/png?text=Financial+Dashboard+Final+Design"
      ]
    }
  },
  {
    id: 4,
    title: "Educational Platform Wireframes",
    description: "Developed wireframes and mockups for an educational platform focusing on intuitive navigation.",
    tags: ["Wireframing", "Balsamiq", "User Testing"],
    image: "https://placehold.co/600x400/1E40AF/FFFFFF/png?text=Educational+Platform",
    caseStudyUrl: "#case-study-4",
    caseStudyContent: {
      challenge: "Create an intuitive learning platform that caters to different learning styles and keeps students engaged throughout their educational journey.",
      solution: "Developed a user-centered design with adaptive learning paths, interactive content modules, and gamification elements to increase engagement. Created a consistent navigation system that works across desktop and mobile devices.",
      outcome: "Student engagement increased by 41%, course completion rates improved by 38%, and user satisfaction scores were 25% higher than the industry benchmark.",
      process: ["Student Interviews", "Learning Path Mapping", "Low-fi Wireframing", "Interactive Prototyping", "Usability Testing with Students", "Iterative Design Updates"],
      images: [
        "https://placehold.co/600x400/1E40AF/FFFFFF/png?text=Educational+Platform+Research",
        "https://placehold.co/600x400/1E40AF/FFFFFF/png?text=Educational+Platform+Wireframes",
        "https://placehold.co/600x400/1E40AF/FFFFFF/png?text=Educational+Platform+Final+Design"
      ]
    }
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const loadMore = () => {
    setVisibleProjects(prevVisible => Math.min(prevVisible + 3, projects.length));
  };

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
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
              <Button 
                onClick={() => openCaseStudy(project)}
                variant="link" 
                className="inline-flex items-center text-portfolio-blue hover:text-portfolio-lightblue font-medium p-0"
              >
                View Case Study <ArrowRight size={16} className="ml-2" />
              </Button>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-portfolio-blue">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-gray-600">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">The Challenge</h3>
              <p className="mb-4">{selectedProject.caseStudyContent?.challenge}</p>
              
              <h3 className="text-xl font-bold mb-2">The Solution</h3>
              <p className="mb-4">{selectedProject.caseStudyContent?.solution}</p>
              
              <h3 className="text-xl font-bold mb-2">The Outcome</h3>
              <p className="mb-4">{selectedProject.caseStudyContent?.outcome}</p>
              
              <h3 className="text-xl font-bold mb-2">Design Process</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                {selectedProject.caseStudyContent?.process.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-portfolio-blue text-white flex items-center justify-center mr-2 text-sm">{index + 1}</span>
                    <span>{step}</span>
                    {index < (selectedProject.caseStudyContent?.process.length || 0) - 1 && (
                      <ArrowRight size={16} className="mx-2 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
              
              {selectedProject.caseStudyContent?.images && (
                <>
                  <h3 className="text-xl font-bold mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.caseStudyContent.images.map((image, index) => (
                      <div key={index} className="aspect-video overflow-hidden rounded-md">
                        <img 
                          src={image} 
                          alt={`${selectedProject.title} - Image ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              <div className="mt-8 flex justify-end">
                <Button 
                  onClick={() => setIsDialogOpen(false)}
                  className="bg-portfolio-blue hover:bg-portfolio-blue/90"
                >
                  Close Case Study
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
