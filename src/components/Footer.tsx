
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Portfolio</h2>
            <p className="text-gray-300 max-w-md">
              Creating intuitive and engaging digital experiences through thoughtful design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-portfolio-blue hover:bg-portfolio-blue/80 p-3 rounded-full transition-colors mb-4"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
