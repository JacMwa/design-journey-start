
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Award, BookOpen } from "lucide-react";

const AboutSection = () => {
  const experiences = [
    {
      program: "Progskills Academy",
      role: "UI/UX Design Student",
      period: "2023 - Present",
      description: "Participated in comprehensive UI/UX design training, focusing on design principles, user research methodologies, and prototyping techniques."
    },
    {
      program: "IBM SkillsBuild",
      role: "Design Thinking Participant",
      period: "2022 - 2023",
      description: "Completed the Design Thinking curriculum, learning enterprise-level approaches to solving complex user problems and creating innovative solutions."
    }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg">
            I'm a passionate UI/UX designer with a focus on creating user-centered digital experiences. 
            Through my training at Progskills Academy and IBM SkillsBuild, I've developed a strong 
            foundation in design principles and user research methodologies.
          </p>
          
          <p>
            My approach combines analytical thinking with creative problem-solving to craft 
            interfaces that are not only aesthetically pleasing but also highly functional and intuitive. 
            I believe that great design should be invisible, enabling users to accomplish their goals 
            without friction or confusion.
          </p>
          
          <p>
            I enjoy collaborating with cross-functional teams to transform complex requirements into 
            simple, elegant solutions. Throughout my projects, I've gained experience in conducting user 
            interviews, creating wireframes, developing high-fidelity mockups, and testing prototypes 
            to ensure optimal usability.
          </p>
          
          <div className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Education & Training</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold">{exp.program}</h4>
                    <div className="flex items-center text-gray-600 mt-1 mb-3">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.role}</span>
                    </div>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <Card className="border-none shadow-md bg-gradient-to-br from-blue-50 to-white p-6">
              <CardContent className="p-0 space-y-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-accent mx-auto mb-4">
                    <div className="w-full h-full rounded-full border-4 border-white flex items-center justify-center text-white font-bold">
                      YP
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Jackline Matindi</h3>
                  <p className="text-gray-600">UI/UX Designer</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-portfolio-blue" /> Achievements
                    </h4>
                    <ul className="text-sm space-y-1 pl-7 list-disc">
                      <li>UI/UX Design Certification</li>
                      <li>Design Thinking Workshop Leader</li>
                      <li>Featured Student Project</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-portfolio-blue" /> Interests
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Accessibility", "Mobile UX", "Design Systems", "UX Writing"].map((interest) => (
                        <span key={interest} className="text-xs px-3 py-1 rounded-full bg-blue-100 text-portfolio-blue">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
