
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            UI/UX Designer with a passion for <span className="text-portfolio-blue">user-centered design</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            I create intuitive digital experiences through thoughtful design thinking and
            collaborative problem-solving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-portfolio-blue hover:bg-portfolio-blue/90">
              <a href="#projects" className="flex items-center gap-2">
                View My Work <ArrowRight size={16} />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10">
            <a href="src/images/resume(2).pdf" download="resume(2).pdf"  target="_blank" rel="noopener noreferrer"     
            ></a>
              <Download size={16} className="mr-2" /> Download Resume
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center animate-fade-in">
          <div className="relative">
            <div className="bg-portfolio-accent/20 w-64 h-64 md:w-80 md:h-80 rounded-full absolute -top-6 -left-6 z-0"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-portfolio-blue to-portfolio-lightblue overflow-hidden shadow-xl z-10 relative">
              {/*image*/}
              <div className="w-full h-full flex items-center justify-center text-white">
  <span className="text-lg">
    <img src="src/images/ja.jpg"  />
  </span>
</div>
            </div>
            <div className="absolute bottom-0 right-0 bg-white rounded-lg shadow-lg p-4 z-20">
              <p className="font-bold">3+ years</p>
              <p className="text-sm text-gray-600">Design Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
