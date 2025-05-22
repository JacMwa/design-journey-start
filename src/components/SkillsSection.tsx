
import { Card, CardContent } from "@/components/ui/card";
import { 
  Layers, Lightbulb, Users, Search, Layout, 
  Paintbrush, PenTool, Monitor, LineChart, Check
} from "lucide-react";

const SkillsSection = () => {
  const designSkills = [
    { icon: <Layers className="h-6 w-6" />, name: "UI/UX Design", level: 90 },
    { icon: <Lightbulb className="h-6 w-6" />, name: "Design Thinking", level: 85 },
    { icon: <Users className="h-6 w-6" />, name: "User Research", level: 80 },
    { icon: <Search className="h-6 w-6" />, name: "Usability Testing", level: 75 },
    { icon: <Layout className="h-6 w-6" />, name: "Wireframing", level: 95 },
    { icon: <Paintbrush className="h-6 w-6" />, name: "Visual Design", level: 85 },
  ];
  
  const tools = [
    { name: "Figma", logo: <PenTool className="h-6 w-6" /> },
    { name: "Adobe XD", logo: <Monitor className="h-6 w-6" /> },
    { name: "Balsamiq", logo: <LineChart className="h-6 w-6" /> },
    { name: "Canva", logo: <Paintbrush className="h-6 w-6" /> },
  ];

  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Design Skills</h3>
          <div className="space-y-6">
            {designSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {skill.icon}
                    <span className="ml-2 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-portfolio-blue to-portfolio-accent"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6">Tools & Software</h3>
          <div className="grid grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Card key={tool.name} className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {tool.logo}
                  </div>
                  <h4 className="text-lg font-bold">{tool.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Additional Skills</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["Responsive Design", "Design Systems", "Information Architecture", "Prototyping", "Accessibility", "User Flows"].map((skill) => (
                <li key={skill} className="flex items-center">
                  <Check className="h-5 w-5 text-portfolio-blue mr-2" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Design Process</h3>
        <div className="flex flex-wrap justify-center">
          {["Research", "Define", "Ideate", "Prototype", "Test", "Implement"].map((stage, index) => (
            <div key={stage} className="relative">
              <div className="w-36 md:w-48 p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-blue text-white flex items-center justify-center mb-3">
                  {index + 1}
                </div>
                <h4 className="font-bold">{stage}</h4>
              </div>
              {index < 5 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
